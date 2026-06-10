// script.js

// mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.mobile-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.hidden = expanded;
  });

  // close menu when clicking a link
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    });
  });
}

// year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// tabs — scoped per tablist so multiple tab groups work independently
document.querySelectorAll('[role="tablist"]').forEach(tablist => {
  const tabs = tablist.querySelectorAll('.tab');
  const section = tablist.closest('.section, section');
  const panels = section ? section.querySelectorAll('.tab-panel') : document.querySelectorAll('.tab-panel');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      panels.forEach(p => {
        const isTarget = p.id === targetId;
        p.hidden = !isTarget;
        p.classList.toggle('is-active', isTarget);
      });
    });
  });
});
