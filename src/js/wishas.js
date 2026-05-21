import {
    formattedDate,
    formattedName,
    generateRandomColor,
    generateRandomId,
    getCurrentDateTime,
    renderElement
} from "../utils/helper.js";
import {data} from "../assets/data/data.js";
import {comentarService} from "../services/comentarService.js";

export const wishas = () => {
    const wishasContainer = document.querySelector('.wishas');

    // ── Gunakan querySelector agar tidak crash jika struktur HTML berubah ──
    const form             = wishasContainer.querySelector('form');
    const buttonForm       = form?.querySelector('button[type="submit"]');
    const peopleComentar   = wishasContainer.querySelector('.wishas > div:nth-of-type(2) > p');
    const containerComentar = wishasContainer.querySelector('.wishas > div:nth-of-type(2) > ul');
    const pageNumber       = wishasContainer.querySelector('.page-number');
    const prevButton       = wishasContainer.querySelectorAll('.button-grup button')[0];
    const nextButton       = wishasContainer.querySelectorAll('.button-grup button')[1];

    // ── Render item komentar ──
    const listItemComentar = (item) => {
        const name = formattedName(item.name);
        const newDate = formattedDate(item.date);
        let dateStr = '';

        if (newDate.days < 1) {
            dateStr = newDate.hours < 1
                ? `${newDate.minutes} menit yang lalu`
                : `${newDate.hours} jam, ${newDate.minutes} menit yang lalu`;
        } else {
            dateStr = `${newDate.days} hari, ${newDate.hours} jam yang lalu`;
        }

        return `
            <li data-aos="zoom-in" data-aos-duration="1000">
                <div style="background-color: ${item.color}">${item.name.charAt(0).toUpperCase()}</div>
                <div>
                    <h4>${name}</h4>
                    <p>${dateStr}<br>${item.status}</p>
                    <p>${item.message}</p>
                </div>
            </li>`;
    };

    let lengthComentar = 0;
    let currentPage  = 1;
    const itemsPerPage = 4;
    let startIndex   = 0;
    let endIndex     = itemsPerPage;

    // ── Load komentar ──
    const initialComentar = async () => {
        if (!containerComentar) return;
        containerComentar.innerHTML = '<li style="text-align:center;padding:1rem;font-size:0.9rem;color:var(--text-muted)">Memuat komentar…</li>';
        if (peopleComentar) peopleComentar.textContent = '...';
        if (pageNumber)     pageNumber.textContent     = '..';

        try {
            const response     = await comentarService.getComentar();
            const { comentar } = response;

            lengthComentar = comentar.length;
            comentar.reverse();

            if (peopleComentar) {
                peopleComentar.textContent = comentar.length > 0
                    ? `${comentar.length} orang telah mengisi konfirmasi`
                    : 'Belum ada yang mengisi konfirmasi';
            }

            if (pageNumber) pageNumber.textContent = '1';
            renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
        } catch (error) {
            if (containerComentar) {
                containerComentar.innerHTML = '<li style="text-align:center;padding:1rem;font-size:0.85rem;color:var(--text-muted)">Gagal memuat komentar.</li>';
            }
        }
    };

    // ── Submit form ──
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (buttonForm) buttonForm.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Mengirim...';

        const comentar = {
            id:      generateRandomId(),
            name:    e.target.name.value,
            status:  e.target.status.value === 'y' ? 'Hadir' : 'Tidak Hadir',
            message: e.target.message.value,
            date:    getCurrentDateTime(),
            color:   generateRandomColor(),
        };

        try {
            const response = await comentarService.getComentar();
            await comentarService.addComentar(comentar);

            lengthComentar = response.comentar.length + 1;
            if (peopleComentar) {
                peopleComentar.textContent = `${lengthComentar} orang telah mengisi konfirmasi`;
            }
            containerComentar?.insertAdjacentHTML('afterbegin', listItemComentar(comentar));
        } catch (error) {
            console.error('Gagal kirim komentar:', error.message);
        } finally {
            if (buttonForm) buttonForm.innerHTML = '<i class="bx bx-send"></i> Kirim';
            form.reset();
        }
    });

    // ── Paginasi ──
    const updatePageContent = async () => {
        if (!containerComentar) return;
        containerComentar.innerHTML = '<li style="text-align:center;padding:1rem;font-size:0.9rem;color:var(--text-muted)">Memuat…</li>';
        if (pageNumber) pageNumber.textContent = '..';
        if (prevButton) prevButton.disabled = true;
        if (nextButton) nextButton.disabled = true;

        try {
            const response     = await comentarService.getComentar();
            const { comentar } = response;
            comentar.reverse();
            renderElement(comentar.slice(startIndex, endIndex), containerComentar, listItemComentar);
            if (pageNumber) pageNumber.textContent = currentPage.toString();
        } catch (error) {
            console.error(error);
        } finally {
            if (prevButton) prevButton.disabled = false;
            if (nextButton) nextButton.disabled = false;
        }
    };

    nextButton?.addEventListener('click', async () => {
        if (endIndex <= lengthComentar) {
            currentPage++;
            startIndex = (currentPage - 1) * itemsPerPage;
            endIndex   = startIndex + itemsPerPage;
            await updatePageContent();
        }
    });

    prevButton?.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage--;
            startIndex = (currentPage - 1) * itemsPerPage;
            endIndex   = startIndex + itemsPerPage;
            await updatePageContent();
        }
    });

    initialComentar();
};
