/* ══════════════════════════════════════
   luxpin — main.js
   Casino cards are now rendered by Hugo from content/casinos/*.md
   Edit casino info there, not here.
   ══════════════════════════════════════ */

/* ──────────────────────────────────────
   TICKER — LIVE CRYPTO PRICES
   Add/remove coins using CoinGecko IDs:
   bitcoin, ethereum, solana, dogecoin,
   ripple, cardano, binancecoin, tron, etc.
   Full list: coingecko.com/en/all-cryptocurrencies
   ────────────────────────────────────── */
const TICKER_COINS = [
  'bitcoin',
  'ethereum',
  'solana',
  'binancecoin',
  'ripple',
  'dogecoin',
  'cardano',
  'litecoin',
];

// Display currency — matches country switcher
// Options: 'usd' 'cad' 'eur' 'gbp' 'aud' 'jpy' 'sgd' etc.
const TICKER_CURRENCY = 'usd';

const TICKER_SYMBOLS = {
  bitcoin:     'BTC',
  ethereum:    'ETH',
  solana:      'SOL',
  binancecoin: 'BNB',
  ripple:      'XRP',
  dogecoin:    'DOGE',
  cardano:     'ADA',
  litecoin:    'LTC',
};

const CURRENCY_SIGN = {
  usd: '$', cad: 'CA$', eur: '€', gbp: '£', aud: 'A$',
  jpy: '¥', krw: '₩',  hkd: 'HK$', sgd: 'S$', inr: '₹', brl: 'R$',
};

function renderTicker(items) {
  // Duplicate array so the scroll loop is seamless
  document.getElementById('ticker').innerHTML = [...items, ...items].map(t =>
    `<span class="ticker-item">
      <span class="ticker-dot"></span>
      <span class="ticker-name">${t.n}</span>
      <span class="${t.up ? 'ticker-up' : 'ticker-dn'}">${t.p}</span>
    </span>`
  ).join('');
}

function formatPrice(price, currency) {
  const sign = CURRENCY_SIGN[currency] || '$';
  if (price >= 1000) return sign + price.toLocaleString('en', { maximumFractionDigits: 0 });
  if (price >= 1)    return sign + price.toLocaleString('en', { maximumFractionDigits: 2 });
  return sign + price.toFixed(4);
}

async function fetchCryptoTicker() {
  const ids = TICKER_COINS.join(',');
  const url = `https://api.coingecko.com/api/v3/simple/price`
    + `?ids=${ids}&vs_currencies=${TICKER_CURRENCY}&include_24hr_change=true`;
  try {
    const data = await fetch(url).then(r => r.json());
    const items = TICKER_COINS
      .filter(id => data[id])
      .map(id => {
        const price  = data[id][TICKER_CURRENCY];
        const change = data[id][`${TICKER_CURRENCY}_24h_change`] || 0;
        const sym    = TICKER_SYMBOLS[id] || id.toUpperCase();
        const sign   = change >= 0 ? '+' : '';
        return {
          n:  sym,
          p:  `${formatPrice(price, TICKER_CURRENCY)} (${sign}${change.toFixed(2)}%)`,
          up: change >= 0,
        };
      });
    renderTicker(items);
  } catch (err) {
    // API failed or rate-limited — show fallback message
    console.warn('Crypto ticker fetch failed:', err);
    renderTicker([
      { n: 'BTC', p: 'prices unavailable', up: true },
    ]);
  }
}

/* ──────────────────────────────────────
   INIT — runs on DOMContentLoaded
   ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // Fetch live crypto prices, then auto-refresh every 60 seconds
  fetchCryptoTicker();
  setInterval(fetchCryptoTicker, 60_000);

});

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

function pickC(el, flag, name) {
  document.getElementById('cflag').textContent = flag;
  document.getElementById('cname').textContent = name;
  document.getElementById('heroC').textContent = name;
  document.querySelectorAll('.country-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('cs').classList.remove('open');
}

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
}
