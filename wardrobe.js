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
    thumb.title = item.name + ' -- klik om te verwijderen';
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
