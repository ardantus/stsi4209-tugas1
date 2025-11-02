# STSI4209 - Tugas Praktik 1: Aplikasi Pemesanan Bahan Ajar (Front-End)

Repositori ini berisi implementasi tugas praktik pertama mata kuliah **STSI4209 – Pemrograman Berbasis Web** di Universitas Terbuka. Tugas ini bertujuan untuk mengasah kemampuan dalam membangun antarmuka web interaktif menggunakan **HTML, CSS, dan JavaScript (DOM)** tanpa backend.

## 📌 Deskripsi Tugas

Dibuat sebuah aplikasi website sederhana untuk **pemesanan bahan ajar di UT-Daerah** yang mencakup empat halaman utama:

1. **Halaman Login (`login.html`)**
   - Form login dengan validasi email dan password
   - Pop-up/modal untuk "Lupa Password" dan "Daftar"
   - Alert jika kredensial salah

2. **Dashboard Menu (`dashboard.html`)**
   - Navigasi ke halaman lain:
     - Informasi Bahan Ajar
     - Tracking Pengiriman
     - Laporan (Monitoring Progress DO & Rekap Bahan Ajar)
     - Histori Transaksi
   - Menampilkan salam berdasarkan waktu lokal (pagi/siang/sore)

3. **Tracking Pengiriman (`tracking.html`)**
   - Input nomor Delivery Order (DO)
   - Menampilkan detail pengiriman: nama mahasiswa, status, ekspedisi, tanggal kirim, jenis paket, total pembayaran
   - Simulasi status menggunakan progress bar/tabel/list

4. **Informasi Stok Bahan Ajar (`stok.html`)**
   - Menampilkan data stok dari file `js/data.js` (variabel `dataBahanAjar`)
   - Fitur tambah stok baru secara dinamis menggunakan DOM

## 📁 Struktur Proyek
stsi4209-tugas1/
├── index.html (opsional, bisa redirect ke login.html)
├── login.html
├── dashboard.html
├── tracking.html
├── stok.html
├── assets/
│   └── logo-ut.png
├── css/
│   └── style.css
├── img/
│   ├── default-cover.png
│   ├── kepemimpinan.jpg
│   ├── manajemen_keuangan.jpg
│   ├── mikrobiologi.png
│   ├── paud_perkembangan.png
│   └── pengantar_komunikasi.png
├── js/
│   ├── script.js
│   └── data.js # berisi data dummy (dataBahanAjar)
└── README.md


## 🛠️ Teknologi yang Digunakan

- **HTML5** – Struktur semantik dan valid
- **CSS3** – Styling dengan pendekatan inline, internal, dan eksternal
- **JavaScript (ES5/ES6)** – Manipulasi DOM, validasi form, interaksi UI (modal, alert, dinamika tabel)

## 🎯 Indikator Penilaian

- [x] Struktur HTML semantik & valid  
- [x] Desain antarmuka responsif & menarik  
- [x] Interaktivitas dengan JavaScript DOM  
- [x] Validasi form dan feedback error  
- [x] Modularitas file dan struktur proyek  
- [x] Kreativitas UI/UX tambahan  
- [x] Penjelasan melalui video (terpisah)

## 📚 Referensi

- [W3Schools – Modal](https://www.w3schools.com/howto/howto_css_modals.asp)
- [W3Schools – JavaScript Popup](https://www.w3schools.com/js/js_popup.asp)
- [W3Schools – Dropdown Navbar](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar)
- Sufandi, U. U., dkk. (2021). *Evaluasi UI Prototype Aplikasi SITTA UT*. JANAPATI.
- Sufandi, U. U. (2022). *Analisis Kebutuhan Sistem SITTA UT*. JANAPATI.

---

> **Catatan**: Aplikasi ini bersifat **front-end only**. Tidak ada koneksi ke database atau server backend. Semua data bersifat simulasi/dummy.

© 2025 — Mahasiswa STSI4209, Universitas Terbuka