document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-jpc-menu-toggle]');
  const menu = document.getElementById('jpc-mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-jpc-value-rail]').forEach((rail) => {
    const section = rail.closest('.jpc-value-stories');
    const previous = section?.querySelector('[data-jpc-value-prev]');
    const next = section?.querySelector('[data-jpc-value-next]');
    const distance = () => Math.max(280, Math.round(rail.clientWidth * 0.82));
    previous?.addEventListener('click', () => rail.scrollBy({ left: -distance(), behavior: 'smooth' }));
    next?.addEventListener('click', () => rail.scrollBy({ left: distance(), behavior: 'smooth' }));
  });
});
