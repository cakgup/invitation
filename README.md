# Undangan Kajian Digital

<p align="center">
  <img src="src/assets/images/logo-img-all-putih.png" alt="Logo Yayasan Indonesia Maju Gemilang" width="140">
</p>

<p align="center">
  <strong>Template undangan kajian online berbasis HTML, CSS, dan JavaScript</strong><br>
  Ringan, responsif, mudah dikustomisasi, dan siap dipublikasikan sebagai undangan digital.
</p>

<p align="center">
  <a href="https://cakgup.github.io/invitation/">
    <img src="https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github" alt="GitHub Pages">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg" alt="License GPL-3.0">
  </a>
  <img src="https://img.shields.io/badge/Template-E--Invitation-2E7D32" alt="Template E-Invitation">
  <img src="https://img.shields.io/badge/Mobile-Responsive-1E88E5" alt="Mobile Responsive">
</p>

---

## ✦ Bismillahirrahmanirrahim

Repository ini adalah ikhtiar kecil untuk memudahkan penyelenggara kajian dalam membagikan informasi acara secara rapi, ringkas, dan mudah diakses dari perangkat apa pun.<br>
Semoga template ini menjadi wasilah kebaikan: memudahkan hadirnya ilmu, memperluas manfaat majelis, dan membantu informasi tersampaikan dengan baik.

> _“Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga.”_<br>
> H.R. Muslim no. 2699

---

## 📌 Tentang Template

**Undangan Kajian Digital** adalah template web statis untuk undangan acara kajian online. Konten utama acara disimpan dalam satu file data sehingga mudah diperbarui untuk edisi berikutnya tanpa perlu mengubah banyak bagian source code.

Template ini cocok untuk:

- undangan kajian online via Zoom;
- informasi acara yayasan, komunitas, atau majelis;
- halaman RSVP dan pertanyaan peserta;
- publikasi acara sederhana melalui GitHub Pages atau hosting statis lain;
- penggunaan ulang dengan mengganti data acara, foto pemateri, audio, dan link pendukung.

---

## ✨ Fitur Utama

| Fitur | Keterangan |
|---|---|
| 📨 Welcome Screen | Halaman pembuka sebelum peserta masuk ke undangan |
| 🕌 Ringkasan Acara | Menampilkan penyelenggara, judul kajian, tema, pemateri, tanggal, dan jam |
| 📅 Tambah ke Kalender | Tombol cepat untuk memasukkan jadwal acara ke Google Calendar |
| 🎥 Akses Zoom | Menampilkan ID, password, dan tombol bergabung via Zoom |
| 🔗 Link Pendukung | Area untuk presensi, materi, dan virtual background |
| 💬 RSVP & Pertanyaan | Form konfirmasi kehadiran serta komentar/pertanyaan peserta |
| 🎵 Audio Latar | Mendukung audio pembuka melalui file `nasyid.mp3` |
| 📱 Responsif | Tampilan disesuaikan untuk layar mobile dan desktop |

---

## 🗂️ Struktur Repository

```text
invitation/
├── index.html
├── src/
│   ├── main.js
│   ├── assets/
│   │   ├── audio/
│   │   │   └── nasyid.mp3
│   │   ├── data/
│   │   │   └── data.js
│   │   ├── images/
│   │   │   ├── logo-img-all-putih.png
│   │   │   └── speaker.png
│   │   └── styles/
│   │       └── global.css
│   ├── css/
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── mediaQueries.css
│   │   ├── navbar.css
│   │   ├── time.css
│   │   ├── welcome.css
│   │   └── wishas.css
│   ├── js/
│   │   ├── home.js
│   │   ├── navbar.js
│   │   ├── time.js
│   │   ├── welcome.js
│   │   └── wishas.js
│   ├── services/
│   │   └── comentarService.js
│   └── utils/
│       └── helper.js
├── .nojekyll
├── LICENSE
└── README.md
```

Keterangan singkat:

| File/Folder | Fungsi |
|---|---|
| `index.html` | Entry point halaman undangan |
| `src/assets/data/data.js` | Sumber konfigurasi acara, jadwal, Zoom, link, audio, dan API |
| `src/main.js` | Inisialisasi semua komponen halaman |
| `src/js/` | Logika section welcome, navigasi, home, jadwal, dan RSVP |
| `src/css/` | Styling per section halaman |
| `src/assets/images/` | Logo dan foto pemateri |
| `src/assets/audio/nasyid.mp3` | Audio latar undangan |
| `src/services/comentarService.js` | Service untuk mengambil/mengirim komentar ke API |
| `.nojekyll` | Menjaga path asset tetap aman saat deploy ke GitHub Pages |

---

## 🚀 Menjalankan Secara Lokal

Disarankan menjalankan project melalui local server agar import JavaScript module dan asset bekerja stabil.

### Opsi 1 — Python

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

### Opsi 2 — Node.js

```bash
npx -y serve .
```

Lalu buka:

```text
http://localhost:3000
```

---

## 🌐 Deploy

Template ini dapat dipublikasikan ke:

- GitHub Pages
- Vercel
- Cloudflare Pages
- Netlify

Untuk GitHub Pages:

1. Push semua file ke branch `main`.
2. Buka `Settings` repository.
3. Masuk ke menu `Pages`.
4. Pilih source `Deploy from a branch`.
5. Pilih branch `main` dan folder `/root`.
6. Simpan, lalu tunggu URL aktif.

Contoh URL:

```text
https://cakgup.github.io/invitation/
```

---

## 🛠️ Kustomisasi Konten

### 1. Memperbarui data acara

Edit file berikut:

```text
src/assets/data/data.js
```

Bagian yang paling sering diganti:

| Field | Fungsi |
|---|---|
| `event.organizer` | Nama penyelenggara |
| `event.title` | Judul atau edisi kajian |
| `event.theme` | Tema kajian |
| `event.speaker` | Data pemateri dan foto |
| `event.zoom` | ID, password, dan link Zoom |
| `event.contact` | Nama PIC atau admin |
| `event.phone` | Nomor WhatsApp PIC |
| `time.schedule` | Tanggal, hari, bulan, tahun, dan jam acara |
| `link.calendar` | Link Google Calendar |
| `link.virtualBackground` | Link virtual background |
| `link.presensi` | Link presensi tambahan |
| `link.materi` | Link materi kajian |
| `audio` | Path audio latar |
| `api` | Endpoint Google Apps Script untuk RSVP/komentar |

Contoh sederhana:

```js
event: {
  organizer: 'Nama Yayasan atau Komunitas',
  title: 'Kajian Wawasan Edisi 06',
  theme: 'Tema Kajian Baru',
  zoom: {
    id: '123 456 789',
    password: 'kajian',
    link: 'https://zoom.us/j/123456789'
  },
  contact: 'Nama PIC',
  phone: '081234567890'
}
```

### 2. Menyesuaikan teks halaman

Edit file berikut:

```text
index.html
```

Biasanya digunakan untuk mengubah:

- kalimat pengantar undangan;
- judul section;
- teks footer;
- redaksi RSVP dan pertanyaan;
- meta description dan Open Graph.

### 3. Mengganti logo dan foto pemateri

Edit atau ganti file di folder berikut:

```text
src/assets/images/
```

File yang saat ini digunakan:

- `logo-img-all-putih.png`
- `speaker.png`

### 4. Mengganti audio latar

Audio latar saat ini berada di:

```text
src/assets/audio/nasyid.mp3
```

Jika ingin mengganti audio, simpan file baru di folder `src/assets/audio/`, lalu ubah field `audio` pada `src/assets/data/data.js`.

### 5. Menyesuaikan tema visual

Styling utama berada di:

```text
src/assets/styles/global.css
src/css/
```

Gunakan `global.css` untuk pengaturan dasar, lalu sesuaikan file CSS per section jika ingin mengubah tampilan lebih spesifik.

---

## 🧪 Checklist Sebelum Publish

- [ ] Judul acara, tema, dan nama pemateri sudah benar
- [ ] Tanggal, hari, bulan, tahun, dan jam acara sudah sesuai
- [ ] ID Zoom, password, dan link Zoom sudah diuji
- [ ] Nomor WhatsApp PIC sudah benar
- [ ] Link Google Calendar sudah sesuai jadwal acara
- [ ] Link virtual background, presensi, dan materi tidak masih placeholder `#`
- [ ] Foto pemateri dan logo tampil dengan baik
- [ ] Audio `nasyid.mp3` dapat diputar setelah tombol undangan dibuka
- [ ] Form RSVP berhasil mengirim ke endpoint `api`
- [ ] Komentar/pertanyaan peserta tampil kembali di halaman
- [ ] Tampilan mobile tetap rapi di layar kecil
- [ ] Tidak ada error penting di browser console

---

## 🧩 Troubleshooting

### Audio tidak berbunyi

- pastikan file audio tersedia di `src/assets/audio/nasyid.mp3`;
- pastikan field `audio` di `src/assets/data/data.js` mengarah ke path yang benar;
- beberapa browser baru mengizinkan audio berjalan setelah ada interaksi user, jadi coba klik tombol `Buka Undangan` terlebih dahulu.

### Tombol Zoom atau link pendukung tidak sesuai

- cek bagian `event.zoom` pada `src/assets/data/data.js`;
- pastikan `link.virtualBackground`, `link.presensi`, dan `link.materi` sudah diganti dari placeholder `#`;
- reload halaman setelah perubahan tersimpan.

### RSVP atau komentar gagal terkirim

- pastikan field `api` mengarah ke Google Apps Script yang aktif;
- cek permission deployment Apps Script;
- buka browser console untuk melihat pesan error dari request.

### Tampilan berubah setelah ganti gambar

- pastikan ukuran gambar tidak terlalu besar;
- gunakan nama file dan ekstensi yang sama jika tidak ingin mengubah path;
- cek kembali CSS section terkait di folder `src/css/`.

---

## 🔐 Catatan Penggunaan

- Gunakan template ini untuk menyampaikan informasi kajian secara tertib dan mudah dipahami.
- Hindari memasukkan data pribadi sensitif ke repository publik.
- Jika menggunakan nomor WhatsApp PIC, pastikan nomor tersebut memang disiapkan untuk menerima konfirmasi peserta.
- Jika materi atau presensi belum siap, biarkan link sebagai placeholder sementara dan ganti sebelum publish final.

---

## 🛠️ Teknologi

| Teknologi | Fungsi |
|---|---|
| HTML | Struktur halaman |
| CSS | Tampilan visual dan responsive layout |
| JavaScript | Interaksi halaman dan render data |
| Google Apps Script | Endpoint RSVP dan komentar |
| AOS | Animasi saat scroll |
| Boxicons | Ikon tombol dan navigasi |

---

## 📜 Lisensi

Repository ini menggunakan lisensi **GNU General Public License v3.0 (GPL-3.0)**.<br>
Lihat detail pada file [LICENSE](LICENSE).

---

<p align="center">
  <strong>Dibuat untuk memudahkan undangan ilmu, dirawat dengan amanah, dan dibagikan untuk kemaslahatan.</strong>
</p>
