document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.interest-button');
  const panels = document.querySelectorAll('.interest-panel');

  function activate(targetId) {
    // actualizar botones
    buttons.forEach(b => {
      if (b.dataset.target === targetId) b.classList.add('active');
      else b.classList.remove('active');
      b.setAttribute('aria-pressed', b.dataset.target === targetId);
    });
    // actualizar paneles
    panels.forEach(p => {
      if (p.id === targetId) p.classList.add('active');
      else p.classList.remove('active');
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => activate(btn.dataset.target));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(btn.dataset.target);
      }
    });
  });
});
