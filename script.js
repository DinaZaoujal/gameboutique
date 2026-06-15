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
  // Tops
  top:                  'assets/top.png',
  whitetop:             'assets/whitetop.png',
  whitebluetop:         'assets/whitebluetop.png',
  bluecutetop:          'assets/bluecutetop.png',
  yellowtop:            'assets/yellowtop.png',
  pinktop:              'assets/pinktop.png',
  pinkjapanesestyletop: 'assets/pinkjapanesestyletop.png',
  coceqettetop:         'assets/coceqettetop.png',
  // Broeken & rokken
  pants:                'assets/pants.png',
  lightblueflaredjeans: 'assets/lightblueflaredjeans.png',
  blueskirt:            'assets/blueskirt.png',
  // Schoenen
  hels:                 'assets/hels.png',
  shoes:                'assets/shoes.png',
  blackcuteshoes:       'assets/blackcuteshoes.png',
  pinkheelsy2k:         'assets/pinkheelsy2k.png',
  hellokitysneakers:    'assets/hellokitysneakers.png',
  // Tassen
  jeansbag:             'assets/jeansbag.png',
  blackcrossbodybag:    'assets/blackcrossbodybag.png',
  // Accessoires
  pandoracute:          'assets/pandoracute.png',
  pandoraarmband:       'assets/pandoraarmband.png',
  sunglasses:           'assets/sunglasses.png',
  flower:               'assets/flower.png',
  glasses:              'assets/glasses.png',
  // Haar
  cutehairstylelong:    'assets/cutehairstylelong.png',
  blacklonghair:        'assets/blacklonghair.png',
  brownlongwavyhair:    'assets/brownlongwavyhair.png',
  // Nieuwe tops
  edgycutetop:          'assets/edgycutetop.png',
  redtop:               'assets/redtop.png',
  whiteclassictop:      'assets/whiteclassictop.png',
  blueduotop:           'assets/blueduotop.png',
  // Blazers
  blackblazer:          'assets/blackblazer.png',
  blueblazer:           'assets/blueblazer.png',
  blueduoblazer:        'assets/blueduoblazer.png',
  // Nieuwe broeken & rokken
  bluebasicpants:       'assets/bluebasicpants.png',
  blackclassicpants:    'assets/blackclassicpants.png',
  blackskirt:           'assets/blackskirt.png',
  longdenimskirt:       'assets/longdenimskirt.png',
  // Nieuwe schoenen
  redcuteheals:         'assets/redcuteheals.png',
  redblackclassicheals: 'assets/redblackclassicheals.png',
  whiteclassicheals:    'assets/whiteclassicheals.png',
  // Nieuwe tassen
  pinkschoulderbag:     'assets/pinkschoulderbag.png',
  redshoulderbag:       'assets/redshoulderbag.png',
  blueclassicbag:       'assets/blueclassicbag.png',
};

const ITEMS = [
  // ── Tops ──
  { id: 'top',                  img: ASSETS.top,                  name: 'Polo crop top',        cat: 'Top',        tags: ['casual', 'retro', 'chic'] },
  { id: 'whitetop',             img: ASSETS.whitetop,             name: 'Wit basic top',        cat: 'Top',        tags: ['casual', 'chic', 'minimaal'] },
  { id: 'whitebluetop',         img: ASSETS.whitebluetop,         name: 'White blue top',       cat: 'Top',        tags: ['casual', 'retro', 'street'] },
  { id: 'bluecutetop',          img: ASSETS.bluecutetop,          name: 'Blauwe cute top',      cat: 'Top',        tags: ['kawaii', 'Y2K', 'casual'] },
  { id: 'yellowtop',            img: ASSETS.yellowtop,            name: 'Gele top',             cat: 'Top',        tags: ['retro', 'Y2K', 'casual'] },
  { id: 'pinktop',              img: ASSETS.pinktop,              name: 'Roze top',             cat: 'Top',        tags: ['glamour', 'Y2K', 'kawaii'] },
  { id: 'pinkjapanesestyletop', img: ASSETS.pinkjapanesestyletop, name: 'Japanese style top',   cat: 'Top',        tags: ['kawaii', 'Y2K', 'chic'] },
  { id: 'coceqettetop',         img: ASSETS.coceqettetop,         name: 'Coquette top',         cat: 'Top',        tags: ['glamour', 'chic', 'avond'] },
  // ── Broeken & Rokken ──
  { id: 'pants',                img: ASSETS.pants,                name: 'Y2K flare jeans',      cat: 'Broek',      tags: ['retro', 'glamour', 'Y2K'] },
  { id: 'lightblueflaredjeans', img: ASSETS.lightblueflaredjeans, name: 'Light blue flared',    cat: 'Broek',      tags: ['retro', 'casual', 'Y2K'] },
  { id: 'blueskirt',            img: ASSETS.blueskirt,            name: 'Blauwe rok',           cat: 'Rok',        tags: ['chic', 'casual', 'kawaii'] },
  // ── Schoenen ──
  { id: 'hels',                 img: ASSETS.hels,                 name: 'Hoge laarzen',         cat: 'Schoenen',   tags: ['glamour', 'avond', 'chic'] },
  { id: 'shoes',                img: ASSETS.shoes,                name: 'Adidas Gazelle',        cat: 'Schoenen',   tags: ['casual', 'retro', 'street'] },
  { id: 'blackcuteshoes',       img: ASSETS.blackcuteshoes,       name: 'Black cute shoes',     cat: 'Schoenen',   tags: ['chic', 'kawaii', 'casual'] },
  { id: 'pinkheelsy2k',         img: ASSETS.pinkheelsy2k,         name: 'Pink Y2K heels',       cat: 'Schoenen',   tags: ['glamour', 'Y2K', 'avond'] },
  { id: 'hellokitysneakers',    img: ASSETS.hellokitysneakers,    name: 'Hello Kitty sneakers', cat: 'Schoenen',   tags: ['kawaii', 'casual', 'Y2K'] },
  // ── Tassen ──
  { id: 'jeansbag',             img: ASSETS.jeansbag,             name: 'Jeans bag',            cat: 'Tas',        tags: ['casual', 'retro', 'street'] },
  { id: 'blackcrossbodybag',    img: ASSETS.blackcrossbodybag,    name: 'Black crossbody bag',  cat: 'Tas',        tags: ['chic', 'avond', 'glamour'] },
  // ── Accessoires ──
  { id: 'pandoracute',          img: ASSETS.pandoracute,          name: 'Pandora ketting',       cat: 'Accessoire', tags: ['chic', 'glamour', 'kawaii'] },
  { id: 'pandoraarmband',       img: ASSETS.pandoraarmband,       name: 'Pandora armband',       cat: 'Accessoire', tags: ['chic', 'glamour', 'Y2K'] },
  { id: 'sunglasses',           img: ASSETS.sunglasses,           name: 'Zonnebril',             cat: 'Accessoire', tags: ['retro', 'Y2K', 'casual'] },
  { id: 'flower',               img: ASSETS.flower,               name: 'Haar bloem',            cat: 'Accessoire', tags: ['kawaii', 'Y2K', 'casual'] },
  { id: 'glasses',              img: ASSETS.glasses,              name: 'Bril',                  cat: 'Accessoire', tags: ['retro', 'chic', 'casual'] },
  // ── Haar ──
  { id: 'cutehairstylelong',    img: ASSETS.cutehairstylelong,    name: 'Cute lang haar',        cat: 'Haar',       tags: ['kawaii', 'Y2K', 'casual'] },
  { id: 'blacklonghair',        img: ASSETS.blacklonghair,        name: 'Zwart lang haar',       cat: 'Haar',       tags: ['chic', 'glamour', 'avond'] },
  { id: 'brownlongwavyhair',    img: ASSETS.brownlongwavyhair,    name: 'Bruin wavy haar',       cat: 'Haar',       tags: ['casual', 'retro', 'kawaii'] },
  // ── Nieuwe Tops ──
  { id: 'edgycutetop',          img: ASSETS.edgycutetop,          name: 'Edgy cute top',         cat: 'Top',        tags: ['street', 'Y2K', 'retro'] },
  { id: 'redtop',               img: ASSETS.redtop,               name: 'Rode top',              cat: 'Top',        tags: ['glamour', 'Y2K', 'avond'] },
  { id: 'whiteclassictop',      img: ASSETS.whiteclassictop,      name: 'Wit classic top',       cat: 'Top',        tags: ['chic', 'casual', 'minimaal'] },
  { id: 'blueduotop',           img: ASSETS.blueduotop,           name: 'Blue duo top',          cat: 'Top',        tags: ['casual', 'retro', 'chic'] },
  // ── Blazers ──
  { id: 'blackblazer',          img: ASSETS.blackblazer,          name: 'Zwarte blazer',         cat: 'Blazer',     tags: ['chic', 'avond', 'glamour'] },
  { id: 'blueblazer',           img: ASSETS.blueblazer,           name: 'Blauwe blazer',         cat: 'Blazer',     tags: ['chic', 'casual', 'retro'] },
  { id: 'blueduoblazer',        img: ASSETS.blueduoblazer,        name: 'Blue duo blazer',       cat: 'Blazer',     tags: ['chic', 'retro', 'casual'] },
  // ── Nieuwe Broeken & Rokken ──
  { id: 'bluebasicpants',       img: ASSETS.bluebasicpants,       name: 'Blue basic broek',      cat: 'Broek',      tags: ['casual', 'retro', 'chic'] },
  { id: 'blackclassicpants',    img: ASSETS.blackclassicpants,    name: 'Zwarte classic broek',  cat: 'Broek',      tags: ['chic', 'avond', 'glamour'] },
  { id: 'blackskirt',           img: ASSETS.blackskirt,           name: 'Zwarte rok',            cat: 'Rok',        tags: ['chic', 'glamour', 'avond'] },
  { id: 'longdenimskirt',       img: ASSETS.longdenimskirt,       name: 'Long denim skirt',      cat: 'Rok',        tags: ['casual', 'retro', 'street'] },
  // ── Nieuwe Schoenen ──
  { id: 'redcuteheals',         img: ASSETS.redcuteheals,         name: 'Rode cute heels',       cat: 'Schoenen',   tags: ['glamour', 'Y2K', 'avond'] },
  { id: 'redblackclassicheals', img: ASSETS.redblackclassicheals, name: 'Red black classic heels', cat: 'Schoenen', tags: ['chic', 'glamour', 'avond'] },
  { id: 'whiteclassicheals',    img: ASSETS.whiteclassicheals,    name: 'Witte classic heels',   cat: 'Schoenen',   tags: ['chic', 'avond', 'casual'] },
  // ── Nieuwe Tassen ──
  { id: 'pinkschoulderbag',     img: ASSETS.pinkschoulderbag,     name: 'Roze shoulder bag',     cat: 'Tas',        tags: ['glamour', 'Y2K', 'kawaii'] },
  { id: 'redshoulderbag',       img: ASSETS.redshoulderbag,       name: 'Rode shoulder bag',     cat: 'Tas',        tags: ['glamour', 'avond', 'chic'] },
  { id: 'blueclassicbag',       img: ASSETS.blueclassicbag,       name: 'Blauwe classic bag',    cat: 'Tas',        tags: ['chic', 'casual', 'retro'] },
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
    { top: '2%',  left: '2%'  },
    { top: '5%',  left: '45%' },
    { top: '30%', left: '2%'  },
    { top: '32%', left: '45%' },
    { top: '58%', left: '2%'  },
    { top: '58%', left: '45%' },
    { top: '2%',  left: '22%' },
    { top: '30%', left: '22%' },
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
