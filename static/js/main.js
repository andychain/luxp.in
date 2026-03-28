/* ══════════════════════════════════════
   luxpin — main.js
   ══════════════════════════════════════ */

/* ──────────────────────────────────────
   CASINO DATA
   ──────────────────────────────────────
   Fields:
     id     — unique number
     img    — path to logo image (put files in /static/img/casinos/)
               e.g. '/img/casinos/jackpotcity.png'
               Use a square image, min 96×96px. PNG or WebP recommended.
     name   — casino display name
     url    — display label shown on the card (e.g. 'bc.game')
     link   — actual URL users go to when clicking (your affiliate link)
               e.g. 'https://bc.game/i-myaffiliate'
               If omitted, falls back to https://url
     badge  — 'top' | 'hot' | 'new' | 'verified' | '' (empty = no badge)
     desc   — 2–3 sentence description. Avoid apostrophes (use "it is" not "it's")
     tags   — array of short category labels shown as pills
   ────────────────────────────────────── */
const casinos = [
  {
    id: 1,
    img:  '/img/casinos/bcgame.png',
    name: 'BC.GAME',
    url:  'bc.game',
    link: 'https://bc.game/i-1zsibyr3p-n/',
    badge: 'top',
    desc: 'BC.Game is a crypto-first online casino offering provably fair games, instant cryptocurrency deposits and withdrawals, and a wide selection of slots, live dealer games, and in-house originals. Known for its fast gameplay and low entry barriers, it is popular among crypto users but restricts access in certain regions.',
    tags: ['Slots', 'Crypto Casino', 'Lottery'],
  },
  {
    id: 2,
    img:  '/img/casinos/betfury.png',
    name: 'BetFury',
    url:  'betfury.com',
    link: 'https://betfury.com/?r=User3078608',
    badge: 'verified',
    desc: 'BetFury is an online crypto gambling and gaming platform that allows users to play casino-style games, place bets, and earn rewards using cryptocurrencies like Bitcoin. It combines traditional online casino features (such as slots, dice, and jackpots) with blockchain-based elements, including its native BFG token, which users can earn and stake for dividends. The platform is known for its reward system, promotions, and integration of decentralized finance (DeFi) concepts into gaming.',
    tags: ['Crypto Staking', 'Slots', 'Rewards'],
  },
  {
    id: 3,
    img:  '/img/casinos/betpanda.png',
    name: 'BetPanda',
    url:  'betpanda.com',
    link: 'https://betpanda.io/?referral=6JJJQXM&type=registration&modal=user&isReferral=true',
    badge: 'new',
    desc: 'BetPanda.io is an online crypto-based casino and sportsbook launched around 2023, offering thousands of games (slots, live casino, and sports betting) and supporting deposits and withdrawals in cryptocurrencies. It emphasizes fast transactions, user anonymity (minimal or no KYC), and a wide range of betting options, including esports and live betting.',
    tags: ['Anonymity', 'Sports', 'Live Casino'],
  },
  {
    id: 4,
    img:  '/img/casinos/stake.png',
    name: 'Stake',
    url:  'stake.com',
    link: 'stake.com/?c=t9Hcn0NQ',
    badge: 'hot',
    desc: 'Stake.com is a global crypto casino and sportsbook where users gamble online using cryptocurrencies.',
    tags: ['Slots', 'Blackjack', 'Loyalty'],
  },
  {
    id: 5,
    img:  '/img/casinos/royalvegas.png',
    name: 'Royal Vegas',
    url:  'royalvegas.com',
    link: 'https://royalvegas.com',
    badge: 'top',
    desc: 'Royal Vegas carries a regal reputation built over two decades. Expect hundreds of premium slots, classic table games, and a VIP programme that rewards high rollers with personalised perks.',
    tags: ['VIP', 'Table Games', 'Slots'],
  },
  {
    id: 6,
    img:  '/img/casinos/casumo.png',
    name: 'Casumo',
    url:  'casumo.com',
    link: 'https://casumo.com',
    badge: 'verified',
    desc: 'Casumo reinvented the casino experience with its adventure-based reward system. Players earn trophies and level up as they play, making every session feel like progress toward something bigger.',
    tags: ['Adventure', 'Slots', 'Live'],
  },
  {
    id: 7,
    img:  '/img/casinos/betway.png',
    name: 'Betway Casino',
    url:  'betway.com',
    link: 'https://betway.com',
    badge: 'hot',
    desc: 'Global sports betting giant with a world-class casino wing. Betway live casino floor is broadcast from professional studios in multiple languages, featuring exclusive table variants.',
    tags: ['Sports', 'Live Dealer', 'Baccarat'],
  },
  {
    id: 8,
    img:  '/img/casinos/rizk.png',
    name: 'Rizk Casino',
    url:  'rizk.com',
    link: 'https://rizk.com',
    badge: 'new',
    desc: 'Rizk is built around its superhero mascot and the Wheel of Rizk — a daily bonus wheel every player can spin. No wagering requirements on free spins make it a fan favourite among slots enthusiasts.',
    tags: ['No Wager', 'Slots', 'Free Spins'],
  },
  {
    id: 9,
    img:  '/img/casinos/playojo.png',
    name: 'PlayOJO',
    url:  'playojo.com',
    link: 'https://playojo.com',
    badge: 'verified',
    desc: 'PlayOJO made waves by scrapping all wagering requirements entirely. Every bonus, every free spin pays out in real cash immediately. Transparent, fair, and refreshingly straightforward.',
    tags: ['Fair Play', 'Slots', 'Cashback'],
  },
  {
    id: 10,
    img:  '/img/casinos/unibet.png',
    name: 'Unibet Casino',
    url:  'unibet.com',
    link: 'https://unibet.com',
    badge: 'top',
    desc: 'Part of the Kindred Group, Unibet merges a comprehensive sportsbook with a fully stocked casino. Their poker network is among the softest in the world, attracting recreational players globally.',
    tags: ['Poker', 'Sports', 'Live'],
  },
  {
    id: 11,
    img:  '/img/casinos/mrgreen.png',
    name: 'Mr Green',
    url:  'mrgreen.com',
    link: 'https://mrgreen.com',
    badge: 'hot',
    desc: 'Mr Green pioneered the Green Gaming responsible gambling tool that analyses playing patterns and flags risk. Behind the safety-first ethos sits a curated game library with the best titles hand-picked by experts.',
    tags: ['Responsible', 'Slots', 'Table'],
  },
  {
    id: 12,
    img:  '/img/casinos/wildz.png',
    name: 'Wildz Casino',
    url:  'wildz.com',
    link: 'https://wildz.com',
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

  // Actual destination: use c.link if set, otherwise fall back to https://url
  const dest = c.link || 'https://' + c.url;

  // Initials fallback shown if image fails to load
  const initials = c.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return `
    <div class="casino-card" onclick="window.open('${dest}','_blank')">
      <div class="card-inner">
        <div class="card-top">
          <div class="card-favicon">
            <img
              src="${c.img}"
              alt="${c.name} logo"
              class="favicon-img"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
            />
            <span class="favicon-fallback" style="display:none">${initials}</span>
          </div>
          <div class="card-name-block">
            <div class="card-name">${c.name}</div>
            <a class="card-url" href="${dest}" target="_blank" onclick="event.stopPropagation()">
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
