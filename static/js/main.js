/* ══════════════════════════════════════
   luxpin — main.js
   ══════════════════════════════════════ */

/* ──────────────────────────────────────
   CASINO DATA
   Edit name, url, icon, badge, desc, tags here.
   badge options: 'top' | 'hot' | 'new' | 'verified' | ''
   ────────────────────────────────────── */
const casinos = [
  {
    id: 1,
    icon: '🎰',
    name: 'Jackpot City',
    url: 'jackpotcity.com',
    badge: 'top',
    desc: 'One of the longest-running online casinos, Jackpot City offers over 500 games powered by Microgaming, including progressive jackpots that have paid out millions. Fully licensed and trusted since 1998.',
    tags: ['Slots', 'Live Casino', 'Jackpots'],
  },
  {
    id: 2,
    icon: '♠️',
    name: '888 Casino',
    url: '888casino.com',
    badge: 'verified',
    desc: 'Award-winning casino with a vast library of exclusive in-house games alongside titles from top providers. Known for generous welcome bonuses and industry-leading responsible gambling tools.',
    tags: ['Poker', 'Slots', 'Live Dealer'],
  },
  {
    id: 3,
    icon: '🃏',
    name: 'LeoVegas',
    url: 'leovegas.com',
    badge: 'new',
    desc: 'Mobile-first casino crowned Mobile Casino of the Year multiple times. LeoVegas delivers a seamless experience across all devices with a curated selection of slots, sports, and live table games.',
    tags: ['Mobile', 'Sports', 'Live Casino'],
  },
  {
    id: 4,
    icon: '🎲',
    name: 'Spin Casino',
    url: 'spincasino.com',
    badge: 'hot',
    desc: 'Spin Casino combines a clean, intuitive interface with over 700 Microgaming titles. Renowned for its loyalty programme and consistent payout speeds, it is a staple choice for Canadian players.',
    tags: ['Slots', 'Blackjack', 'Loyalty'],
  },
  {
    id: 5,
    icon: '🌟',
    name: 'Royal Vegas',
    url: 'royalvegas.com',
    badge: 'top',
    desc: 'Royal Vegas carries a regal reputation built over two decades. Expect hundreds of premium slots, classic table games, and a VIP programme that rewards high rollers with personalised perks.',
    tags: ['VIP', 'Table Games', 'Slots'],
  },
  {
    id: 6,
    icon: '💎',
    name: 'Casumo',
    url: 'casumo.com',
    badge: 'verified',
    desc: 'Casumo reinvented the casino experience with its adventure-based reward system. Players earn trophies and level up as they play, making every session feel like progress toward something bigger.',
    tags: ['Adventure', 'Slots', 'Live'],
  },
  {
    id: 7,
    icon: '🏆',
    name: 'Betway Casino',
    url: 'betway.com',
    badge: 'hot',
    desc: 'Global sports betting giant with a world-class casino wing. Betway live casino floor is broadcast from professional studios in multiple languages, featuring exclusive table variants.',
    tags: ['Sports', 'Live Dealer', 'Baccarat'],
  },
  {
    id: 8,
    icon: '🎴',
    name: 'Rizk Casino',
    url: 'rizk.com',
    badge: 'new',
    desc: 'Rizk is built around its superhero mascot and the Wheel of Rizk — a daily bonus wheel every player can spin. No wagering requirements on free spins make it a fan favourite among slots enthusiasts.',
    tags: ['No Wager', 'Slots', 'Free Spins'],
  },
  {
    id: 9,
    icon: '🌈',
    name: 'PlayOJO',
    url: 'playojo.com',
    badge: 'verified',
    desc: 'PlayOJO made waves by scrapping all wagering requirements entirely. Every bonus, every free spin pays out in real cash immediately. Transparent, fair, and refreshingly straightforward.',
    tags: ['Fair Play', 'Slots', 'Cashback'],
  },
  {
    id: 10,
    icon: '🌊',
    name: 'Unibet Casino',
    url: 'unibet.com',
    badge: 'top',
    desc: 'Part of the Kindred Group, Unibet merges a comprehensive sportsbook with a fully stocked casino. Their poker network is among the softest in the world, attracting recreational players globally.',
    tags: ['Poker', 'Sports', 'Live'],
  },
  {
    id: 11,
    icon: '🎯',
    name: 'Mr Green',
    url: 'mrgreen.com',
    badge: 'hot',
    desc: 'Mr Green pioneered the Green Gaming responsible gambling tool that analyses playing patterns and flags risk. Behind the safety-first ethos sits a curated game library with the best titles hand-picked by experts.',
    tags: ['Responsible', 'Slots', 'Table'],
  },
  {
    id: 12,
    icon: '⚡',
    name: 'Wildz Casino',
    url: 'wildz.com',
    badge: 'new',
    desc: 'Wildz is a newcomer that grew fast by offering lightning-quick withdrawals, a sleek app, and an ever-growing catalogue of slots from 40+ providers. Daily promotions keep the experience fresh every visit.',
    tags: ['Fast Payout', 'Mobile', 'Slots'],
  },
];

/* ──────────────────────────────────────
   BADGE CONFIG
   Add new badge types here if needed.
   ────────────────────────────────────── */
const badgeMap = {
  top:      ['badge-top',      '★ Top Pick'],
  hot:      ['badge-hot',      'Hot'],
  new:      ['badge-new',      'New'],
  verified: ['badge-verified', '✓ Verified'],
};

/* ──────────────────────────────────────
   CARD TEMPLATE
   Edit the HTML structure of each card here.
   ────────────────────────────────────── */
function makeCard(c) {
  const [badgeCls, badgeTxt] = badgeMap[c.badge] || ['', ''];
  const tagsHtml = c.tags.map(t => `<span class="card-tag">${t}</span>`).join('');

  return `
    <div class="casino-card" onclick="window.open('https://${c.url}','_blank')">
      <div class="card-inner">
        <div class="card-top">
          <div class="card-favicon">${c.icon}</div>
          <div class="card-name-block">
            <div class="card-name">${c.name}</div>
            <a class="card-url" href="https://${c.url}" target="_blank" onclick="event.stopPropagation()">
              ${c.url} <span class="card-url-arrow">↗</span>
            </a>
          </div>
          ${badgeTxt ? `<div class="card-badge ${badgeCls}">${badgeTxt}</div>` : ''}
        </div>
        <div class="card-divider"></div>
        <div class="card-desc">${c.desc}</div>
      </div>
      <div class="card-footer">
        ${tagsHtml}
        <span class="card-footer-arrow">→</span>
      </div>
    </div>`;
}

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

  // Render casino cards
  document.getElementById('allGrid').innerHTML = casinos.map(makeCard).join('');

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
