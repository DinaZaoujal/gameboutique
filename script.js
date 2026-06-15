const ASSETS = {
  happy1:  'assets/happy1.png',
  normal1: 'assets/normal1.png',
  sad1:    'assets/sad1.png',
  happy2:  'assets/happy2.png',
  normal2: 'assets/normal2.png',
  sad2:    'assets/sad2.png',
  happy3:  'assets/happy3.png',
  normal3: 'assets/normal3.png',
  mad3:    'assets/mad3.png',
  top:     'assets/top.png',
  hels:    'assets/hels.png',
  shoes:   'assets/shoes.png',
  pants:   'assets/pants.png',
};

const ITEMS = [
  { id: 'top',   img: ASSETS.top,   name: 'Polo crop top',  cat: 'Top',      tags: ['casual', 'retro', 'chic'] },
  { id: 'hels',  img: ASSETS.hels,  name: 'Hoge laarzen',   cat: 'Schoenen', tags: ['glamour', 'avond', 'chic'] },
  { id: 'shoes', img: ASSETS.shoes, name: 'Adidas Gazelle',  cat: 'Schoenen', tags: ['casual', 'retro', 'street'] },
  { id: 'pants', img: ASSETS.pants, name: 'Y2K flare jeans', cat: 'Broek',    tags: ['retro', 'glamour', 'Y2K'] },
];

const CUSTOMERS = [
  {
    id: 'c1', name: 'Maya', color: '#ffd700',
    imgs: { normal: ASSETS.normal1, happy: ASSETS.happy1, sad: ASSETS.sad1 },
    wish_tags: ['casual', 'retro'],
    scenes: [
      {
        phase: 'binnenkomst', expr: 'normal', speaker: 'Maya',
        text: 'Hey! Ik zoek iets heel chill maar met die Y2K vibe, snap je? Gewoon iets voor de stad maar toch iconic.',
        actions: [{ lbl: 'Wat voor stijl precies?', next: 1 }, { lbl: 'Ik weet al iets voor jou!', next: 2 }]
      },
      {
        phase: 'info', expr: 'normal', speaker: 'Maya',
        text: 'Iets retro, misschien met een leuke broek? Ik draag altijd sneakers dus liefst iets dat daarmee kan. Maar geen avondoutfit!',
        actions: [{ lbl: 'Perfect, laten we iets kiezen!', next: 2 }]
      },
      {
        phase: 'styling', expr: 'normal', speaker: 'Boutique',
        text: 'Maya wil een casual retro look. Kies items die bij haar stijl passen!',
        actions: [], wardrobe: true
      },
    ]
  },
  {
    id: 'c2', name: 'Zara', color: '#ff79c6',
    imgs: { normal: ASSETS.normal2, happy: ASSETS.happy2, sad: ASSETS.sad2 },
    wish_tags: ['retro', 'glamour', 'Y2K'],
    scenes: [
      {
        phase: 'binnenkomst', expr: 'normal', speaker: 'Zara',
        text: 'Hiii! Ik ben dol op die early 2000s fashion — low rise, glitter, alles een beetje overdreven. Ik wil iets echt Y2K!',
        actions: [{ lbl: 'Vertel me meer!', next: 1 }, { lbl: 'Ik heb precies iets voor jou!', next: 2 }]
      },
      {
        phase: 'info', expr: 'normal', speaker: 'Zara',
        text: 'Ik wil iets met karakter! Die bedazzled jeans zijn zo mijn ding. En misschien iets glamoureus erbij? Ik ga naar een party.',
        actions: [{ lbl: 'Laten we die look maken!', next: 2 }]
      },
      {
        phase: 'styling', expr: 'normal', speaker: 'Boutique',
        text: 'Zara wil een echte Y2K glamour look. Zoek de perfecte items voor haar party outfit!',
        actions: [], wardrobe: true
      },
    ]
  },
  {
    id: 'c3', name: 'Hana', color: '#7ee8a2',
    imgs: { normal: ASSETS.normal3, happy: ASSETS.happy3, sad: ASSETS.mad3 },
    wish_tags: ['chic', 'avond', 'glamour'],
    scenes: [
      {
        phase: 'binnenkomst', expr: 'normal', speaker: 'Hana',
        text: 'Hm. Ik hoop dat jullie hier iets fatsoenlijks hebben. Ik zoek een chique look, niet te casual. Ik ga naar een event.',
        actions: [{ lbl: 'Natuurlijk! Wat voor event?', next: 1 }, { lbl: 'Ik vind iets chics voor je!', next: 2 }]
      },
      {
        phase: 'info', expr: 'normal', speaker: 'Hana',
        text: 'Een werk event. Het moet professioneel maar stijlvol zijn. Liefst met nette schoenen, geen sneakers. Ik ben kritisch dus het moet echt goed zijn.',
        actions: [{ lbl: 'Ik stel je niet teleur!', next: 2 }]
      },
      {
        phase: 'styling', expr: 'normal', speaker: 'Boutique',
        text: 'Hana wil een chique look voor haar werk event. Let op — ze is kritisch!',
        actions: [], wardrobe: true
      },
    ]
  },
];

let G = { coins: 0, day: 1, cOrder: [], cIdx: 0, outfit: {}, typeTimer: null };

// ── AUDIO ──
const SFX = (() => {
  const bgMusic = new Audio('music/boutique.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.5;

  const clickSound = new Audio('music/click.mp3');
  clickSound.volume = 0.6;

  let muted = false;

  function click() {
    if (muted) return;
    const s = clickSound.cloneNode();
    s.volume = 0.6;
    s.play().catch(() => {});
  }

  function drop() {
    if (muted) return;
    const s = clickSound.cloneNode();
    s.volume = 0.4;
    s.playbackRate = 1.4;
    s.play().catch(() => {});
  }

  function startBoutique() {
    bgMusic.play().catch(() => {});
  }

  function toggle() {
    muted = !muted;
    bgMusic.muted = muted;
    document.getElementById('soundBtn').textContent = muted ? '🔇' : '🔊';
  }

  return { click, drop, startBoutique, toggle };
})();

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

function addTouchDrag(card, item) {
  let ghost = null;

  card.addEventListener('touchstart', e => {
    e.preventDefault();
    const t = e.touches[0];
    card.classList.add('dragging');
    ghost = document.createElement('img');
    ghost.src = item.img;
    ghost.style.cssText = `position:fixed;width:90px;height:90px;object-fit:contain;pointer-events:none;z-index:9999;opacity:0.85;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.25));left:${t.clientX - 45}px;top:${t.clientY - 45}px`;
    document.body.appendChild(ghost);
  }, { passive: false });

  card.addEventListener('touchmove', e => {
    e.preventDefault();
    const t = e.touches[0];
    if (ghost) {
      ghost.style.left = (t.clientX - 45) + 'px';
      ghost.style.top  = (t.clientY - 45) + 'px';
    }
    const zone = document.getElementById('bagDropZone');
    const r = zone.getBoundingClientRect();
    const over = t.clientX >= r.left && t.clientX <= r.right && t.clientY >= r.top && t.clientY <= r.bottom;
    zone.classList.toggle('drag-over', over);
  }, { passive: false });

  card.addEventListener('touchend', e => {
    e.preventDefault();
    card.classList.remove('dragging');
    const zone = document.getElementById('bagDropZone');
    zone.classList.remove('drag-over');
    if (ghost) {
      const t = e.changedTouches[0];
      const r = zone.getBoundingClientRect();
      if (t.clientX >= r.left && t.clientX <= r.right && t.clientY >= r.top && t.clientY <= r.bottom) {
        SFX.drop();
        G.outfit[item.cat] = item;
        renderWardrobe();
      }
      document.body.removeChild(ghost);
      ghost = null;
    }
  }, { passive: false });
}

function renderWardrobe() {
  const grid = document.getElementById('itemsGrid');
  grid.innerHTML = '';

  ITEMS.forEach(item => {
    const sel = G.outfit[item.cat] && G.outfit[item.cat].id === item.id;
    const card = document.createElement('div');
    card.className = 'item-card' + (sel ? ' sel' : '');
    card.draggable = true;

    const img = document.createElement('img');
    img.className = 'item-img';
    img.src = item.img;
    const nm = document.createElement('div');
    nm.className = 'item-name';
    nm.textContent = item.name;
    const ct = document.createElement('div');
    ct.className = 'item-cat';
    ct.textContent = item.cat;
    card.appendChild(img);
    card.appendChild(nm);
    card.appendChild(ct);

    card.addEventListener('dragstart', e => {
      e.dataTransfer.setData('itemId', item.id);
      card.classList.add('dragging');
      const ghost = new Image();
      ghost.src = item.img;
      ghost.style.cssText = 'width:80px;height:80px;object-fit:contain;position:fixed;top:-200px';
      document.body.appendChild(ghost);
      e.dataTransfer.setDragImage(ghost, 40, 40);
      setTimeout(() => document.body.removeChild(ghost), 0);
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));

    addTouchDrag(card, item);
    grid.appendChild(card);
  });

  renderBagItems();
  setupBagDrop();
}

function renderBagItems() {
  const bagItems = document.getElementById('bagItems');
  bagItems.innerHTML = '';
  const positions = [
    { top: '5%',  left: '5%'  },
    { top: '10%', left: '45%' },
    { top: '45%', left: '20%' },
  ];
  Object.values(G.outfit).forEach((item, i) => {
    const thumb = document.createElement('img');
    thumb.className = 'bag-item-thumb';
    thumb.src = item.img;
    thumb.title = item.name + ' — klik om te verwijderen';
    const rot = (Math.random() * 30 - 15).toFixed(1);
    const pos = positions[i % positions.length];
    thumb.style.cssText = `top:${pos.top};left:${pos.left};transform:rotate(${rot}deg)`;
    thumb.onclick = () => { delete G.outfit[item.cat]; renderWardrobe(); };
    bagItems.appendChild(thumb);
  });
}

function setupBagDrop() {
  const zone = document.getElementById('bagDropZone');
  zone.ondragover = e => {
    e.preventDefault();
    zone.classList.add('drag-over');
  };
  zone.ondragleave = () => zone.classList.remove('drag-over');
  zone.ondrop = e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const itemId = e.dataTransfer.getData('itemId');
    const item = ITEMS.find(i => i.id === itemId);
    if (item) {
      SFX.drop();
      G.outfit[item.cat] = item;
      renderWardrobe();
    }
  };
}

function clearOutfit() {
  G.outfit = {};
  renderWardrobe();
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
    G.day++;
    G.cOrder = shuffle([0, 1, 2]);
    G.cIdx = 0;
    document.getElementById('dayNum').textContent = G.day;
  }
  loadCustomer();
}

function showFeedback(msg, color) {
  const el = document.getElementById('feedPop');
  el.style.color = color;
  el.className = 'feedback-pop';
  void el.offsetWidth;
  el.textContent = msg;
  el.className = 'feedback-pop show';
}
