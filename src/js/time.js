import {data} from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [scheduleDiv, zoomDiv] = timeContainer.querySelectorAll('.time-grid > div');
    const mapLink = timeContainer.querySelector('a');
    const zoomPara = timeContainer.querySelector('.time-link-note');

    const {schedule} = data.time;
    const {zoom} = data.event;

    scheduleDiv.innerHTML = `
        <h3>Jadwal Kajian</h3>
        <p>
            <strong>${schedule.day}, ${schedule.date} ${schedule.month} ${schedule.year}</strong>
        </p>
        <p>Pukul <strong>${schedule.hours.start}</strong> s.d. <strong>${schedule.hours.finish} WIB</strong></p>
    `;

    zoomDiv.innerHTML = `
        <h3>Akses Zoom</h3>
        <p>ID: <strong>${zoom.id}</strong></p>
        <p>Password: <strong>${zoom.password}</strong></p>
    `;

    mapLink.href = zoom.link;

    if (zoomPara) {
        zoomPara.innerHTML = `
            Link akses langsung:
            <a href="${zoom.link}" target="_blank">${zoom.link}</a>
        `;
    }
};
