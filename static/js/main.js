/* ══════════════════════════════════════
   luxpin — main.js
   Casino cards are rendered by Hugo from content/casinos/*.md
   Edit casino info there, not here.
   ══════════════════════════════════════ */

/* ──────────────────────────────────────
   THEME TOGGLE
   ────────────────────────────────────── */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
}

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
   NAV TABS & FILTERS
   ────────────────────────────────────── */
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
