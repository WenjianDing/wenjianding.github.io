(() => {
  const frame = document.getElementById('portrait-frame');
  const image = frame.querySelector('.portrait');
  const detail = new Image();
  let ready = false;
  let active = false;
  let x = .22;
  let y = .42;
  let pointer = null;
  let pendingFrame = 0;

  function render() {
    pendingFrame = 0;
    const rect = frame.getBoundingClientRect();
    if (pointer) {
      x = Math.max(0, Math.min(1, (pointer.x - rect.left) / rect.width));
      y = Math.max(0, Math.min(1, (pointer.y - rect.top) / rect.height));
      pointer = null;
    }
    const zoomed = ready && active;
    const scale = zoomed ? 20 : 1;
    const moveX = (1 - scale) * x * rect.width;
    const moveY = (1 - scale) * y * rect.height;
    image.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${scale})`;
    frame.classList.toggle('is-zoomed', zoomed);
    frame.setAttribute('aria-pressed', String(zoomed));
  }

  function requestRender() {
    if (!pendingFrame) pendingFrame = requestAnimationFrame(render);
  }

  function reset() {
    active = false;
    pointer = null;
    requestRender();
  }

  function followPointer(event) {
    pointer = {x: event.clientX, y: event.clientY};
    active = true;
    requestRender();
  }

  frame.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'touch') followPointer(event);
  });
  frame.addEventListener('pointermove', event => {
    if (event.pointerType !== 'touch' || event.buttons === 1) followPointer(event);
  });
  frame.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch') followPointer(event);
  });
  frame.addEventListener('pointerup', event => {
    if (event.pointerType === 'touch') reset();
  });
  frame.addEventListener('pointerleave', reset);
  frame.addEventListener('pointercancel', reset);
  frame.addEventListener('blur', reset);

  // Enter/Space toggles details for keyboard users; mouse use needs no click.
  frame.addEventListener('click', event => {
    if (event.detail !== 0) return;
    active = !active;
    requestRender();
  });
  frame.addEventListener('keydown', event => {
    if (event.key === 'Escape') reset();
    const directions = {ArrowLeft: [-.02, 0], ArrowRight: [.02, 0], ArrowUp: [0, -.02], ArrowDown: [0, .02]};
    if (!active || !directions[event.key]) return;
    event.preventDefault();
    pointer = null;
    const [dx, dy] = directions[event.key];
    x = Math.max(0, Math.min(1, x + dx));
    y = Math.max(0, Math.min(1, y + dy));
    requestRender();
  });
  window.addEventListener('resize', requestRender);

  // Decode before activation so the first hover does not wait for image decoding.
  detail.decoding = 'async';
  detail.fetchPriority = 'low';
  detail.src = image.dataset.detailSrc;
  detail.decode().then(() => {
    image.src = detail.src;
    ready = true;
    requestRender();
  }).catch(() => {
    // Keep the preview if the full image cannot be loaded or decoded.
  });
})();
