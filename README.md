# ☕ Kopi & Rasa — Premium Coffee & Food E-Commerce

Website e-commerce premium untuk penjualan kopi single origin Indonesia dan makanan artisan.

## 🎨 Design System

| Warna | Hex | Peran |
|-------|-----|-------|
| Espresso Black | `#1A0A00` | Background utama |
| Gold Arabica | `#C8922A` | Aksen & CTA |
| Cream Parchment | `#F5EDD6` | Teks & highlight |
| Dark Roast Brown | `#2E1503` | Card & surface |

## ✨ Fitur

- ✅ Hero section dengan animasi uap kopi & cangkir floating
- ✅ Filter kategori produk (Kopi Biji, Ready Drink, Pastry, Snack, Alat)
- ✅ Cart drawer dengan add/remove & total harga
- ✅ Navbar sticky dengan transparansi
- ✅ Marquee strip animated
- ✅ Timeline proses perjalanan kopi
- ✅ Testimonial section
- ✅ Newsletter signup
- ✅ Toast notifications
- ✅ Scroll reveal animations
- ✅ Fully responsive (mobile-first)
- ✅ Reduced motion support

## 🚀 Deploy ke GitHub Pages

### Langkah 1: Buat Repository GitHub

1. Buka [github.com](https://github.com) → Login
2. Klik **"New repository"**
3. Nama repo: `kopi-rasa` (atau sesuai keinginan)
4. Pilih **Public**
5. Klik **"Create repository"**

### Langkah 2: Upload File

**Cara A — Via GitHub Web (paling mudah):**
1. Di halaman repo baru, klik **"uploading an existing file"**
2. Drag & drop semua file dan folder ini
3. Klik **"Commit changes"**

**Cara B — Via Git CLI:**
```bash
git init
git add .
git commit -m "🚀 Initial commit — Kopi & Rasa"
git branch -M main
git remote add origin https://github.com/USERNAME/kopi-rasa.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages

1. Di repo → **Settings** → **Pages** (sidebar kiri)
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)**
4. Klik **Save**
5. Tunggu 1–2 menit
6. Website live di: `https://USERNAME.github.io/kopi-rasa`

## 📁 Struktur File

```
kopi-rasa/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## 🛒 Pengembangan Lebih Lanjut

Untuk versi production, pertimbangkan:
- Integrasi payment gateway (Midtrans, Xendit)
- Backend API untuk manajemen produk & order
- Sistem autentikasi user
- Integrasi WhatsApp Business API
- CMS untuk konten produk
