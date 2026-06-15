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
    document.getElementById('soundBtn').innerHTML = muted ? '&#128263;' : '&#128266;';
  }

  return { click, drop, startBoutique, toggle };
})();
