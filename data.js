const ASSETS = {
  // Manager
  manager_neutral:      'assets/characters/manager-neutral.png',
  manager_blij:         'assets/characters/manager-blij.png',
  manager_tevreden:     'assets/characters/manager-tevreden.png',
  manager_boos:         'assets/characters/manager-boos.png',
  manager_teleurgesteld:'assets/characters/manager-teleurgesteld.png',
  // Klanten
  happy1:  'assets/characters/happy1.png',
  normal1: 'assets/characters/normal1.png',
  sad1:    'assets/characters/sad1.png',
  happy2:  'assets/characters/happy2.png',
  normal2: 'assets/characters/normal2.png',
  sad2:    'assets/characters/sad2.png',
  happy3:  'assets/characters/happy3.png',
  normal3: 'assets/characters/normal3.png',
  mad3:    'assets/characters/mad3.png',
  // Tops
  top:                  'assets/clothing/top.png',
  whitetop:             'assets/clothing/whitetop.png',
  whitebluetop:         'assets/clothing/whitebluetop.png',
  bluecutetop:          'assets/clothing/bluecutetop.png',
  yellowtop:            'assets/clothing/yellowtop.png',
  pinktop:              'assets/clothing/pinktop.png',
  pinkjapanesestyletop: 'assets/clothing/pinkjapanesestyletop.png',
  coceqettetop:         'assets/clothing/coceqettetop.png',
  // Broeken & rokken
  pants:                'assets/clothing/pants.png',
  lightblueflaredjeans: 'assets/clothing/lightblueflaredjeans.png',
  blueskirt:            'assets/clothing/blueskirt.png',
  // Schoenen
  hels:                 'assets/clothing/hels.png',
  shoes:                'assets/clothing/shoes.png',
  blackcuteshoes:       'assets/clothing/blackcuteshoes.png',
  pinkheelsy2k:         'assets/clothing/pinkheelsy2k.png',
  hellokitysneakers:    'assets/clothing/hellokitysneakers.png',
  // Tassen
  jeansbag:             'assets/clothing/jeansbag.png',
  blackcrossbodybag:    'assets/clothing/blackcrossbodybag.png',
  // Accessoires
  pandoracute:          'assets/clothing/pandoracute.png',
  pandoraarmband:       'assets/clothing/pandoraarmband.png',
  sunglasses:           'assets/clothing/sunglasses.png',
  flower:               'assets/clothing/flower.png',
  glasses:              'assets/clothing/glasses.png',
  // Haar
  cutehairstylelong:    'assets/clothing/cutehairstylelong.png',
  blacklonghair:        'assets/clothing/blacklonghair.png',
  brownlongwavyhair:    'assets/clothing/brownlongwavyhair.png',
  // Nieuwe tops
  edgycutetop:          'assets/clothing/edgycutetop.png',
  redtop:               'assets/clothing/redtop.png',
  whiteclassictop:      'assets/clothing/whiteclassictop.png',
  blueduotop:           'assets/clothing/blueduotop.png',
  // Blazers
  blackblazer:          'assets/clothing/blackblazer.png',
  blueblazer:           'assets/clothing/blueblazer.png',
  blueduoblazer:        'assets/clothing/blueduoblazer.png',
  // Nieuwe broeken & rokken
  bluebasicpants:       'assets/clothing/bluebasicpants.png',
  blackclassicpants:    'assets/clothing/blackclassicpants.png',
  blackskirt:           'assets/clothing/blackskirt.png',
  longdenimskirt:       'assets/clothing/longdenimskirt.png',
  // Nieuwe schoenen
  redcuteheals:         'assets/clothing/redcuteheals.png',
  redblackclassicheals: 'assets/clothing/redblackclassicheals.png',
  whiteclassicheals:    'assets/clothing/whiteclassicheals.png',
  // Nieuwe tassen
  pinkschoulderbag:     'assets/clothing/pinkschoulderbag.png',
  redshoulderbag:       'assets/clothing/redshoulderbag.png',
  blueclassicbag:       'assets/clothing/blueclassicbag.png',
};

const ITEMS = [
  // -- Tops --
  { id: 'top',                  img: ASSETS.top,                  name: 'Polo crop top',          cat: 'Top',        tags: ['casual', 'retro', 'chic'] },
  { id: 'whitetop',             img: ASSETS.whitetop,             name: 'Wit basic top',          cat: 'Top',        tags: ['casual', 'chic', 'minimaal'] },
  { id: 'whitebluetop',         img: ASSETS.whitebluetop,         name: 'White blue top',         cat: 'Top',        tags: ['casual', 'retro', 'street'] },
  { id: 'bluecutetop',          img: ASSETS.bluecutetop,          name: 'Blauwe cute top',        cat: 'Top',        tags: ['kawaii', 'Y2K', 'casual'] },
  { id: 'yellowtop',            img: ASSETS.yellowtop,            name: 'Gele top',               cat: 'Top',        tags: ['retro', 'Y2K', 'casual'] },
  { id: 'pinktop',              img: ASSETS.pinktop,              name: 'Roze top',               cat: 'Top',        tags: ['glamour', 'Y2K', 'kawaii'] },
  { id: 'pinkjapanesestyletop', img: ASSETS.pinkjapanesestyletop, name: 'Japanese style top',     cat: 'Top',        tags: ['kawaii', 'Y2K', 'chic'] },
  { id: 'coceqettetop',         img: ASSETS.coceqettetop,         name: 'Coquette top',           cat: 'Top',        tags: ['glamour', 'chic', 'avond'] },
  // -- Broeken & Rokken --
  { id: 'pants',                img: ASSETS.pants,                name: 'Y2K flare jeans',        cat: 'Broek',      tags: ['retro', 'glamour', 'Y2K'] },
  { id: 'lightblueflaredjeans', img: ASSETS.lightblueflaredjeans, name: 'Light blue flared',      cat: 'Broek',      tags: ['retro', 'casual', 'Y2K'] },
  { id: 'blueskirt',            img: ASSETS.blueskirt,            name: 'Blauwe rok',             cat: 'Rok',        tags: ['chic', 'casual', 'kawaii'] },
  // -- Schoenen --
  { id: 'hels',                 img: ASSETS.hels,                 name: 'Hoge laarzen',           cat: 'Schoenen',   tags: ['glamour', 'avond', 'chic'] },
  { id: 'shoes',                img: ASSETS.shoes,                name: 'Adidas Gazelle',         cat: 'Schoenen',   tags: ['casual', 'retro', 'street'] },
  { id: 'blackcuteshoes',       img: ASSETS.blackcuteshoes,       name: 'Black cute shoes',       cat: 'Schoenen',   tags: ['chic', 'kawaii', 'casual'] },
  { id: 'pinkheelsy2k',         img: ASSETS.pinkheelsy2k,         name: 'Pink Y2K heels',         cat: 'Schoenen',   tags: ['glamour', 'Y2K', 'avond'] },
  { id: 'hellokitysneakers',    img: ASSETS.hellokitysneakers,    name: 'Hello Kitty sneakers',   cat: 'Schoenen',   tags: ['kawaii', 'casual', 'Y2K'] },
  // -- Tassen --
  { id: 'jeansbag',             img: ASSETS.jeansbag,             name: 'Jeans bag',              cat: 'Tas',        tags: ['casual', 'retro', 'street'] },
  { id: 'blackcrossbodybag',    img: ASSETS.blackcrossbodybag,    name: 'Black crossbody bag',    cat: 'Tas',        tags: ['chic', 'avond', 'glamour'] },
  // -- Accessoires --
  { id: 'pandoracute',          img: ASSETS.pandoracute,          name: 'Pandora ketting',        cat: 'Accessoire', tags: ['chic', 'glamour', 'kawaii'] },
  { id: 'pandoraarmband',       img: ASSETS.pandoraarmband,       name: 'Pandora armband',        cat: 'Accessoire', tags: ['chic', 'glamour', 'Y2K'] },
  { id: 'sunglasses',           img: ASSETS.sunglasses,           name: 'Zonnebril',              cat: 'Accessoire', tags: ['retro', 'Y2K', 'casual'] },
  { id: 'flower',               img: ASSETS.flower,               name: 'Haar bloem',             cat: 'Accessoire', tags: ['kawaii', 'Y2K', 'casual'] },
  { id: 'glasses',              img: ASSETS.glasses,              name: 'Bril',                   cat: 'Accessoire', tags: ['retro', 'chic', 'casual'] },
  // -- Haar --
  { id: 'cutehairstylelong',    img: ASSETS.cutehairstylelong,    name: 'Cute lang haar',         cat: 'Haar',       tags: ['kawaii', 'Y2K', 'casual'] },
  { id: 'blacklonghair',        img: ASSETS.blacklonghair,        name: 'Zwart lang haar',        cat: 'Haar',       tags: ['chic', 'glamour', 'avond'] },
  { id: 'brownlongwavyhair',    img: ASSETS.brownlongwavyhair,    name: 'Bruin wavy haar',        cat: 'Haar',       tags: ['casual', 'retro', 'kawaii'] },
  // -- Nieuwe Tops --
  { id: 'edgycutetop',          img: ASSETS.edgycutetop,          name: 'Edgy cute top',          cat: 'Top',        tags: ['street', 'Y2K', 'retro'] },
  { id: 'redtop',               img: ASSETS.redtop,               name: 'Rode top',               cat: 'Top',        tags: ['glamour', 'Y2K', 'avond'] },
  { id: 'whiteclassictop',      img: ASSETS.whiteclassictop,      name: 'Wit classic top',        cat: 'Top',        tags: ['chic', 'casual', 'minimaal'] },
  { id: 'blueduotop',           img: ASSETS.blueduotop,           name: 'Blue duo top',           cat: 'Top',        tags: ['casual', 'retro', 'chic'] },
  // -- Blazers --
  { id: 'blackblazer',          img: ASSETS.blackblazer,          name: 'Zwarte blazer',          cat: 'Blazer',     tags: ['chic', 'avond', 'glamour'] },
  { id: 'blueblazer',           img: ASSETS.blueblazer,           name: 'Blauwe blazer',          cat: 'Blazer',     tags: ['chic', 'casual', 'retro'] },
  { id: 'blueduoblazer',        img: ASSETS.blueduoblazer,        name: 'Blue duo blazer',        cat: 'Blazer',     tags: ['chic', 'retro', 'casual'] },
  // -- Nieuwe Broeken & Rokken --
  { id: 'bluebasicpants',       img: ASSETS.bluebasicpants,       name: 'Blue basic broek',       cat: 'Broek',      tags: ['casual', 'retro', 'chic'] },
  { id: 'blackclassicpants',    img: ASSETS.blackclassicpants,    name: 'Zwarte classic broek',   cat: 'Broek',      tags: ['chic', 'avond', 'glamour'] },
  { id: 'blackskirt',           img: ASSETS.blackskirt,           name: 'Zwarte rok',             cat: 'Rok',        tags: ['chic', 'glamour', 'avond'] },
  { id: 'longdenimskirt',       img: ASSETS.longdenimskirt,       name: 'Long denim skirt',       cat: 'Rok',        tags: ['casual', 'retro', 'street'] },
  // -- Nieuwe Schoenen --
  { id: 'redcuteheals',         img: ASSETS.redcuteheals,         name: 'Rode cute heels',        cat: 'Schoenen',   tags: ['glamour', 'Y2K', 'avond'] },
  { id: 'redblackclassicheals', img: ASSETS.redblackclassicheals, name: 'Red black classic heels',cat: 'Schoenen',   tags: ['chic', 'glamour', 'avond'] },
  { id: 'whiteclassicheals',    img: ASSETS.whiteclassicheals,    name: 'Witte classic heels',    cat: 'Schoenen',   tags: ['chic', 'avond', 'casual'] },
  // -- Nieuwe Tassen --
  { id: 'pinkschoulderbag',     img: ASSETS.pinkschoulderbag,     name: 'Roze shoulder bag',      cat: 'Tas',        tags: ['glamour', 'Y2K', 'kawaii'] },
  { id: 'redshoulderbag',       img: ASSETS.redshoulderbag,       name: 'Rode shoulder bag',      cat: 'Tas',        tags: ['glamour', 'avond', 'chic'] },
  { id: 'blueclassicbag',       img: ASSETS.blueclassicbag,       name: 'Blauwe classic bag',     cat: 'Tas',        tags: ['chic', 'casual', 'retro'] },
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
        text: 'Hiii! Ik ben dol op die early 2000s fashion -- low rise, glitter, alles een beetje overdreven. Ik wil iets echt Y2K!',
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
        text: 'Hana wil een chique look voor haar werk event. Let op -- ze is kritisch!',
        actions: [], wardrobe: true
      },
    ]
  },
];
