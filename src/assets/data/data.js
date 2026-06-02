export const data = {
    // Informasi inti acara yang tampil di welcome screen, ringkasan, dan section utama.
    event: {
        // Nama penyelenggara.
        organizer: 'Yayasan Indonesia Maju Gemilang',
        // Judul acara / edisi acara.
        title: 'Kajian Wawasan Edisi 05',
        // Tema utama kajian.
        theme: 'Fiqih Qurban, Dari Hukum Hingga Pelaksanaan',

        // Profil pemateri utama yang tampil pada section ringkasan.
        speaker: {
            role: 'Pemateri',
            name: 'Ustadz M. Nur Khozin',
            credentials: 'Lc., MA., M.H.I., Al Hafidz',
            institution: 'Pembina Yayasan El Tartil Indonesia',
            bio: 'Ulama hafidz Qur\'an dengan spesialisasi Fiqih & Ushul Fiqih. Lulusan Universitas Al-Azhar, Mesir.',
            image: './src/assets/images/speaker.png'
        },

        // Profil MC cadangan jika nanti ingin ditampilkan kembali.
        mc: {
            role: 'Master of Ceremony',
            name: 'Muhammad Hafidh',
            credentials: 'S.Pd.',
            institution: 'Anggota Yayasan Indonesia Maju Gemilang',
            bio: 'Moderator dan pembawa acara kajian rutin Yayasan Indonesia Maju Gemilang.',
            image: './src/assets/images/mc.png'
        },

        // Profil pembaca tilawah cadangan jika nanti ingin ditampilkan kembali.
        tilawah: {
            role: 'Pembaca Tilawah',
            name: 'Ahmad Ridho',
            credentials: 'Hafidz Qur\'an',
            institution: 'Anggota Yayasan Indonesia Maju Gemilang',
            bio: 'Hafidz 30 juz, aktif sebagai qari dalam berbagai kegiatan keislaman.',
            image: './src/assets/images/tilawah.png'
        },

        // Informasi akses Zoom yang tampil di section "Akses Kegiatan".
        zoom: {
            id: '7586 663 274',
            password: 'kelasku',
            link: 'https://ui-ac-id.zoom.us/my/kelasku'
        },

        // Kontak PIC / narahubung WhatsApp.
        contact: 'Coach Halim',
        phone: '08123219282',

        // Catatan penutup internal bila suatu saat ingin dipakai lagi.
        closing: 'Semoga kajian ini dapat menjadi sarana untuk memperdalam ilmu dan mempersiapkan pelaksanaan ibadah qurban dengan lebih baik sesuai tuntunan syariat.'
    },

    // Jadwal acara untuk countdown dan tampilan waktu utama.
    time: {
        schedule: {
            year: '2026',
            month: 'Juni',
            date: '21',
            day: 'Ahad',
            hours: {
                start: '15.30',
                finish: '17.30'
            }
        }
    },

    // Kumpulan link aksi yang dipakai di beberapa tombol.
    link: {
        // Link tambah ke Google Calendar.
        calendar: 'https://calendar.google.com/calendar/r/eventedit?text=Kajian+Wawasan+Edisi+05+-+Fiqih+Qurban&dates=20260621T153000/20260621T173000&details=Fiqih+Qurban,+Dari+Hukum+Hingga+Pelaksanaan',

        // Link utama acara. Saat ini sama dengan link Zoom.
        map: 'https://ui-ac-id.zoom.us/my/kelasku',

        // Ganti "#" dengan link final saat aset/file sudah siap.
        virtualBackground: '#',
        presensi: '#',
        materi: '#',
    },

    // Galeri cadangan jika section galeri diaktifkan lagi nanti.
    galeri: [
        { id: 1, image: './src/assets/images/1.png' },
        { id: 2, image: './src/assets/images/2.png' },
        { id: 3, image: './src/assets/images/3.png' },
        { id: 4, image: './src/assets/images/4.png' },
        { id: 5, image: './src/assets/images/5.png' }
    ],

    // Belum dipakai saat ini, disimpan untuk perluasan fitur.
    bank: [],

    // Audio background yang diputar setelah undangan dibuka.
    audio: './src/assets/audio/wedding.mp3',

    // Endpoint RSVP / komentar.
    api: 'https://script.google.com/macros/s/AKfycbxfcj0KBMClEz4BQsjd9yPoJAOSQZ8TmCcLEEnjxmfRsb6TScp9j3g1kAKkscLZR4Fa/exec',

    // Navigasi bawah halaman.
    navbar: [
        { id: 1, teks: 'Ringkas',  icon: 'bx bxs-home-heart',           path: '#home'   },
        { id: 2, teks: 'Jadwal',   icon: 'bx bxs-calendar-check',       path: '#time'   },
        { id: 3, teks: 'RSVP',     icon: 'bx bxs-message-rounded-dots', path: '#wishas' },
    ],
}
