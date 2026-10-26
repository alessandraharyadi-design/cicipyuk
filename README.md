# CicipYuk

Situs ulasan makanan dan restoran Jakarta (statis, tanpa backend). Tugas Search Engine Marketing.

## Halaman
index.html (beranda), explore.html (cari + filter), restoran.html?id=... (detail), tulis-ulasan.html, profil.html

## Cara kerja
- Data restoran ada di `assets/app.js` (array `D`) dan masih contoh. Ganti dengan data asli.
- Ulasan, favorit, dan nama disimpan di `localStorage` browser masing-masing pengunjung.

## Pasang di GitHub Pages
1. Ganti semua `USERNAME` di `sitemap.xml` dan `robots.txt` dengan username GitHub kamu.
2. Buat repository `cicipyuk`, upload semua file (isi folder ini, bukan zip-nya).
3. Settings > Pages > Source: branch `main`, folder `/ (root)`.
4. Situs aktif di `https://USERNAME.github.io/cicipyuk/`. Daftarkan di Google Search Console dan kirim `sitemap.xml`.
