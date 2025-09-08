// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (respects system on first load)
const root = document.documentElement;
const stored = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const apply = (m) => root.classList.toggle('dark', m === 'dark');
apply(stored || (prefersDark.matches ? 'dark' : 'light'));
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.classList.contains('dark') ? 'light' : 'dark';
  apply(next); localStorage.setItem('theme', next);
});

// Project filters
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('#projectGrid [data-tags]');
tabs.forEach(btn => btn.addEventListener('click', () => {
  tabs.forEach(b => b.classList.remove('tab-active'));
  btn.classList.add('tab-active');
  const f = btn.dataset.filter;
  cards.forEach(c => { c.style.display = (f === 'all' || c.dataset.tags.includes(f)) ? '' : 'none'; });
}));

// Modals (recommendation PDFs)
document.querySelectorAll('[data-modal-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const sel = btn.getAttribute('data-modal-target');
    const modal = document.querySelector(sel);
    if (!modal) return;
    modal.classList.remove('hidden'); modal.classList.add('flex');
  });
});
document.querySelectorAll('[data-modal-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (!modal) return;
    modal.classList.add('hidden'); modal.classList.remove('flex');
  });
});
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); } });
});

// Fade-in on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('fade-in'); io.unobserve(e.target); } });
},{threshold:.15});
document.querySelectorAll('section, .card, .timeline-item').forEach(el => { el.classList.add('fade'); io.observe(el); });
