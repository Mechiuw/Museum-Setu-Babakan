# Museum Setu Babakan — Placeholder Website Template

Template website statis (HTML5, CSS3, Vanilla JS) untuk **Museum Setu Babakan** sebagai media informasi, edukasi, dan dokumentasi budaya Betawi. Dirancang secara modular agar mudah diisi dengan aset foto dan teks final.

## Struktur Folder
- `index.html` — Halaman utama (Homepage).
- `pages/` — Halaman sekunder (`about.html`, `culture.html`, `collection.html`, `gallery.html`, `visitor-info.html`).
- `css/` — Styling modular (`style.css` untuk variabel & base, `components.css` untuk elemen UI & placeholder visual, `responsive.css` untuk breakpoint tablet/mobile).
- `js/` — Interaksi modular (`data.js` pusat data gambar/teks berulang, `navigation.js` menu & header, `gallery.js` filter & lightbox, `interactions.js` animasi scroll, `main.js` inisialisasi).
- `assets/images/` — Direktori gambar yang dipetakan sesuai folder Google Drive:
  - `acara-adat/` -> Folder Drive: *Acara adat*
  - `logo-elemen/` -> Folder Drive: *Logo/elemen tambahan*
  - `makanan/` -> Folder Drive: *Makanan*
  - `museum/` -> Folder Drive: *Museum Setu Babakan*
  - `pakaian-adat/` -> Folder Drive: *Pakaian adat*
  - `tarian/` -> Folder Drive: *Tarian*

## Cara Menjalankan Website Secara Lokal
1. Buka folder `museum-setu-babakan` di VS Code.
2. Gunakan ekstensi **Live Server** (klik kanan pada `index.html` -> *Open with Live Server*), atau jalankan server lokal sederhana melalui terminal:
   ```bash
   npx serve .