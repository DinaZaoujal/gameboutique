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

  const ringSound = new Audio('music/telephone-ring.mp3');
  ringSound.loop = true;
  ringSound.volume = 0.7;

  function ring() {
    if (muted) return;
    ringSound.currentTime = 0;
    ringSound.play().catch(() => {});
  }

  function stopRing() {
    ringSound.pause();
    ringSound.currentTime = 0;
  }

  const evilMusic = new Audio('music/enemy.mp3');
  evilMusic.loop = true;
  evilMusic.volume = 0.6;

  function startEvil() {
    bgMusic.pause();
    evilMusic.muted = muted;
    evilMusic.currentTime = 0;
    evilMusic.play().catch(() => {});
  }

  function stopEvil() {
    evilMusic.pause();
    evilMusic.currentTime = 0;
    bgMusic.play().catch(() => {});
  }

  function toggle() {
    muted = !muted;
    bgMusic.muted = muted;
    ringSound.muted = muted;
    evilMusic.muted = muted;
    document.getElementById('soundBtn').innerHTML = muted ? '&#128263;' : '&#128266;';
  }

  return { click, drop, startBoutique, ring, stopRing, startEvil, stopEvil, toggle };
})();
