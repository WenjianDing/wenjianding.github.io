(() => {
  const frame = document.getElementById('portrait-frame');
  const image = frame.querySelector('.portrait');
  const detail = new Image();
  let ready = false;
  let active = false;
  let x = .22;
  let y = .42;

  function render() {
    const zoomed = ready && active;
    image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    frame.classList.toggle('is-zoomed', zoomed);
    frame.setAttribute('aria-pressed', String(zoomed));
  }

  function reset() {
    active = false;
    render();
  }

  function followPointer(event) {
    const rect = frame.getBoundingClientRect();
    x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    active = true;
    render();
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
    render();
  });
  frame.addEventListener('keydown', event => {
    if (event.key === 'Escape') reset();
    const directions = {ArrowLeft: [-.02, 0], ArrowRight: [.02, 0], ArrowUp: [0, -.02], ArrowDown: [0, .02]};
    if (!active || !directions[event.key]) return;
    event.preventDefault();
    const [dx, dy] = directions[event.key];
    x = Math.max(0, Math.min(1, x + dx));
    y = Math.max(0, Math.min(1, y + dy));
    render();
  });

  // Warm the full image in the background so hovering can reveal real tiles.
  detail.onload = () => {
    image.src = detail.src;
    ready = true;
    render();
  };
  detail.decoding = 'async';
  detail.fetchPriority = 'low';
  detail.src = image.dataset.detailSrc;
})();
