/* ============================================================
   KOPI & RASA — main.js
   Cart, Filtering, Navbar, Scroll Reveal, Toast
   ============================================================ */

// ── CART STATE ────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('kopiRasaCart') || '[]');

function saveCart() {
  localStorage.setItem('kopiRasaCart', JSON.stringify(cart));
}

function formatRupiah(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

// ── TOAST ─────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── CART RENDER ───────────────────────────────────────────
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  countEl.textContent = cart.length;
  countEl.classList.toggle('visible', cart.length > 0);

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Keranjang kosong</p>
      </div>`;
    footerEl.style.display = 'none';
    return;
  }

  const total = cart.reduce((s, i) => s + i.price, 0);
  totalEl.textContent = formatRupiah(total);
  footerEl.style.display = 'block';

  const emojiMap = { 1:'🫘', 2:'☕', 3:'🫘', 4:'🧋', 5:'🍶', 6:'🥐', 7:'🍞', 8:'🍪', 9:'⚗️' };
  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-emoji">${emojiMap[item.id] || '☕'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatRupiah(item.price)}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})">Hapus</button>
    </div>
  `).join('');
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  renderCart();
}

// ── ADD TO CART ───────────────────────────────────────────
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.quick-add');
  if (!btn) return;
  const { id, name, price } = btn.dataset;
  cart.push({ id: +id, name, price: +price });
  saveCart();
  renderCart();
  showToast(`✓ ${name} ditambahkan ke keranjang`);
});

// ── CART DRAWER ───────────────────────────────────────────
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.querySelector('.cart-checkout')?.addEventListener('click', () => {
  showToast('🎉 Checkout berhasil! Terima kasih.');
  cart = [];
  saveCart();
  renderCart();
  closeCart();
});

// ── NAVBAR SCROLL ─────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── MOBILE HAMBURGER ──────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') navLinks.classList.remove('mobile-open');
});

// ── KATEGORI FILTER ───────────────────────────────────────
document.querySelectorAll('.kategori-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.kategori-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const filter = card.dataset.filter;
    document.querySelectorAll('.produk-card').forEach(p => {
      const match = filter === 'semua' || p.dataset.kategori === filter;
      p.style.display = match ? '' : 'none';
    });
  });
});

// ── NEWSLETTER ────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(`✓ ${input.value} berhasil didaftarkan!`);
  input.value = '';
}

// ── SCROLL REVEAL ─────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function setupReveal() {
  const targets = document.querySelectorAll(
    '.produk-card, .testi-card, .proses-item, .kategori-card, .banner-inner, .newsletter-inner'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  setupReveal();
});
