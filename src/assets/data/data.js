export const data = {
    event: {
        organizer: 'Yayasan Indonesia Maju Gemilang',
        title: 'Kajian Wawasan Edisi 05',
        theme: 'Fiqih Qurban, Dari Hukum Hingga Pelaksanaan',

        speaker: {
            role: 'Pemateri',
            name: 'Ustadz M. Nur Khozin',
            credentials: 'Lc., MA., M.H.I., Al Hafidz',
            institution: 'Pembina Yayasan El Tartil Indonesia',
            bio: 'Ulama hafidz Qur\'an dengan spesialisasi Fiqih & Ushul Fiqih. Lulusan Universitas Al-Azhar, Mesir.',
            image: './src/assets/images/speaker.png'
        },

        mc: {
            role: 'Master of Ceremony',
            name: 'Muhammad Hafidh',
            credentials: 'S.Pd.',
            institution: 'Anggota Yayasan Indonesia Maju Gemilang',
            bio: 'Moderator dan pembawa acara kajian rutin Yayasan Indonesia Maju Gemilang.',
            image: './src/assets/images/mc.png'
        },

        tilawah: {
            role: 'Pembaca Tilawah',
            name: 'Ahmad Ridho',
            credentials: 'Hafidz Qur\'an',
            institution: 'Anggota Yayasan Indonesia Maju Gemilang',
            bio: 'Hafidz 30 juz, aktif sebagai qari dalam berbagai kegiatan keislaman.',
            image: './src/assets/images/tilawah.png'
        },

        zoom: {
            id: '7586 663 274',
            password: 'kelasku',
            link: 'https://ui-ac-id.zoom.us/my/kelasku'
        },

        contact: 'CakGup',
        phone: '085717119171',
        closing: 'Semoga kajian ini dapat menjadi sarana untuk memperdalam ilmu dan mempersiapkan pelaksanaan ibadah qurban dengan lebih baik sesuai tuntunan syariat.'
    },

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

    link: {
        calendar: 'https://calendar.google.com/calendar/r/eventedit?text=Kajian+Wawasan+Edisi+05+-+Fiqih+Qurban&dates=20260621T153000/20260621T173000&details=Fiqih+Qurban,+Dari+Hukum+Hingga+Pelaksanaan',
        map: 'https://ui-ac-id.zoom.us/my/kelasku',
    },

    galeri: [
        { id: 1, image: './src/assets/images/1.png' },
        { id: 2, image: './src/assets/images/2.png' },
        { id: 3, image: './src/assets/images/3.png' },
        { id: 4, image: './src/assets/images/4.png' },
        { id: 5, image: './src/assets/images/5.png' }
    ],

    bank: [],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxfcj0KBMClEz4BQsjd9yPoJAOSQZ8TmCcLEEnjxmfRsb6TScp9j3g1kAKkscLZR4Fa/exec',

    navbar: [
        { id: 1, teks: 'Home',    icon: 'bx bxs-home-heart',            path: '#home'   },
        { id: 2, teks: 'Pemateri', icon: 'bx bxs-user-badge',           path: '#bride'  },
        { id: 3, teks: 'Jadwal',  icon: 'bx bxs-calendar-check',        path: '#time'   },
        { id: 4, teks: 'Ucapan',  icon: 'bx bxs-message-rounded-dots',  path: '#wishas' },
    ],
}
