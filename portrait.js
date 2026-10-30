(() => {
  const trigger = document.getElementById('portrait-open');
  const dialog = document.getElementById('portrait-dialog');
  const image = document.getElementById('mosaic-image');
  const stage = document.getElementById('mosaic-stage');
  const zoom = document.getElementById('mosaic-zoom');
  const close = document.getElementById('mosaic-close');
  const status = document.getElementById('mosaic-status');
  if (typeof dialog.showModal !== 'function') return;

  function setZoom(enlarged) {
    stage.classList.toggle('is-zoomed', enlarged);
    zoom.setAttribute('aria-pressed', String(enlarged));
    zoom.textContent = enlarged ? 'Fit image' : 'View tiles (100%)';
    stage.scrollLeft = enlarged ? Math.max(0, image.naturalWidth * .22 - stage.clientWidth / 2) : 0;
    stage.scrollTop = enlarged ? Math.max(0, image.naturalHeight * .42 - stage.clientHeight / 2) : 0;
  }

  function imageReady() {
    if (image.src === trigger.href && image.naturalWidth === 6144) {
      status.textContent = '27,648 real CIFAR-10 tiles · 6144 × 4608';
      zoom.disabled = false;
    }
  }

  trigger.addEventListener('click', (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setZoom(false);
    zoom.disabled = true;
    status.textContent = 'Loading full-resolution mosaic…';
    image.src = trigger.href;
    dialog.showModal();
    document.documentElement.classList.add('mosaic-open');
    if (image.complete) imageReady();
  });
  image.addEventListener('load', imageReady);
  image.addEventListener('error', () => {
    status.textContent = 'The full image could not load. Please close and try again.';
  });
  zoom.addEventListener('click', () => setZoom(zoom.getAttribute('aria-pressed') !== 'true'));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('mosaic-open');
    setZoom(false);
    trigger.focus({preventScroll: true});
  });
})();
