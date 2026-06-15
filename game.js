let G = { coins: 0, day: 1, cOrder: [], cIdx: 0, outfit: {}, typeTimer: null, dayCoins: 0, dayScore: 0 };

const MANAGER_MSGS = [
  'Welkom bij Y2K Boutique! Ik ben Belle, jouw manager. Luister goed naar elke klant en style ze perfect. Hoe beter de match, hoe meer coins je verdient. Succes!',
  'Goedemorgen! Dag 2 al! Klanten hebben elk een unieke smaak. Retro, glamour, kawaii... lees hun wensen goed voor de perfecte outfit!',
  'Hey jij! Dag 3 is begonnen. De klanten worden veeleisender. Vertrouw op je gevoel voor stijl en kies slim. Ik geloof in jou!',
  'Dag 4! Nog steeds aan het werk? Geweldig! Probeer vandaag elke klant een perfecte score te geven. Dat levert de meeste coins op!',
  'Hoi hoi! Belle hier. Wist je dat accessoires en haar ook punten opleveren? Vergeet ze niet mee te nemen in de outfit!',
];

function shuffle(arr) {
  const b = [...arr];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function startGame() {
  SFX.click();
  SFX.startBoutique();
  document.getElementById('startScreen').style.display = 'none';
  G.cOrder = shuffle([0, 1, 2]);
  G.cIdx = 0;
  showPhoneCall();
}

function showPhoneCall() {
  const msg = MANAGER_MSGS[Math.min(G.day - 1, MANAGER_MSGS.length - 1)];
  document.getElementById('phoneMsg').textContent = 'Binnenkomend gesprek...';
  document.getElementById('phoneActions').innerHTML =
    '<button class="phone-btn answer" onclick="answerCall()">Opnemen</button>' +
    '<button class="phone-btn decline" onclick="dismissCall()">Negeren</button>';
  const popup = document.getElementById('phoneCall');
  popup.style.display = 'flex';
  popup.classList.remove('answered');
  popup.dataset.msg = msg;
  SFX.ring();
}

function answerCall() {
  SFX.click();
  SFX.stopRing();
  const popup = document.getElementById('phoneCall');
  popup.classList.add('answered');
  const msg = popup.dataset.msg;
  document.getElementById('phoneMsg').textContent = msg;
  document.getElementById('phoneActions').innerHTML =
    '<button class="phone-btn answer" onclick="dismissCall()">Ophangen</button>';
}

function dismissCall() {
  SFX.click();
  SFX.stopRing();
  document.getElementById('phoneCall').style.display = 'none';
  loadCustomer();
}

function setChar(expr) {
  const c = CUSTOMERS[G.cOrder[G.cIdx]];
  const img = document.getElementById('charImg');
  img.src = c.imgs[expr];
  img.className = 'char-img enter';
  setTimeout(() => img.classList.remove('enter'), 400);
}

function loadCustomer() {
  G.outfit = {};
  document.getElementById('wardrobePanel').style.display = 'none';
  showScene(0);
}

function showScene(idx) {
  const c = CUSTOMERS[G.cOrder[G.cIdx]];
  const sc = c.scenes[idx];
  document.getElementById('phaseTag').textContent = sc.phase;
  document.getElementById('speakerName').textContent = sc.speaker;
  document.getElementById('speakerName').style.color = sc.speaker === 'Boutique' ? '#da77f2' : c.color;
  document.getElementById('dActions').innerHTML = '';
  document.getElementById('sceneBg').className = 'scene-bg' + (sc.wardrobe ? ' changingroom' : '');
  setChar(sc.expr);
  if (sc.wardrobe) {
    document.getElementById('wardrobePanel').style.display = 'block';
    renderWardrobe();
  } else {
    document.getElementById('wardrobePanel').style.display = 'none';
  }
  typeText(sc.text, () => {
    if (!sc.wardrobe) {
      sc.actions.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'd-btn';
        btn.textContent = a.lbl;
        btn.onclick = () => { SFX.click(); showScene(a.next); };
        document.getElementById('dActions').appendChild(btn);
      });
    }
  });
}

function typeText(txt, cb) {
  if (G.typeTimer) clearInterval(G.typeTimer);
  const el = document.getElementById('dText');
  el.innerHTML = '';
  let i = 0;
  const cur = document.createElement('span');
  cur.className = 'cursor';
  G.typeTimer = setInterval(() => {
    if (i < txt.length) {
      el.textContent = txt.slice(0, ++i);
      el.appendChild(cur);
    } else {
      clearInterval(G.typeTimer);
      el.textContent = txt;
      if (cb) cb();
    }
  }, 20);
}

function submitOutfit() {
  const c = CUSTOMERS[G.cOrder[G.cIdx]];
  const items = Object.values(G.outfit);
  if (items.length < 1) { showFeedback('Voeg items toe!', '#ffd700'); return; }
  const wish = c.wish_tags;
  let matches = 0;
  items.forEach(it => it.tags.forEach(t => { if (wish.indexOf(t) > -1) matches++; }));
  const ratio = matches / (items.length * wish.length);
  let earned = 0, expr = '', reaction = '';
  if (ratio >= 0.5) {
    earned = Math.round(40 + items.length * 15);
    expr = 'happy';
    reaction = 'goed';
    if (ratio >= 0.75) { earned = Math.round(70 + items.length * 15); reaction = 'perfect'; }
  } else {
    expr = 'sad';
    reaction = 'slecht';
  }
  G.coins += earned;
  G.dayCoins += earned;
  G.dayScore += reaction === 'perfect' ? 3 : reaction === 'goed' ? 1 : 0;
  document.getElementById('coinNum').textContent = G.coins;
  setChar(expr);
  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('dActions').innerHTML = '';
  document.getElementById('phaseTag').textContent = reaction === 'perfect' ? 'Perfect!' : reaction === 'goed' ? 'Goed!' : 'Helaas...';
  document.getElementById('speakerName').textContent = c.name;
  document.getElementById('speakerName').style.color = c.color;
  const lines = {
    perfect: [
      'OH WOW! Dit is exact wat ik zocht! Ik ben zo blij! Jij bent echt geweldig!',
      'YES! Perfecte match! Jij snapt mijn stijl compleet. Ik kom hier altijd terug!'
    ],
    goed: [
      'Oh nice, dit is wel leuk! Niet precies wat ik had gedacht maar ik vind het wel mooi!',
      'Hmm okie, het is best cute. Ik neem het mee! Volgende keer iets meer pit graag.'
    ],
    slecht: [
      'Ehm... dit is echt niet mijn stijl. Ik denk dat ik ergens anders ga kijken. Sorry.',
      'Nee, dit past echt niet bij wat ik zoek. Ik verwachtte meer van jullie boutique...'
    ]
  };
  const txt = lines[reaction][Math.floor(Math.random() * 2)];
  if (earned > 0) showFeedback('+' + earned + ' coins!', '#ffd700');
  typeText(txt, () => {
    const btn = document.createElement('button');
    btn.className = 'd-btn pri';
    btn.textContent = 'Volgende klant >';
    btn.onclick = () => { SFX.click(); nextCustomer(); };
    document.getElementById('dActions').appendChild(btn);
  });
  G.outfit = {};
}

function nextCustomer() {
  G.cIdx++;
  if (G.cIdx >= G.cOrder.length) {
    showDayOverview();
    return;
  }
  loadCustomer();
}

function showDayOverview() {
  document.getElementById('ovDay').textContent = G.day;
  document.getElementById('ovCoins').textContent = G.dayCoins + ' coins';
  document.getElementById('ovScore').textContent = G.dayScore + ' / 9';
  document.getElementById('dayOverview').style.display = 'flex';
  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('sceneBg').className = 'scene-bg';
}

function continueToNextDay() {
  SFX.click();
  G.day++;
  G.cOrder = shuffle([0, 1, 2]);
  G.cIdx = 0;
  G.dayCoins = 0;
  G.dayScore = 0;
  document.getElementById('dayNum').textContent = G.day;
  document.getElementById('dayOverview').style.display = 'none';
  showPhoneCall();
}

function showTutorial() {
  SFX.click();
  document.getElementById('tutorialOverlay').style.display = 'flex';
}

function closeTutorial() {
  SFX.click();
  document.getElementById('tutorialOverlay').style.display = 'none';
}

function showFeedback(msg, color) {
  const el = document.getElementById('feedPop');
  el.style.color = color;
  el.className = 'feedback-pop';
  void el.offsetWidth;
  el.textContent = msg;
  el.className = 'feedback-pop show';
}
