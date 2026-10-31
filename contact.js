(() => {
  const contact = document.getElementById('email-contact');
  const address = document.getElementById('email-address');
  const copy = document.getElementById('copy-email');
  const status = document.getElementById('email-status');
  copy.hidden = false;
  address.addEventListener('click', () => address.select());
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(address.value);
      status.textContent = 'Email address copied.';
    } catch {
      address.focus();
      address.select();
      status.textContent = 'Please copy the selected address manually.';
    }
  });
  contact.addEventListener('toggle', () => { status.textContent = ''; });
  document.addEventListener('pointerdown', event => {
    if (!contact.contains(event.target)) contact.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && contact.open) {
      contact.open = false;
      contact.querySelector('summary').focus();
    }
  });
})();
