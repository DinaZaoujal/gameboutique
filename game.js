let G = { coins: 0, day: 1, cOrder: [], cIdx: 0, outfit: {}, typeTimer: null, dayCoins: 0, dayScore: 0, totalScore: 0 };
const TOTAL_DAYS = 7;

const MANAGER_MSGS = [
  // Dag 1 - welkom
  [
    'Welkom bij Y2K Boutique! Ik ben Belle, jouw manager. Luister goed naar elke klant en style ze perfect. Hoe beter de match, hoe meer coins je verdient. Succes!',
    'Hoi! Fijn dat je er bent! Ik ben Belle. Jouw taak is om klanten te helpen met de perfecte Y2K outfit. Lees hun wensen goed en sleep de items naar de shopping bag. Let\'s go!',
  ],
  // Dag 2
  [
    'Goedemorgen! Dag 2 al! Klanten hebben elk een unieke smaak. Retro, glamour, kawaii... lees hun wensen goed voor de perfecte outfit!',
    'Belle hier! Gisteren deed je het prima. Vandaag tip: let op de categorieen. Een broek, top EN schoenen samen geeft meer punten dan slechts 1 item!',
  ],
  // Dag 3
  [
    'Hey jij! Dag 3 is begonnen. De klanten worden veeleisender. Vertrouw op je gevoel voor stijl en kies slim. Ik geloof in jou!',
    'Morgen! Belle hier. Dag 3 betekent dat de klanten hogere verwachtingen hebben. Combineer stijlen slim. Een glamour klant wil geen casual sneakers, snap je?',
  ],
  // Dag 4
  [
    'Dag 4! Nog steeds aan het werk? Geweldig! Probeer vandaag elke klant een perfecte score te geven. Dat levert de meeste coins op!',
    'Belle hier! Halverwege de week al. Pro tip: accessoires zoals zonnebrillen en kettingen maken een outfit compleet. Vergeet ze niet!',
  ],
  // Dag 5
  [
    'Hoi hoi! Belle hier. Wist je dat accessoires en haar ook punten opleveren? Vergeet ze niet mee te nemen in de outfit!',
    'Dag 5! Ik heb de verkoopcijfers bekeken... niet slecht! Maar ik wil vandaag PERFECT zien. Elke klant verdient jouw beste werk!',
  ],
  // Dag 6
  [
    'Goedemorgen! Dag 6 -- nog 2 dagen te gaan! Jouw prestaties bepalen of je gepromoveerd wordt. Geef alles wat je hebt vandaag!',
    'Belle hier. Ik ga eerlijk zijn: de eigenaar kijkt mee. Dag 6 en 7 zijn cruciaal. Style elke klant alsof het de laatste kans is. Succes!',
  ],
  // Dag 7
  [
    'Dit is het! De laatste dag! Belle hier. Alles wat je vandaag doet telt mee voor jouw eindbeoordeling. Maak er iets moois van -- ik geloof in jou!',
    'Dag 7! De grote finale. Ik ben nerveus en trots tegelijk. Style elke klant perfect en wie weet... feliciteer ik je straks met een promotie!',
  ],
];

const MANAGER_REACTIONS = {
  perfect: [
    'Wauw!! Perfecte outfit! Zo doe je dat! Ik ben super trots!',
    'YES! Die klant was zo blij! Jij hebt een echt talent voor stijl!',
    'Perfect!! Dit is precies wat ik bedoel. Zo win je het hart van elke klant!',
    'Oh mijn god, geweldig! Die combo was *chef\'s kiss*. Blijf dit doen!',
  ],
  goed: [
    'Goed gedaan! Niet perfect, maar zeker niet slecht. Volgende keer iets meer op de tags letten!',
    'Oké, dat was solide werk. Ik denk dat er nog iets meer glamour bij kon, maar de klant was tevreden!',
    'Belle hier. Goed hoor! Probeer volgende keer de stijl nog beter te matchen voor die perfecte score.',
    'Netjes! De klant nam het mee. Maar ik weet dat jij beter kan -- doe dat volgende keer!',
  ],
  slecht: [
    'Oei... dat was niet geweldig. Lees de volgende keer beter wat de klant wil. Kijk naar de tags!',
    'Hmm. Die klant was niet blij. Geen paniek -- iedereen heeft een off day. Maak het goed bij de volgende!',
    'Belle hier. Ik zag wat er misging. Probeer de stijl van de klant te begrijpen voor je items kiest. Je kan dit!',
    'Au. Dat deed pijn om te zien. Focus je! Lees de dialoog goed en kies items die passen bij de smaak.',
  ],
};

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
  const dayMsgs = MANAGER_MSGS[Math.min(G.day - 1, MANAGER_MSGS.length - 1)];
  const msg = dayMsgs[Math.floor(Math.random() * dayMsgs.length)];
  document.getElementById('phoneMsg').textContent = 'Binnenkomend gesprek...';
  document.getElementById('managerCallImg').src = ASSETS.manager_neutral;
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
  document.getElementById('managerCallImg').src = ASSETS.manager_blij;
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
  img.style.display = 'block';
  img.className = 'char-img enter';
  setTimeout(() => img.classList.remove('enter'), 400);
}

function loadCustomer() {
  G.outfit = {};
  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('managerBubble').style.display = 'none';
  document.getElementById('speakerWarning').style.display = 'none';
  hidePaperNote();
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
    showPaperNote(c);
  } else {
    document.getElementById('wardrobePanel').style.display = 'none';
    hidePaperNote();
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
  const pts = reaction === 'perfect' ? 3 : reaction === 'goed' ? 1 : 0;
  G.coins += earned;
  G.dayCoins += earned;
  G.dayScore += pts;
  G.totalScore += pts;
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
  hidePaperNote();
  if (earned > 0) showFeedback('+' + earned + ' coins!', '#ffd700');
  if (reaction === 'slecht') {
    setTimeout(() => showSpeakerWarning(), 700);
    setTimeout(() => showManagerReaction(reaction), 5200);
  } else {
    setTimeout(() => showManagerReaction(reaction), 1800);
  }
  typeText(txt, () => {
    const btn = document.createElement('button');
    btn.className = 'd-btn pri next-customer-btn';
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
  if (G.day === TOTAL_DAYS) {
    showEnding();
    return;
  }
  document.getElementById('ovDay').textContent = G.day;
  document.getElementById('ovCoins').textContent = G.dayCoins + ' coins';
  document.getElementById('ovScore').textContent = G.dayScore + ' / 9';
  let managerExpr;
  if (G.dayScore >= 7)      managerExpr = ASSETS.manager_blij;
  else if (G.dayScore >= 4) managerExpr = ASSETS.manager_tevreden;
  else if (G.dayScore >= 1) managerExpr = ASSETS.manager_teleurgesteld;
  else                      managerExpr = ASSETS.manager_boos;
  document.getElementById('dayManagerImg').src = managerExpr;
  document.getElementById('dayOverview').style.display = 'flex';
  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('sceneBg').className = 'scene-bg';
}

function showEnding() {
  const maxScore = TOTAL_DAYS * 9;
  const promoted = G.totalScore >= 35;
  document.getElementById('endingManagerImg').src = promoted ? ASSETS.manager_blij : ASSETS.manager_boos;
  document.getElementById('endingTitle').textContent = promoted ? 'Gefeliciteerd! Je bent gepromoveerd!' : 'Helaas... Je bent ontslagen.';
  document.getElementById('endingTitle').style.color = promoted ? '#c2185b' : '#8b0000';
  document.getElementById('endingMsg').textContent = promoted
    ? 'Belle is super trots op jou! Met ' + G.totalScore + ' / ' + maxScore + ' punten en ' + G.coins + ' coins heb je bewezen dat jij de beste stylist bent. Welkom als hoofdstylist!'
    : 'Met ' + G.totalScore + ' / ' + maxScore + ' punten en ' + G.coins + ' coins was het helaas niet genoeg. Belle moest een moeilijke beslissing nemen. Probeer het opnieuw!';
  document.getElementById('endingScore').textContent = G.totalScore + ' / ' + maxScore + ' punten';
  document.getElementById('endingCoins').textContent = G.coins + ' coins verdiend';
  document.getElementById('endingScreen').style.display = 'flex';
  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('sceneBg').className = 'scene-bg';
}

function restartGame() {
  SFX.click();
  G = { coins: 0, day: 1, cOrder: [], cIdx: 0, outfit: {}, typeTimer: null, dayCoins: 0, dayScore: 0, totalScore: 0 };
  document.getElementById('coinNum').textContent = '0';
  document.getElementById('dayNum').textContent = '1';
  document.getElementById('charImg').style.display = 'none';
  document.getElementById('charImg').src = '';
  document.getElementById('endingScreen').style.display = 'none';
  document.getElementById('startScreen').style.display = 'flex';
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

let bubbleTimer = null;
let speakerTimer = null;

const SPEAKER_WARNINGS = [
  'Deze klant was niet blij. Lees de wensen goed en kies items die bij de stijl passen!',
  'Oeps! De outfit matcht niet. Kijk naar de stijltags van de klant voor een betere keuze.',
  'Slechte verkoop! Probeer tags zoals "retro", "glamour" of "kawaii" goed te combineren.',
  'De klant vertrok teleurgesteld. Let op de categorieen en stijl van wat zij zoeken!',
];

function showSpeakerWarning() {
  if (speakerTimer) clearTimeout(speakerTimer);
  const msg = SPEAKER_WARNINGS[Math.floor(Math.random() * SPEAKER_WARNINGS.length)];
  document.getElementById('speakerMsg').textContent = msg;
  document.getElementById('speakerWarning').style.display = 'flex';
  speakerTimer = setTimeout(() => {
    document.getElementById('speakerWarning').style.display = 'none';
  }, 4000);
}

function showPaperNote(customer) {
  const tags = customer.wish_tags;
  const tagLabels = {
    casual: 'Casual & comfy', retro: 'Retro vibes', Y2K: 'Y2K stijl',
    glamour: 'Glamour & glitter', kawaii: 'Kawaii & schattig', chic: 'Chic & elegant',
    avond: 'Avond & formeel', street: 'Street style', minimaal: 'Minimalistisch',
  };
  const lines = [
    `Klant: ${customer.name}`,
    `Zoekt: ${tags.map(t => tagLabels[t] || t).join(', ')}`,
    '',
    'Tip: Match zoveel mogelijk tags voor perfecte score!',
  ];
  document.getElementById('paperBody').innerHTML = lines.join('<br>');
  document.getElementById('paperNote').style.display = 'block';
}

function hidePaperNote() {
  document.getElementById('paperNote').style.display = 'none';
}

function showManagerReaction(reaction) {
  if (bubbleTimer) clearTimeout(bubbleTimer);
  const msgs = MANAGER_REACTIONS[reaction];
  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  let expr;
  if (reaction === 'perfect')  expr = ASSETS.manager_blij;
  else if (reaction === 'goed') expr = ASSETS.manager_tevreden;
  else                          expr = ASSETS.manager_teleurgesteld;
  document.getElementById('bubbleManagerImg').src = expr;
  document.getElementById('bubbleText').textContent = msg;
  document.getElementById('managerBubble').style.display = 'flex';
  bubbleTimer = setTimeout(() => {
    document.getElementById('managerBubble').style.display = 'none';
  }, 4500);
}

function showFeedback(msg, color) {
  const el = document.getElementById('feedPop');
  el.style.color = color;
  el.className = 'feedback-pop';
  void el.offsetWidth;
  el.textContent = msg;
  el.className = 'feedback-pop show';
}
