/* ────────────────────────────────
   PRODUCTS DATA
──────────────────────────────── */
const WA = 'https://wa.me/221788737138';

const products = [
  {
    id: 'donuts',
    name: 'Donuts',
    emoji: '🍩',
    desc: 'Donuts moelleux et généreux, décorés avec amour et des toppings irrésistibles.',
    prices: [{ label: 'À partir de 3 000 FCFA', desc: '' }],
    media: [
      { type: 'img', src: 'galerie/do1.jpg' },
      { type: 'img', src: 'galerie/do2.jpg' },
      { type: 'vid', src: 'galerie/do1.mp4' },
      { type: 'vid', src: 'galerie/do2.mp4' },
    ]
  },
  {
    id: 'boule-neige',
    name: 'Boule de Neige',
    emoji: '⛄',
    desc: 'Fondante et enneigée, avec topping au choix : El Mordienne Spéculos ou Nutella El Mordienne.',
    prices: [{ label: '3 000 FCFA', desc: 'La pièce' }],
    media: [
      { type: 'img', src: 'galerie/bo1.jpg' },
      { type: 'img', src: 'galerie/bo2.jpg' },
      { type: 'img', src: 'galerie/bo3.jpg' },
      { type: 'vid', src: 'galerie/bo1.mp4' },
    ]
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    emoji: '🧁',
    desc: 'Cupcakes moelleux et décorés, disponibles en box cadeau selon vos envies.',
    prices: [
      { label: '5 500 FCFA', desc: 'Box de 6' },
      { label: '10 000 FCFA', desc: 'Box de 12' },
    ],
    media: [
      { type: 'img', src: 'galerie/cu1.jpg' },
      { type: 'img', src: 'galerie/cu2.jpg' },
      { type: 'img', src: 'galerie/cu3.jpg' },
      { type: 'vid', src: 'galerie/cu1.mp4' },
    ]
  },
  {
    id: 'layer-cake',
    name: 'Layer Cake',
    emoji: '🎂',
    desc: 'Gâteaux en couches élaborés et personnalisables, pour des occasions inoubliables.',
    prices: [{ label: 'À partir de 10 000 FCFA', desc: '' }],
    media: [
      { type: 'img', src: 'galerie/la1.jpg' },
      { type: 'img', src: 'galerie/la2.jpg' },
      { type: 'img', src: 'galerie/la3.jpg' },
      { type: 'img', src: 'galerie/la4.jpg' },
      { type: 'img', src: 'galerie/la5.jpg' },
      { type: 'img', src: 'galerie/la6.jpg' },
      { type: 'vid', src: 'galerie/la1.mp4' },
      { type: 'vid', src: 'galerie/la2.mp4' },
    ]
  },
  {
    id: 'box-sucree',
    name: 'Box Sucrée',
    emoji: '🍬',
    desc: 'Assortiments sucrés gourmands, parfaits pour se faire plaisir ou offrir.',
    prices: [{ label: 'À partir de 2 000 FCFA', desc: '' }],
    media: [
      { type: 'img', src: 'galerie/bosu1.jpg' },
      { type: 'img', src: 'galerie/bosu2.jpg' },
      { type: 'img', src: 'galerie/bosu3.jpg' },
      { type: 'img', src: 'galerie/bosu4.jpg' },
      { type: 'img', src: 'galerie/bosu5.jpg' },
      { type: 'vid', src: 'galerie/bosu1.mp4' },
      { type: 'vid', src: 'galerie/bosu2.mp4' },
      { type: 'vid', src: 'galerie/bosu3.mp4' },
      { type: 'vid', src: 'galerie/bosu4.mp4' },
    ]
  },
  {
    id: 'box-salee',
    name: 'Box Salée',
    emoji: '🥐',
    desc: 'Nos box salées généreuses et savoureuses, idéales pour les moments partagés.',
    prices: [{ label: 'À partir de 3 000 FCFA', desc: '' }],
    media: [
      { type: 'img', src: 'galerie/bosa1.jpg' },
      { type: 'vid', src: 'galerie/bosa1.mp4' },
      { type: 'vid', src: 'galerie/bosa2.mp4' },
      { type: 'vid', src: 'galerie/bosa3.mp4' },
    ]
  },
  {
    id: 'gateau-simple',
    name: 'Gâteau Simple',
    emoji: '🍰',
    desc: 'Gâteaux élégants et délicieux, pour toutes les occasions et tous les goûts.',
    prices: [{ label: 'À partir de 8 000 FCFA', desc: '' }],
    media: [
      { type: 'img', src: 'galerie/ga1.jpg' },
      { type: 'img', src: 'galerie/ga2.jpg' },
      { type: 'img', src: 'galerie/ga3.jpg' },
      { type: 'img', src: 'galerie/ga4.jpg' },
    ]
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    emoji: '☕',
    desc: 'Tiramisu onctueux fait maison, la douceur italienne revisitée avec gourmandise.',
    prices: [
      { label: '1 500 FCFA', desc: 'Petite portion' },
      { label: '3 000 FCFA', desc: 'Grande portion' },
      { label: '10 000 FCFA', desc: 'Premium' },
    ],
    media: [
      { type: 'img', src: 'galerie/ti1.jpg' },
      { type: 'img', src: 'galerie/ti2.jpg' },
      { type: 'img', src: 'galerie/ti3.jpg' },
      { type: 'img', src: 'galerie/ti4.jpg' },
      { type: 'img', src: 'galerie/ti2.mp4' },
      { type: 'vid', src: 'galerie/ti1.mp4' },
    ]
  },
  {
    id: 'bento-box',
    name: 'Bento Box',
    emoji: '🎁',
    desc: 'Bento box surprises soigneusement préparées, idéales pour offrir.',
    prices: [
      { label: '12 000 FCFA', desc: 'Format standard' },
      { label: '15 000 FCFA', desc: 'Format premium' },
    ],
    media: [
      { type: 'img', src: 'galerie/btb1.jpg' },
    ]
  },
  {
    id: 'bento-cake',
    name: 'Bento Cake',
    emoji: '🫶',
    desc: 'Mini gâteaux bento personnalisés, parfaits pour les petites attentions du quotidien.',
    prices: [
      { label: '5 500 FCFA', desc: 'Format classique' },
      { label: '6 000 FCFA', desc: 'Format premium' },
    ],
    media: [
      { type: 'img', src: 'galerie/btc1.jpg' },
      { type: 'img', src: 'galerie/btc2.jpg' },
      { type: 'img', src: 'galerie/btc3.jpg' },
      { type: 'img', src: 'galerie/btc4.jpg' },
    ]
  },
  {
    id: 'brownies',
    name: 'Brownies',
    emoji: '🍫',
    desc: 'Brownies fondants et chocolatés, disponibles avec ou sans topping.',
    prices: [
      { label: '2 500 FCFA', desc: 'Mini brownies' },
      { label: '3 500 FCFA', desc: 'Box de 9 sans topping' },
      { label: '5 000 FCFA', desc: 'Box de 9 avec topping' },
    ],
    media: [
      { type: 'img', src: 'galerie/br1.jpg' },
      { type: 'vid', src: 'galerie/br1.mp4' },
    ]
  },
];

/* ────────────────────────────────
   RENDER PRODUCTS
──────────────────────────────── */
function renderProducts() {
  const grid = document.getElementById('productsGrid');

  products.forEach((p, pi) => {
    const firstImg = p.media.find(m => m.type === 'img');
    const imgs     = p.media.filter(m => m.type === 'img');
    const vids     = p.media.filter(m => m.type === 'vid');

    // Prices HTML
    const pricesHTML = p.prices.length
      ? `<div class="p-prices">${p.prices.map(pr =>
          `<div class="p-price">${pr.label}${pr.desc ? `<small>${pr.desc}</small>` : ''}</div>`
        ).join('')}</div>`
      : '';

    // Thumbnails
    const thumbsHTML = p.media.map((m, mi) => {
      if (m.type === 'img') {
        return `<div class="p-thumb" onclick="openLightbox(${pi},${mi})">
                  <img src="${m.src}" alt="${p.name}" loading="lazy" />
                </div>`;
      } else {
        return `<div class="p-thumb" onclick="openLightbox(${pi},${mi})">
                  <div class="p-thumb-vid"><i class="fas fa-play"></i></div>
                </div>`;
      }
    }).join('');

    // Media count badge
    const countParts = [];
    if (imgs.length) countParts.push(`<i class="fas fa-image"></i>${imgs.length}`);
    if (vids.length) countParts.push(`<i class="fas fa-video"></i>${vids.length}`);

    // WhatsApp order note (always shown)
    const noteHTML = `<div class="p-note">
      <i class="fab fa-whatsapp"></i>
      <span>Commandes & personnalisations sur WhatsApp 💬</span>
    </div>`;

    const card = document.createElement('div');
    card.className = 'p-card reveal';
    card.innerHTML = `
      <div class="p-cover" onclick="openLightbox(${pi},0)">
        ${firstImg
          ? `<img class="p-cover-img" src="${firstImg.src}" alt="${p.name}" loading="lazy" />`
          : `<div class="p-cover-img" style="background:var(--rose-light);display:flex;align-items:center;justify-content:center;font-size:3rem;">${p.emoji}</div>`
        }
        <div class="p-overlay">
          <button class="p-view-btn"><i class="fas fa-expand"></i> Voir la galerie</button>
          <span class="p-media-count">${countParts.join(' · ')}</span>
        </div>
      </div>

      <div class="p-body">
        <div class="p-emoji">${p.emoji}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-desc">${p.desc}</div>
        ${pricesHTML}
        <div class="p-thumbs">${thumbsHTML}</div>
        ${noteHTML}
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ────────────────────────────────
   LIGHTBOX
──────────────────────────────── */
let lbProduct = 0;
let lbIndex   = 0;
let lbTouch   = { x: 0 };

function openLightbox(pi, mi) {
  lbProduct = pi;
  lbIndex   = mi;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  // Pause any video
  const vid = document.querySelector('.lb-vid');
  if (vid) vid.pause();
}

function renderLightbox() {
  const p   = products[lbProduct];
  const m   = p.media[lbIndex];
  const stage = document.getElementById('lbStage');
  const label = document.getElementById('lbLabel');
  const counter = document.getElementById('lbCounter');
  const thumbsWrap = document.getElementById('lbThumbs');

  // Remove old media
  const old = stage.querySelector('.lb-img, .lb-vid');
  if (old) old.remove();

  // Label
  label.textContent = p.name;

  // Counter
  counter.textContent = `${lbIndex + 1} / ${p.media.length}`;

  // Media
  if (m.type === 'img') {
    const img = document.createElement('img');
    img.className = 'lb-img';
    img.src = m.src;
    img.alt = p.name;
    stage.insertBefore(img, stage.firstChild);
  } else {
    const vid = document.createElement('video');
    vid.className = 'lb-vid';
    vid.src = m.src;
    vid.controls = true;
    vid.autoplay = false;
    vid.playsInline = true;
    stage.insertBefore(vid, stage.firstChild);
  }

  // Thumbnails
  thumbsWrap.innerHTML = p.media.map((item, i) => {
    const isCur = i === lbIndex;
    if (item.type === 'img') {
      return `<div class="lb-thumb ${isCur ? 'cur' : ''}" onclick="jumpLb(${i})">
                <img src="${item.src}" alt="${p.name}" />
              </div>`;
    } else {
      return `<div class="lb-thumb ${isCur ? 'cur' : ''}" onclick="jumpLb(${i})">
                <div class="lb-thumb-vid"><i class="fas fa-play"></i></div>
              </div>`;
    }
  }).join('');

  // Scroll active thumb into view
  const curThumb = thumbsWrap.querySelector('.cur');
  if (curThumb) curThumb.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
}

function jumpLb(i) {
  const vid = document.querySelector('.lb-vid');
  if (vid) vid.pause();
  lbIndex = i;
  renderLightbox();
}

function lbNav(dir) {
  const p = products[lbProduct];
  const vid = document.querySelector('.lb-vid');
  if (vid) vid.pause();
  lbIndex = (lbIndex + dir + p.media.length) % p.media.length;
  renderLightbox();
}

document.getElementById('lbPrev').addEventListener('click', () => lbNav(-1));
document.getElementById('lbNext').addEventListener('click', () => lbNav(1));
document.getElementById('lbClose').addEventListener('click', closeLightbox);

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'Escape')     closeLightbox();
});

// Touch/swipe on lightbox stage
const lbStageEl = document.getElementById('lbStage');
lbStageEl.addEventListener('touchstart', (e) => { lbTouch.x = e.touches[0].clientX; }, { passive: true });
lbStageEl.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - lbTouch.x;
  if (Math.abs(dx) > 50) lbNav(dx < 0 ? 1 : -1);
}, { passive: true });

/* ────────────────────────────────
   NAVBAR SCROLL
──────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
}, { passive: true });

/* ────────────────────────────────
   MOBILE MENU
──────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ────────────────────────────────
   SCROLL REVEAL
──────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .p-card').forEach(el => observer.observe(el));
}

/* ────────────────────────────────
   PETALS ANIMATION
──────────────────────────────── */
function createPetals() {
  const wrap = document.getElementById('petals');
  const count = window.innerWidth < 600 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    const size = 7 + Math.random() * 9;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size * 1.3}px;
      animation-duration: ${7 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 12}s;
      opacity: ${.25 + Math.random() * .5};
      background: rgba(244,114,182,${.25 + Math.random() * .25});
      border-radius: ${Math.random() > .5 ? '50% 0 50% 0' : '0 50% 0 50%'};
    `;
    wrap.appendChild(p);
  }
}

/* ────────────────────────────────
   INIT
──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initReveal();
  createPetals();
});
