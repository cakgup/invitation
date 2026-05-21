import { data } from "../assets/data/data.js";
import { monthNameToNumber } from "../utils/helper.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [scheduleDiv, zoomDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('a');
    const zoomPara = timeContainer.querySelector('a + p');

    const { schedule } = data.time;
    const { zoom } = data.event;

    // ── Kartu 1: Jadwal ──
    scheduleDiv.innerHTML = `
        <h3>📅 Jadwal Kajian</h3>
        <p>
            <strong>${schedule.day}, ${schedule.date} ${schedule.month} ${schedule.year}</strong>
        </p>
        <p>Pukul <strong>${schedule.hours.start}</strong> s.d. <strong>${schedule.hours.finish} WIB</strong></p>
    `;

    // ── Kartu 2: Akses Zoom ──
    zoomDiv.innerHTML = `
        <h3>💻 Akses Zoom</h3>
        <p>ID&emsp;&ensp;: <strong>${zoom.id}</strong></p>
        <p>Pass : <strong>${zoom.password}</strong></p>
    `;

    // ── Tombol join Zoom ──
    mapLink.href = zoom.link;

    // ── Link teks di bawah tombol ──
    if (zoomPara) {
        zoomPara.innerHTML = `
            🔗 <a href="${zoom.link}" target="_blank">${zoom.link}</a>
        `;
    }
};
