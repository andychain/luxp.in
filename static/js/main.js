/* ══════════════════════════════════════
   luxpin — main.js
   Casino cards are rendered by Hugo from content/casinos/*.md
   Edit casino info there, not here.
   ══════════════════════════════════════ */

/* ──────────────────────────────────────
   THEME TOGGLE
   ────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('luxpin-theme', next);
  applyTheme(next);
}

// Sync button icon on load (theme already applied by inline <head> script)
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('luxpin-theme') || 'dark';
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
});

/* ──────────────────────────────────────
   COUNTRY SWITCHER
   ────────────────────────────────────── */
function toggleCS() {
  document.getElementById('cs').classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', e => {
  const cs = document.getElementById('cs');
  if (cs && !cs.contains(e.target)) cs.classList.remove('open');
});

/* ──────────────────────────────────────
   HAMBURGER MENU
   ────────────────────────────────────── */
function toggleHamburger() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  const open = menu.classList.toggle('open');
  btn.textContent = open ? '✕' : '☰';
}

// Close mobile menu when clicking outside
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
    btn.textContent = '☰';
  }
});


function setTab(el) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function setF(el) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');

  const tag = el.dataset.tag;
  document.querySelectorAll('.casino-card').forEach(card => {
    if (!tag) {
      card.style.display = '';
    } else {
      const cardTags = card.dataset.tags.split(',').map(t => t.trim());
      card.style.display = cardTags.includes(tag) ? '' : 'none';
    }
  });
}
