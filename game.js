let G = { coins: 0, day: 1, cOrder: [], cIdx: 0, outfit: {}, typeTimer: null, dayCoins: 0, dayScore: 0, totalScore: 0, cindyEncounter: null, cindyAsCustomer: false, dayMaxScore: 6 };
const TOTAL_DAYS = 5;

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
  cindy_perfect: [
    'OH WOW! Zelfs Cindy kan onze stijl niet weerstaan! Bonuspunten!! Jij bent een STER!',
    'Zie je! Zelfs onze concurrent koopt bij ons! Cindy is stikjaloers en dat is verdiend! GEWELDIG!',
  ],
  cindy_slecht: [
    'Jammer dat Cindy niet tevreden was... maar eerlijk gezegd IS Cindy nooit tevreden! Ga gewoon door!',
    'Cindy is sowieso onmogelijk te pleasen. Geef niet op -- volgende klant gaat beter!',
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
  // Day 1: Cindy always comes as enemy visitor, not as customer
  G.cindyAsCustomer = false;
  G.dayMaxScore = 6;
  G.cOrder = shuffle([0, 1, 2]).slice(0, 2);
  G.cIdx = 0;
  setupPaperDrag();
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

function getCindyEncounter() {
  const day = G.day;
  const maxSoFar = (day - 1) * 9;
  const ratio = maxSoFar > 0 ? G.totalScore / maxSoFar : 0;

  if (day === 1) return CINDY_ENCOUNTERS[1];
  // Day 4 & 5: altijd vaste encounter
  if (day === 4) return CINDY_ENCOUNTERS[4];
  if (day === 5) return CINDY_ENCOUNTERS[7];
  // Random drop-in dagen: base 75% + scorebonus tot 95%
  if (Math.random() < 0.75 + ratio * 0.2) {
    return CINDY_DROP_INS[Math.floor(Math.random() * CINDY_DROP_INS.length)];
  }
  return null;
}

function shouldCindyBeCustomer() {
  const day = G.day;
  if (day === 1) return false;
  if (day === 3 || day === 5) return true; // altijd klant op dag 3 en 5
  const maxSoFar = (day - 1) * 9;
  const ratio = maxSoFar > 0 ? G.totalScore / maxSoFar : 0;
  return Math.random() < 0.55 + ratio * 0.35;
}

function dismissCall() {
  SFX.click();
  SFX.stopRing();
  document.getElementById('phoneCall').style.display = 'none';
  G.cindyEncounter = getCindyEncounter();
  if (G.day === 3) {
    // Dag 3: Cindy altijd als klant, geen enemy drop-in
    G.cindyEncounter = null;
  } else if (G.day === 5) {
    // Dag 5: vaste enemy encounter + Cindy ook als klant (beide)
  } else if (G.cindyEncounter && G.cindyAsCustomer) {
    // Andere dagen: enemy heeft prioriteit, klantbezoek vervalt
    G.cindyAsCustomer = false;
    G.cOrder = shuffle([0, 1, 2]).slice(0, 2);
    G.dayMaxScore = 6;
  }
  if (G.cindyEncounter) {
    showEnemyScene(0);
  } else {
    loadCustomer();
  }
}

function showEnemyScene(idx) {
  const sc = G.cindyEncounter[idx];
  if (idx === 0) SFX.startEvil();

  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('managerBubble').style.display = 'none';
  document.getElementById('dActions').innerHTML = '';
  document.getElementById('phaseTag').textContent = sc.phase;
  document.getElementById('speakerName').textContent = sc.speaker;
  document.getElementById('speakerName').style.color = sc.speaker === 'Cindy' ? '#7b0e8e' : '#da77f2';

  const img = document.getElementById('charImg');
  if (sc.expr) {
    img.src = ASSETS[sc.expr];
    img.style.display = 'block';
    img.className = 'char-img enter';
    setTimeout(() => img.classList.remove('enter'), 400);
  } else {
    img.style.display = 'none';
  }

  typeText(sc.text, () => {
    if (sc.done) {
      setTimeout(() => endEnemyScene(), 3000);
      return;
    }
    sc.actions.forEach(a => {
      const btn = document.createElement('button');
      btn.className = 'd-btn';
      btn.textContent = a.lbl;
      btn.onclick = () => { SFX.click(); showEnemyScene(a.next); };
      document.getElementById('dActions').appendChild(btn);
    });
  });
}

function endEnemyScene() {
  SFX.stopEvil();
  document.getElementById('dActions').innerHTML = '';
  document.getElementById('charImg').style.display = 'none';
  document.getElementById('speakerName').textContent = 'Boutique';
  document.getElementById('speakerName').style.color = '#da77f2';
  document.getElementById('phaseTag').textContent = 'jij';

  const mcLine = G.day === 1
    ? '*Cindy is weg...* Dat was Cindy. Ze kennen elkaar duidelijk van vroeger. Maar genoeg afleiding — de klanten wachten!'
    : G.day === 5
    ? '*Cindy loopt weg...* Dat was... anders dan normaal. Zou ze echt spijt hebben? Hoe dan ook, de winkel wacht!'
    : '*Cindy is verdwenen...* Laat haar maar. Ze is gewoon jaloers. Terug naar de klanten!';

  typeText(mcLine, () => {
    const btn = document.createElement('button');
    btn.className = 'd-btn';
    btn.textContent = 'Verder >';
    btn.onclick = () => { SFX.click(); showPostCindyCall(); };
    document.getElementById('dActions').appendChild(btn);
  });
}

const POST_CINDY_MSGS = {
  1: 'Dat was Cindy... mijn vroegere beste vriendin. We hadden samen een winkel totdat ze ons bedroeg. Maar laat je er niet door afleiden — concentreer je op de klanten!',
  5: 'Wow, Cindy leek bijna spijt te hebben! Misschien groeit ze toch nog. Maar focus nu — het is de allerlaatste dag. Geef alles wat je hebt!',
};
const POST_CINDY_MSG_DEFAULT = 'Laat Cindy maar, ze is gewoon jaloers op wat we hier opbouwen! Concentreer je op de volgende klant!';

function showPostCindyCall() {
  const msg = POST_CINDY_MSGS[G.day] || POST_CINDY_MSG_DEFAULT;
  document.getElementById('phoneMsg').textContent = 'Binnenkomend gesprek...';
  document.getElementById('managerCallImg').src = G.day === 5 ? ASSETS.manager_tevreden : ASSETS.manager_blij;
  document.getElementById('phoneActions').innerHTML =
    '<button class="phone-btn answer" onclick="answerPostCindyCall()">Opnemen</button>' +
    '<button class="phone-btn decline" onclick="dismissPostCindyCall()">Negeren</button>';
  const popup = document.getElementById('phoneCall');
  popup.style.display = 'flex';
  popup.classList.remove('answered');
  popup.dataset.msg = msg;
  SFX.ring();
}

function answerPostCindyCall() {
  SFX.click();
  SFX.stopRing();
  const popup = document.getElementById('phoneCall');
  popup.classList.add('answered');
  document.getElementById('managerCallImg').src = G.day === 5 ? ASSETS.manager_tevreden : ASSETS.manager_blij;
  document.getElementById('phoneMsg').textContent = popup.dataset.msg;
  document.getElementById('phoneActions').innerHTML =
    '<button class="phone-btn answer" onclick="dismissPostCindyCall()">Ophangen</button>';
}

function dismissPostCindyCall() {
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

function playResultAnim(reaction) {
  const payEl   = document.getElementById('payAnim');
  const bagEl   = document.getElementById('bagFly');
  const trashEl = document.getElementById('trashcanEl');
  payEl.classList.remove('active');
  bagEl.className = 'bag-fly';
  bagEl.style.cssText = '';
  trashEl.classList.remove('active');
  trashEl.style.display = 'none';

  if (reaction !== 'slecht') {
    payEl.classList.add('active');
    setTimeout(() => {
      bagEl.style.bottom = '75px';
      bagEl.style.left = '32%';
      bagEl.classList.add('fly-good');
      setTimeout(() => {
        bagEl.className = 'bag-fly';
        bagEl.style.cssText = '';
      }, 1200);
    }, 650);
    setTimeout(() => payEl.classList.remove('active'), 2500);
  } else {
    trashEl.style.display = '';
    trashEl.classList.add('active');
    setTimeout(() => {
      bagEl.style.bottom = '85px';
      bagEl.style.left = '28%';
      bagEl.classList.add('fly-bad');
      setTimeout(() => {
        bagEl.className = 'bag-fly';
        bagEl.style.cssText = '';
        trashEl.classList.remove('active');
        trashEl.style.display = 'none';
      }, 1200);
    }, 250);
  }
}

function submitOutfit() {
  const c = CUSTOMERS[G.cOrder[G.cIdx]];
  const isCindyCustomer = !!c.isCindy;
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
  let pts = reaction === 'perfect' ? 3 : reaction === 'goed' ? 1 : 0;
  // Cindy customer bonus: perfect = +2 extra pts (5 total) + bonus coins
  if (isCindyCustomer && reaction === 'perfect') {
    pts += 2;
    earned += 30;
  }
  G.coins += earned;
  G.dayCoins += earned;
  G.dayScore += pts;
  G.totalScore += pts;
  document.getElementById('coinNum').textContent = G.coins;
  setChar(expr);
  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('dActions').innerHTML = '';
  let phaseLabel;
  if (isCindyCustomer && reaction === 'perfect') phaseLabel = 'Cindy is JALOERS! ★';
  else if (reaction === 'perfect') phaseLabel = 'Perfect!';
  else if (reaction === 'goed') phaseLabel = 'Goed!';
  else phaseLabel = 'Helaas...';
  document.getElementById('phaseTag').textContent = phaseLabel;
  document.getElementById('speakerName').textContent = c.name;
  document.getElementById('speakerName').style.color = c.color;
  const lines = isCindyCustomer ? {
    perfect: [
      'UGH! Dit is... eigenlijk best goed. Maar ik geef het NOOIT toe! *pakt outfit knarsetandend en betaalt*',
      'Hmm... dit is exact mijn stijl. Maar dat zeg ik niet hardop! *betaalt geïrriteerd en stormt weg*'
    ],
    goed: [
      'Het is... oké. Niet slecht maar ook niet perfect. Ik had beter verwacht. *rolt met ogen maar pakt outfit*',
      'Hmm... niet helemaal mijn stijl maar ik neem het mee. Volgende keer beter hè. *zucht diep*'
    ],
    slecht: [
      'ZIE JE! Jullie hebben helemaal geen stijl! Dit is verschrikkelijk! *loopt minachtend weg*',
      'Precies wat ik dacht. Totaal geen gevoel voor mode. Mijn winkel is honderd keer beter!'
    ]
  } : {
    perfect: [
      'Dankjewel!! OH WOW! Dit is exact wat ik zocht! Jij bent echt geweldig!',
      'Dankjewel!! YES! Perfecte match! Jij snapt mijn stijl compleet. Ik kom terug!'
    ],
    goed: [
      'Dankje! Oh nice, dit is wel leuk! Niet precies wat ik had gedacht maar ik neem het mee.',
      'Dankje! Hmm okie, het is best cute. Ik neem het! Volgende keer iets meer pit graag.'
    ],
    slecht: [
      'Ehm... dit is echt niet mijn stijl. Ik denk dat ik ergens anders ga kijken. Sorry.',
      'Nee, dit past echt niet bij wat ik zoek. Ik verwachtte meer van jullie boutique...'
    ]
  };
  const txt = lines[reaction][Math.floor(Math.random() * 2)];
  hidePaperNote();
  if (isCindyCustomer && reaction === 'perfect') {
    showFeedback('+' + earned + ' coins! +5 punten!', '#7b0e8e');
  } else if (earned > 0) {
    showFeedback('+' + earned + ' coins!', '#ffd700');
  }
  playResultAnim(reaction);
  const managerKey = isCindyCustomer
    ? (reaction === 'perfect' ? 'cindy_perfect' : reaction === 'goed' ? 'goed' : 'cindy_slecht')
    : reaction;
  typeText(txt, () => {
    const verder = document.createElement('button');
    verder.className = 'd-btn';
    verder.textContent = 'Verder >';
    verder.onclick = () => {
      SFX.click();
      document.getElementById('dActions').innerHTML = '';
      if (reaction === 'slecht') showSpeakerWarning();
      showManagerReaction(managerKey);
      setTimeout(() => {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'd-btn pri next-customer-btn';
        nextBtn.textContent = 'Volgende klant >';
        nextBtn.onclick = () => { SFX.click(); nextCustomer(); };
        document.getElementById('dActions').appendChild(nextBtn);
      }, 1800);
    };
    document.getElementById('dActions').appendChild(verder);
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
  document.getElementById('ovScore').textContent = G.dayScore + ' / ' + G.dayMaxScore;
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
  const maxScore = TOTAL_DAYS * 6;
  const promoted = G.coins >= 500;
  document.getElementById('endingManagerImg').src = promoted ? ASSETS.manager_blij : ASSETS.manager_boos;
  document.getElementById('endingTitle').textContent = promoted ? 'Gefeliciteerd! Je bent gepromoveerd!' : 'Helaas... Je bent ontslagen.';
  document.getElementById('endingTitle').style.color = promoted ? '#c2185b' : '#8b0000';
  document.getElementById('endingMsg').textContent = promoted
    ? 'Belle is super trots op jou! Met ' + G.coins + ' coins verdiend en ' + G.totalScore + ' / ' + maxScore + ' punten heb je bewezen dat jij de beste stylist bent. Welkom als hoofdstylist!'
    : 'Met slechts ' + G.coins + ' coins verdiend was het helaas niet genoeg. Je hebt minimaal 500 coins nodig. Belle moest een moeilijke beslissing nemen. Probeer het opnieuw!';
  document.getElementById('endingScore').textContent = G.totalScore + ' / ' + maxScore + ' punten';
  document.getElementById('endingCoins').textContent = G.coins + ' coins verdiend';
  document.getElementById('endingScreen').style.display = 'flex';
  document.getElementById('wardrobePanel').style.display = 'none';
  document.getElementById('sceneBg').className = 'scene-bg';
}

function restartGame() {
  SFX.click();
  G = { coins: 0, day: 1, cOrder: [], cIdx: 0, outfit: {}, typeTimer: null, dayCoins: 0, dayScore: 0, totalScore: 0, cindyEncounter: null, cindyAsCustomer: false, dayMaxScore: 6 };
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
  G.cindyAsCustomer = shouldCindyBeCustomer();
  G.dayMaxScore = G.cindyAsCustomer ? 11 : 6;
  // 2 reguliere klanten + Cindy als bonus als ze als klant komt
  G.cOrder = G.cindyAsCustomer ? [...shuffle([0, 1, 2]).slice(0, 2), 3] : shuffle([0, 1, 2]).slice(0, 2);
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

const TAG_LABELS = {
  casual: 'Casual & comfy', retro: 'Retro vibes', Y2K: 'Y2K stijl',
  glamour: 'Glamour & glitter', kawaii: 'Kawaii & schattig', chic: 'Chic & elegant',
  avond: 'Avond & formeel', street: 'Street style', minimaal: 'Minimalistisch',
};

let paperClipped = true;

function showPaperNote(customer) {
  const tags = customer.wish_tags;
  const lines = [
    `Klant: ${customer.name}`,
    `Zoekt:`,
    ...tags.map(t => `- ${TAG_LABELS[t] || t}`),
    `&nbsp;`,
    `Tip: Match alle stijlen`,
    `voor de perfecte score!`,
  ];
  document.getElementById('paperBody').innerHTML = lines.join('<br>');

  const clip  = document.getElementById('clipAnchor');
  const paper = document.getElementById('paperNote');
  clip.style.display = 'block';
  clip.classList.remove('clipped');

  paper.style.cssText = 'display:block;left:6px;top:48px;transform:rotate(-4deg) scale(0.55);transform-origin:top left;z-index:16;transition:none;opacity:1;';
  paperClipped = true;
}

function hidePaperNote() {
  document.getElementById('paperNote').style.display = 'none';
  document.getElementById('clipAnchor').style.display = 'none';
  paperClipped = true;
}

function setupPaperDrag() {
  const paper = document.getElementById('paperNote');
  const clip  = document.getElementById('clipAnchor');

  function snapToClip() {
    paper.style.transition = 'all 0.35s ease';
    paper.style.left = '6px';
    paper.style.top  = '48px';
    paper.style.transform = 'rotate(-4deg) scale(0.55)';
    paper.style.transformOrigin = 'top left';
    paper.style.zIndex = '16';
    paper.style.cursor = 'pointer';
    clip.classList.add('clipped');
    paperClipped = true;
  }

  function snapToCenter() {
    const scene = paper.offsetParent;
    const sw = scene.offsetWidth, sh = scene.offsetHeight;
    paper.style.transition = 'all 0.35s ease';
    paper.style.left = Math.round((sw - 210) / 2) + 'px';
    paper.style.top  = Math.round((sh - 160) / 2 - 10) + 'px';
    paper.style.transform = 'rotate(1deg) scale(1)';
    paper.style.transformOrigin = 'center center';
    paper.style.zIndex = '22';
    paper.style.cursor = 'pointer';
    clip.classList.remove('clipped');
    paperClipped = false;
  }

  function onClick(e) {
    if (paper.style.display === 'none') return;
    if (paperClipped) { snapToCenter(); } else { snapToClip(); }
  }

  paper.addEventListener('click', onClick);
  paper.addEventListener('touchend', function(e) { e.preventDefault(); onClick(e); });
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

function scaleGame() {
  const game = document.getElementById('game');
  const scale = Math.min(1, window.innerWidth / 704);
  if (scale < 1) {
    game.style.transform = `scale(${scale})`;
    game.style.transformOrigin = 'top center';
    game.style.marginBottom = `${Math.round((scale - 1) * game.offsetHeight)}px`;
    game.style.marginTop = '0';
  } else {
    game.style.transform = '';
    game.style.marginBottom = '';
    game.style.marginTop = '';
  }
}
scaleGame();
window.addEventListener('resize', scaleGame);
