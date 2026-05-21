# Undangan Kajian Wawasan — Yayasan Indonesia Maju Gemilang

<div align="center">

**Undangan Digital Kajian Islami yang Elegan dan Modern**

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-cakgup.github.io-2d9375?style=for-the-badge&logo=github)](https://cakgup.github.io/invitation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## ✨ Tentang Proyek

Template undangan digital islami premium untuk **Yayasan Indonesia Maju Gemilang**, dirancang dengan estetika *Islamic Modern* — memadukan palet warna **Hijau Teal** dan **Emas** yang elegan.

Undangan ini awalnya dibuat untuk **Kajian Wawasan Edisi 05** dengan tema:

> 📖 *Fiqih Qurban, Dari Hukum Hingga Pelaksanaan*

**Created by [CakGup](https://github.com/cakgup)** — Dipersembahkan untuk Yayasan Indonesia Maju Gemilang.

---

## 🎯 Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🌟 **Splash Screen** | Layar pembuka elegan dengan animasi pulsing ring |
| ⏳ **Countdown Live** | Hitung mundur real-time menuju acara |
| 👤 **Profil Tim Acara** | Kartu profil wedding-style: Pemateri, MC & Pembaca Tilawah |
| 📅 **Info Jadwal & Zoom** | Detail waktu + akses Zoom Meeting lengkap |
| 🖼️ **Galeri Foto** | Slideshow dokumentasi kegiatan yayasan |
| 📝 **Form Konfirmasi** | RSVP kehadiran + kolom komentar |
| 🔗 **URL Parameter** | Kirim undangan personal via `?to=NamaTamu` |
| 🎵 **Musik Latar** | Tombol play/pause musik pengiring |
| 📱 **Responsif** | Optimal di mobile, tablet, dan desktop |
| ✨ **Animasi AOS** | Scroll animations yang halus di setiap section |

---

## 🗂️ Struktur Proyek

```
invitation/
├── index.html                    # Halaman utama
├── .nojekyll                     # GitHub Pages — nonaktifkan Jekyll
├── public/
│   └── favicon.ico
└── src/
    ├── main.js                   # Entry point
    ├── assets/
    │   ├── audio/
    │   │   └── wedding.mp3       # Musik latar
    │   ├── data/
    │   │   └── data.js           # ⭐ Konfigurasi utama undangan
    │   ├── images/
    │   │   ├── speaker.png       # Foto pemateri
    │   │   ├── mc.png            # Foto MC
    │   │   ├── tilawah.png       # Foto pembaca tilawah
    │   │   └── 1-5.png           # Foto galeri kegiatan
    │   └── styles/
    │       └── global.css        # CSS global & design tokens
    ├── css/
    │   ├── welcome.css           # Splash screen
    │   ├── home.css              # Hero + countdown
    │   ├── bride.css             # Profil pemateri
    │   ├── time.css              # Jadwal & Zoom
    │   ├── galeri.css            # Galeri foto
    │   ├── wishas.css            # Konfirmasi & komentar
    │   ├── footer.css            # Penutup
    │   ├── navbar.css            # Navigasi bawah
    │   └── mediaQueries.css      # Responsif
    ├── js/
    │   ├── welcome.js            # Splash screen logic
    │   ├── home.js               # Countdown logic
    │   ├── bride.js              # Render kartu profil
    │   ├── time.js               # Jadwal & Zoom info
    │   ├── galeri.js             # Slideshow galeri
    │   ├── wishas.js             # Form & komentar
    │   └── navbar.js             # Navigasi
    ├── services/
    │   └── comentarService.js    # API komentar (Google Sheets)
    └── utils/
        └── helper.js             # Fungsi utilitas
```

---

## 🚀 Cara Penggunaan

### 1. Clone & Buka

```bash
git clone https://github.com/cakgup/invitation.git
cd invitation
```

Buka `index.html` langsung di browser, atau gunakan Live Server (VS Code).

---

### 2. Kustomisasi Data Acara

Edit file **`src/assets/data/data.js`** untuk menyesuaikan informasi acara:

```javascript
export const data = {
    event: {
        organizer: 'Nama Yayasan / Organisasi',
        title: 'Nama Acara',
        theme: 'Tema Acara',

        // Profil pemateri
        speaker: {
            role: 'Pemateri',
            name: 'Nama Pemateri',
            credentials: 'Gelar, Lc., MA.',
            institution: 'Asal Institusi',
            bio: 'Biografi singkat pemateri.',
            image: './src/assets/images/speaker.png'
        },

        // Profil MC
        mc: {
            role: 'Master of Ceremony',
            name: 'Nama MC',
            // ...
        },

        // Akses Zoom
        zoom: {
            id: 'XXXX XXX XXX',
            password: 'password',
            link: 'https://zoom.us/j/...'
        },
    },

    // Tanggal & waktu acara
    time: {
        schedule: {
            year: '2026',
            month: 'Juni',   // Nama bulan dalam Bahasa Indonesia
            date: '21',
            day: 'Ahad',
            hours: { start: '15.30', finish: '17.30' }
        }
    },

    // Link kalender Google (opsional)
    link: {
        calendar: 'https://calendar.google.com/...',
    },
}
```

---

### 3. Ganti Foto

Ganti file gambar di `src/assets/images/`:

| File | Keterangan |
|------|-----------|
| `speaker.png` | Foto pemateri utama |
| `mc.png` | Foto Master of Ceremony |
| `tilawah.png` | Foto pembaca tilawah |
| `1.png` – `5.png` | Foto galeri dokumentasi kegiatan |

> **Tip:** Gunakan foto persegi (1:1) dengan resolusi minimal 400×400px untuk hasil terbaik.

---

### 4. Kustomisasi Warna

Edit variabel di **`src/assets/styles/global.css`**:

```css
:root {
    --primary:       #1a6b5a;   /* Hijau utama */
    --primary-dark:  #0f4538;   /* Hijau tua */
    --gold:          #c9a84c;   /* Emas */
    --gold-light:    #e8c87a;   /* Emas terang */
    --cream:         #fdf9f0;   /* Krem latar */
}
```

---

### 5. Kirim Undangan Personal

Tambahkan parameter `?to=NamaTamu` di URL untuk menampilkan nama tamu secara otomatis:

```
https://cakgup.github.io/invitation/?to=Bapak+Ahmad
```

---

### 6. Koneksi Form ke Google Sheets

Edit `data.api` di `data.js` dengan URL Google Apps Script Anda:

```javascript
api: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
```

Panduan setup Google Sheets API: [Google Apps Script Web App](https://developers.google.com/apps-script/guides/web)

---

## 🛠️ Teknologi

| Teknologi | Kegunaan |
|-----------|----------|
| **HTML5** | Struktur semantik |
| **Vanilla CSS** | Styling & animasi (tanpa framework) |
| **ES6 Modules** | Modular JavaScript |
| **AOS** | Animate On Scroll |
| **Boxicons** | Ikon vector |
| **Google Fonts** | Amiri · Outfit · Noto Naskh Arabic |

---

## 📱 Tampilan

| Section | Deskripsi |
|---------|-----------|
| 🎴 **Splash Screen** | Layar pembuka dengan kotak event glassmorphism |
| 🏠 **Home** | Countdown + kartu info acara + tombol kalender |
| 👤 **Pemateri** | 3 kartu profil (Pemateri · MC · Tilawah) dengan foto |
| 📜 **Hadist** | Kutipan motivasi + statistik acara |
| 📅 **Jadwal** | 2 kartu: waktu acara + akses Zoom |
| 🖼️ **Galeri** | Slideshow foto kegiatan + modal semua foto |
| 📝 **Konfirmasi** | Form RSVP + daftar komentar peserta |
| 🔚 **Footer** | Penutup dengan wassalam & kredit |

---

## 📄 Lisensi

Template ini dibuat untuk keperluan internal **Yayasan Indonesia Maju Gemilang**.  
Bebas digunakan dan dikembangkan untuk kegiatan dakwah & pendidikan Islam.

---

<div align="center">

Made with ❤️ by **[CakGup](https://github.com/cakgup)**

*Dipersembahkan untuk Yayasan Indonesia Maju Gemilang*

</div>
