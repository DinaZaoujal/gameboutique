const ASSETS = {
  // Enemy - Cindy
  enemy_smiles:       'assets/characters/enemy-smiles.png',
  enemy_mad:          'assets/characters/enemy-mad.png',
  enemy_rolseye:      'assets/characters/enemy-rolseye.png',
  enemy_evilsmile:    'assets/characters/enemy-evilsmile.png',
  enemy_scared:       'assets/characters/enemy scared.png',
  enemy_nevouslaugh:  'assets/characters/enemy-nevouslaugh.png',
  enemy_proudlaugh:   'assets/characters/enemy-proudlaugh.png',
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
  {
    id: 'c4', name: 'Cindy', color: '#9b42b8',
    isCindy: true,
    imgs: {
      normal: 'assets/characters/enemy-smiles.png',
      happy:  'assets/characters/enemy-evilsmile.png',
      sad:    'assets/characters/enemy-mad.png'
    },
    wish_tags: ['glamour', 'Y2K', 'chic'],
    scenes: [
      {
        phase: 'speciale klant', expr: 'normal', speaker: 'Cindy',
        text: '*Cindy stapt zelfverzekerd de winkel binnen* Toevallig! Ik ben gewoon... een klant vandaag. Jullie hebben toch iets goeds voor me? Ik zoek iets heel speciaals.',
        actions: [
          { lbl: 'Welkom! Wat zoek je?', next: 1 },
          { lbl: 'Cindy?! Als klant?!', next: 2 }
        ]
      },
      {
        phase: 'speciale klant', expr: 'normal', speaker: 'Cindy',
        text: 'Iets glamoureus, Y2K, maar ook chic en elegant. Het allerbeste van jullie collectie. En als jullie me NIET kunnen stylen... bewijst dat alleen dat ik het beter doe.',
        actions: [{ lbl: 'Uitdaging aanvaard!', next: 3 }]
      },
      {
        phase: 'speciale klant', expr: 'normal', speaker: 'Cindy',
        text: 'Ja ja, ik ben gewoon een klant! Mag dat niet? Ik wil eens zien of jullie echt zo goed zijn als iedereen zegt. Style me dan, als je durft! *armen over elkaar*',
        actions: [{ lbl: 'Je zult versteld staan.', next: 3 }]
      },
      {
        phase: 'styling', expr: 'normal', speaker: 'Boutique',
        text: 'Cindy wil het allerbeste: glamour, Y2K EN chic. Laat zien wat je in je hebt!',
        actions: [], wardrobe: true
      }
    ]
  },
];

const CINDY_ENCOUNTERS = {
  1: [
    {
      phase: 'indringer',
      speaker: 'Boutique',
      text: '*De voordeur gaat open. Een bekend gezicht stapt met een valse glimlach naar binnen...*',
      expr: null,
      actions: [{ lbl: 'Kijk wie we hebben...', next: 1 }]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Heeey! Wat een schattige winkel! Ik liep hier toevallig langs en dacht... ik ga even kijken! Jullie Y2K stijl is zo leuk!',
      expr: 'enemy_smiles',
      actions: [
        { lbl: 'Welkom, kan ik je helpen?', next: 2 },
        { lbl: 'Cindy?! Wat doe jij hier?', next: 3 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Oh geweldig! Ik zoek gewoon... inspiratie. Welke stijlen lopen goed deze week? Welke kleuren zijn populair? *kijkt gretig rond*',
      expr: 'enemy_evilsmile',
      actions: [
        { lbl: 'Onze stijlen zijn privé.', next: 4 },
        { lbl: 'Tuurlijk, kijk maar!', next: 5 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Ha! Ja ik ben het! Lang geleden hè? Ik kom gewoon even kijken hoe het gaat met... jullie kleine boutique. *giechelt nerveus*',
      expr: 'enemy_nevouslaugh',
      actions: [
        { lbl: 'Ga weg Cindy, we vertrouwen je niet.', next: 4 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Fine! Ik ga al. Maar wacht maar tot mijn winkel opent... dan zien we wie er echt stijl heeft! *smijt deur dicht*',
      expr: 'enemy_mad',
      actions: [],
      done: true
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: '*Fotografeert snel de hele collectie* Geweldig! Precies wat ik nodig had! Bedankt voor de gratis inspiratie! Ciao! *sprint weg*',
      expr: 'enemy_proudlaugh',
      actions: [],
      done: true
    }
  ],
  4: [
    {
      phase: 'indringer',
      speaker: 'Boutique',
      text: '*De deur vliegt open. Cindy stapt naar binnen, zelfverzekerder dan ooit...*',
      expr: null,
      actions: [{ lbl: '...', next: 1 }]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Surprise! Mijn nieuwe winkel opent volgende week, net om de hoek! Toeval hè? *knipoogt* Jullie worden mijn concurrentie!',
      expr: 'enemy_proudlaugh',
      actions: [
        { lbl: 'Dat meen je niet.', next: 2 },
        { lbl: 'Wat wil je nu van ons?', next: 3 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Jawel! En ik heb... heel wat inspiratie opgedaan dankzij jullie. Net als vroeger, Belle en ik samen. Waren dat nog eens tijden... *zucht dramatisch*',
      expr: 'enemy_evilsmile',
      actions: [
        { lbl: 'Die tijd is voorbij Cindy.', next: 4 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Oh niets niets... Ik kom alleen gedag zeggen. *kijkt nerveus rond de winkel* En misschien... nog wat ideetjes opdoen.',
      expr: 'enemy_nevouslaugh',
      actions: [
        { lbl: 'Doe de deur achter je dicht.', next: 4 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: '*Schrik* Oké oké! Ik ga! Maar jullie gaan dit betreuren! Mijn winkel wordt groter dan Y2K Boutique ooit was! *snelt weg*',
      expr: 'enemy_scared',
      actions: [],
      done: true
    }
  ],
  7: [
    {
      phase: 'indringer',
      speaker: 'Boutique',
      text: '*De deur gaat open voor de laatste dag. Cindy staat in de deuropening, voor het eerst zonder haar valse glimlach...*',
      expr: null,
      actions: [{ lbl: '...', next: 1 }]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Oké... ik geef het toe. Jullie boutique is beter dan ik dacht. Mijn winkel doet het minder goed dan gepland. *kijkt naar de grond*',
      expr: 'enemy_rolseye',
      actions: [
        { lbl: 'Dat verbaast me niks.', next: 2 },
        { lbl: 'Misschien had je eerlijk moeten zijn.', next: 2 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Ik weet het... Belle en ik hadden het anders kunnen doen. Ik had niet moeten liegen destijds. *pauze* Succes vandaag dan maar. *loopt weg*',
      expr: 'enemy_nevouslaugh',
      actions: [],
      done: true
    }
  ]
};

const CINDY_DROP_INS = [
  [
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Nog steeds open? Interessant... *kijkt demonstratief op horloge* Hoe lang denken jullie dit vol te houden?',
      expr: 'enemy_rolseye',
      actions: [
        { lbl: 'Zo lang als wij willen.', next: 1 },
        { lbl: 'Ga gewoon weg Cindy.', next: 1 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: '*Lacht neerbuigend* Oké oké. Ik heb toch al genoeg gezien. Tot de volgende keer! *wuift en loopt weg*',
      expr: 'enemy_proudlaugh',
      actions: [],
      done: true
    }
  ],
  [
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Hé! Ik kom alleen even zeggen dat mijn winkel het super goed doet! *toont foto\'s op telefoon* Kijk toch eens!',
      expr: 'enemy_smiles',
      actions: [
        { lbl: 'Niet geïnteresseerd.', next: 1 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Jammer! Maar jullie nieuwste stijlen staan al op mijn webshop. Oeps! *knipoogt en loopt weg*',
      expr: 'enemy_evilsmile',
      actions: [],
      done: true
    }
  ],
  [
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: '*Stapt naar binnen* Oh hoi! Ik was toevallig in de buurt. Zijn er al nieuwe collecties? Gewoon uit... interesse.',
      expr: 'enemy_nevouslaugh',
      actions: [
        { lbl: 'Nee. Dag Cindy.', next: 1 },
        { lbl: 'Wat ben jij aan het doen?', next: 1 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: '*Schrik* Niets! Ik doe niets! Ik ga al! *rent struikelend de deur uit*',
      expr: 'enemy_scared',
      actions: [],
      done: true
    }
  ],
  [
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: '*stapt binnen, ziet drukte* Hm! Drukker dan ik dacht. Mijn winkel heeft ook veel klanten hoor! Waarschijnlijk meer! *kijkt scheel*',
      expr: 'enemy_rolseye',
      actions: [
        { lbl: 'Dat betwijfel ik.', next: 1 },
        { lbl: 'Leuk voor jou Cindy.', next: 1 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Wat wil jij daarmee zeggen?! Mijn winkel is FANTASTISCH! We hebben vorige maand zelfs een... ehm... *kijkt weg* ...actie gehad. Die erg goed ging. *mompelt* Geloof ik. *smijt deur dicht*',
      expr: 'enemy_nevouslaugh',
      actions: [],
      done: true
    }
  ],
  [
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'Hé! Ik zoek eigenlijk een nieuwe styliste voor mijn winkel. Jij lijkt talent te hebben... hoe zou je het vinden om VOOR mij te werken? *glimlacht vals*',
      expr: 'enemy_smiles',
      actions: [
        { lbl: 'Nee dankjewel.', next: 1 },
        { lbl: 'Absoluut niet.', next: 1 }
      ]
    },
    {
      phase: 'indringer',
      speaker: 'Cindy',
      text: 'FINE! Je weet echt niet wat je mist! Mijn winkel heeft betere... *pauze* ...betere... *zwijgt lang* ...het is gewoon beter oké?! *loopt weg met rode konen*',
      expr: 'enemy_scared',
      actions: [],
      done: true
    }
  ]
];
