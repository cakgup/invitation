# Template Undangan Kajian Digital

Template ini dipakai untuk membuat undangan kajian digital berbasis HTML, CSS, dan JavaScript tanpa framework.  
Strukturnya sudah disiapkan agar mudah dipakai ulang untuk acara berikutnya dengan cukup mengubah data acara, teks, foto, dan link penting.

## Tujuan README ini

README ini dibuat agar orang berikutnya bisa:
- cepat tahu file mana yang perlu diubah
- tidak perlu bongkar semua source code
- bisa mengganti acara tanpa merusak layout

## Struktur file yang paling penting

### 1. Konfigurasi acara
File: [src/assets/data/data.js](C:/Users/gufroni/Documents/GitHub/invitation/src/assets/data/data.js)

Ini adalah file utama yang paling sering diubah.

Bagian penting di dalamnya:
- `event.organizer`
- `event.title`
- `event.theme`
- `event.speaker`
- `event.zoom.id`
- `event.zoom.password`
- `event.zoom.link`
- `event.contact`
- `event.phone`
- `time.schedule.year`
- `time.schedule.month`
- `time.schedule.date`
- `time.schedule.day`
- `time.schedule.hours.start`
- `time.schedule.hours.finish`
- `link.calendar`
- `link.virtualBackground`
- `link.presensi`
- `link.materi`
- `audio`
- `api`

## File yang biasa diedit

### 1. Ganti data acara
File: [src/assets/data/data.js](C:/Users/gufroni/Documents/GitHub/invitation/src/assets/data/data.js)

Ubah jika ingin mengganti:
- nama yayasan/penyelenggara
- judul acara
- tema kajian
- pemateri
- jadwal
- Zoom
- kontak WhatsApp
- link tombol tambahan

### 2. Ganti teks statis di halaman
File: [index.html](C:/Users/gufroni/Documents/GitHub/invitation/index.html)

Ubah jika ingin mengganti:
- kalimat pengantar undangan
- judul section
- teks footer
- teks RSVP

### 3. Ganti tampilan / layout
Folder CSS:
- [src/css/welcome.css](C:/Users/gufroni/Documents/GitHub/invitation/src/css/welcome.css)
- [src/css/home.css](C:/Users/gufroni/Documents/GitHub/invitation/src/css/home.css)
- [src/css/time.css](C:/Users/gufroni/Documents/GitHub/invitation/src/css/time.css)
- [src/css/wishas.css](C:/Users/gufroni/Documents/GitHub/invitation/src/css/wishas.css)
- [src/css/footer.css](C:/Users/gufroni/Documents/GitHub/invitation/src/css/footer.css)
- [src/css/mediaQueries.css](C:/Users/gufroni/Documents/GitHub/invitation/src/css/mediaQueries.css)

### 4. Ganti logo, foto, atau audio
Folder aset:
- [src/assets/images](C:/Users/gufroni/Documents/GitHub/invitation/src/assets/images)
- [src/assets/audio](C:/Users/gufroni/Documents/GitHub/invitation/src/assets/audio)

File gambar yang saat ini dipakai:
- `logo-img-all-putih.png`
- `speaker.png`

## Urutan edit paling aman saat membuat acara baru

Ikuti urutan ini agar perubahan tidak tercecer:

1. Ubah data inti acara di `src/assets/data/data.js`
2. Ganti foto dan logo di `src/assets/images`
3. Ganti audio jika perlu di `src/assets/audio`
4. Cek teks statis di `index.html`
5. Uji tombol-tombol penting:
   - buka undangan
   - tambah ke kalender
   - akses kegiatan
   - bergabung via Zoom
   - tombol WhatsApp
   - tombol RSVP

## Bagian yang wajib dicek sebelum publish

### Data acara
Pastikan benar:
- judul acara
- tema
- nama pemateri
- tanggal
- jam
- ID Zoom
- password Zoom
- nomor WhatsApp PIC

### Link
Pastikan tombol berikut tidak lupa diganti:
- `link.calendar`
- `link.virtualBackground`
- `link.presensi`
- `link.materi`
- `event.zoom.link`

Catatan:
- Saat ini tombol tambahan boleh memakai `"#"` sebagai placeholder.
- Sebelum publish final, sebaiknya ganti semua `"#"` dengan link sebenarnya.

### RSVP / komentar
Pastikan `api` mengarah ke Google Apps Script yang aktif:
- `data.api`

Kalau `api` belum aktif:
- form RSVP bisa gagal kirim
- komentar tidak akan tersimpan

## Contoh field yang biasanya diganti

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

## Cara menjalankan

Template ini tidak butuh build tool.

Pilihan menjalankan:

1. Buka langsung file [index.html](C:/Users/gufroni/Documents/GitHub/invitation/index.html) di browser
2. Atau gunakan Live Server di VS Code agar lebih nyaman saat edit

## Catatan penting layout

Beberapa layout dibuat khusus untuk alur e-invitation:
- welcome screen sebagai pembuka
- section `home` sebagai ringkasan acara
- section `time` sebagai akses Zoom dan tombol aksi
- section `wishas` sebagai RSVP dan pertanyaan

Jika ingin menambah section baru:
- usahakan tetap menjaga urutan informasi dari yang paling penting ke yang paling akhir
- hindari section yang terlalu panjang tanpa CTA

## Checklist cepat sebelum dibagikan

- judul acara sudah benar
- tema sudah benar
- pemateri sudah benar
- tanggal dan jam sudah benar
- Zoom sudah benar
- WhatsApp PIC sudah benar
- tombol tambahan sudah berisi link
- form RSVP sudah diuji
- tampilan mobile sudah dicek
- welcome screen bisa dibuka dan tombol `Buka Undangan` berjalan normal

## Ringkasan untuk admin non-teknis

Kalau hanya ingin mengganti isi acara, fokus saja ke file ini:

- [src/assets/data/data.js](C:/Users/gufroni/Documents/GitHub/invitation/src/assets/data/data.js)
- [index.html](C:/Users/gufroni/Documents/GitHub/invitation/index.html)
- [src/assets/images](C:/Users/gufroni/Documents/GitHub/invitation/src/assets/images)

Biasanya itu sudah cukup tanpa perlu menyentuh file JavaScript atau CSS lain.
