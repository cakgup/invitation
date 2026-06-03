export const data = {
    // Informasi inti acara yang tampil di welcome screen, ringkasan, dan section utama.
    event: {
        organizer: 'Yayasan Indonesia Maju Gemilang',
        title: 'Kajian Wawasan Edisi 05',
        theme: 'Fiqih Qurban, Dari Hukum Hingga Pelaksanaan',

        speaker: {
            role: 'Pemateri',
            name: 'Ustadz M. Nur Khozin',
            credentials: 'Lc., MA., M.H.I., Al Hafidz',
            image: './src/assets/images/speaker.png'
        },

        zoom: {
            id: '7586 663 274',
            password: 'kelasku',
            link: 'https://ui-ac-id.zoom.us/my/kelasku'
        },

        contact: 'Coach Halim',
        phone: '08123219282',
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
        virtualBackground: '#',
        presensi: '#',
        materi: '#',
    },

    audio: './src/assets/audio/nasyid.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxfcj0KBMClEz4BQsjd9yPoJAOSQZ8TmCcLEEnjxmfRsb6TScp9j3g1kAKkscLZR4Fa/exec',

    navbar: [
        { id: 1, teks: 'Ringkas',  icon: 'bx bxs-home-heart',           path: '#home'   },
        { id: 2, teks: 'Jadwal',   icon: 'bx bxs-calendar-check',       path: '#time'   },
        { id: 3, teks: 'RSVP',     icon: 'bx bxs-message-rounded-dots', path: '#wishas' },
    ],
}
