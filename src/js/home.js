import {data} from "../assets/data/data.js";
import {monthNameToNumber} from "../utils/helper.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const figureElement = homeContainer.querySelector('figure');
    const speakerElement = homeContainer.querySelector('.home-speaker');
    const metaElement = homeContainer.querySelector('.home-meta');
    const dateElement = homeContainer.querySelector('h3');
    const homeTime = homeContainer.querySelector('.home-time');
    const calendarAnchor = homeContainer.querySelector('.home-actions a');

    const generateFigureContent = ({event}) => `
        <div class="home-event-card">
            <p class="organizer">${event.organizer}</p>
            <p class="theme">${event.theme}</p>
        </div>`;

    const generateDateContent = ({time}) => {
        const {year, month, date, day, hours} = time.schedule;
        const monthNum = String(monthNameToNumber(month)).padStart(2, '0');
        const dateStr = String(date).padStart(2, '0');
        return `
        <time datetime="${year}-${monthNum}-${dateStr}">
            ${day}, ${date} ${month} ${year} | ${hours.start}-${hours.finish} WIB
        </time>`;
    };

    const generateSpeakerContent = (speaker) => `
        <article class="home-speaker-card">
            <div class="home-speaker-photo-ring">
                <img src="${speaker.image}" alt="${speaker.name}" loading="lazy">
            </div>
            <div class="home-speaker-copy">
                <span class="home-speaker-role">${speaker.role}</span>
                <p class="home-speaker-name">${speaker.name}</p>
                <p class="home-speaker-creds">${speaker.credentials}</p>
            </div>
        </article>`;

    const countdownMarkup = (d, h, m, s) => `
        <div><p>${d}<br><span>Hari</span></p></div>
        <div><p>${h}<br><span>Jam</span></p></div>
        <div><p>${m}<br><span>Menit</span></p></div>
        <div><p>${s}<br><span>Detik</span></p></div>`;

    const updateCountdown = (endTime) => {
        const dist = endTime - Date.now();
        if (dist <= 0) {
            homeTime.innerHTML = countdownMarkup(0, 0, 0, 0);
            homeTime.insertAdjacentHTML(
                'beforeend',
                '<p class="event-live" style="width:100%;font-size:0.75rem;color:var(--gold-light);margin-top:0.4rem;letter-spacing:0.08em;">SEDANG BERLANGSUNG</p>'
            );
            return;
        }

        const d = Math.floor(dist / 864e5);
        const h = Math.floor((dist % 864e5) / 36e5);
        const m = Math.floor((dist % 36e5) / 6e4);
        const s = Math.floor((dist % 6e4) / 1e3);
        homeTime.innerHTML = countdownMarkup(d, h, m, s);
    };

    const startCountdown = ({schedule}) => {
        const {year, month, date, hours} = schedule;
        const monthNum = String(monthNameToNumber(month)).padStart(2, '0');
        const dateStr = String(date).padStart(2, '0');
        const [startH, startM] = hours.start.split('.').map(Number);
        const endTime = new Date(
            `${year}-${monthNum}-${dateStr}T${String(startH).padStart(2, '0')}:${String(startM).padStart(2, '0')}:00`
        );

        updateCountdown(endTime);
        setInterval(() => updateCountdown(endTime), 1000);
    };

    const {event, time, link} = data;
    figureElement.innerHTML = generateFigureContent({event});
    if (speakerElement) speakerElement.innerHTML = generateSpeakerContent(event.speaker);
    if (metaElement) {
        metaElement.innerHTML = '';
        metaElement.hidden = true;
    }
    dateElement.innerHTML = generateDateContent({time});
    calendarAnchor.href = link.calendar;
    startCountdown(time);
};
