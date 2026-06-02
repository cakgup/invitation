import {data} from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [zoomDiv] = timeContainer.querySelectorAll('.time-grid > div');
    const mapLink = timeContainer.querySelector('.time > a');
    const quickLinks = timeContainer.querySelector('.time-quick-links');
    const contactLink = timeContainer.querySelector('.contact-link');
    const contactText = contactLink?.querySelector('span');

    const {zoom, contact, phone} = data.event;
    const {
        virtualBackground = '',
        presensi = '',
        materi = '',
    } = data.link;

    const actionLinks = [
        {
            label: 'Unduh Virtual Background',
            icon: 'bx bx-image-download',
            href: virtualBackground,
        },
        {
            label: 'Presensi',
            icon: 'bx bx-clipboard',
            href: presensi,
        },
        {
            label: 'Unduh Materi',
            icon: 'bx bx-download',
            href: materi,
        },
    ];

    const actionLinkMarkup = ({label, icon, href}) => {
        const isActive = Boolean(href);
        return `
            <a
                class="time-quick-link${isActive ? '' : ' is-disabled'}"
                href="${isActive ? href : '#'}"
                ${isActive ? 'target="_blank" rel="noreferrer"' : 'aria-disabled="true" tabindex="-1"'}
            >
                <i class="${icon}"></i>
                <span>${label}</span>
            </a>
        `;
    };

    const copyText = async (value) => {
        if (!value) return false;

        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(value);
                return true;
            } catch {
                // Fall through to the textarea fallback below.
            }
        }

        const tempInput = document.createElement('textarea');
        tempInput.value = value;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'absolute';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.select();

        let copied = false;
        try {
            copied = document.execCommand('copy');
        } catch {
            copied = false;
        }

        tempInput.remove();
        return copied;
    };

    zoomDiv.innerHTML = `
        <h3>ID Zoom</h3>
        <div class="time-copy-list">
            <div class="time-copy-row">
                <span class="time-copy-icon" aria-hidden="true">
                    <i class="bx bx-key"></i>
                </span>
                <p><span>ID:</span> <strong>${zoom.id}</strong></p>
                <button type="button" class="time-copy-button" data-copy-value="${zoom.id}" aria-label="Salin ID Zoom">
                    Copy
                </button>
            </div>
            <div class="time-copy-row">
                <span class="time-copy-icon" aria-hidden="true">
                    <i class="bx bx-lock-alt"></i>
                </span>
                <p><span>Password:</span> <strong>${zoom.password}</strong></p>
                <button type="button" class="time-copy-button" data-copy-value="${zoom.password}" aria-label="Salin password Zoom">
                    Copy
                </button>
            </div>
        </div>
    `;

    mapLink.href = zoom.link;

    if (quickLinks) {
        quickLinks.innerHTML = actionLinks.map(actionLinkMarkup).join('');
    }

    if (contactLink && contactText) {
        const phoneValue = String(phone);
        const waNumber = `62${phoneValue.replace(/^0/, '')}`;
        const prettyPhone = phoneValue.replace(/^(\d{4})(\d{4})(\d{4,})$/, '$1-$2-$3');
        contactLink.href = `https://wa.me/${waNumber}`;
        contactText.textContent = `${contact} - ${prettyPhone}`;
    }

    timeContainer.querySelectorAll('.time-copy-button').forEach((button) => {
        button.addEventListener('click', async () => {
            const {copyValue} = button.dataset;
            if (!copyValue) return;

            const originalLabel = button.textContent;

            const copied = await copyText(copyValue);
            button.textContent = copied ? 'Copied' : 'Salin Manual';

            setTimeout(() => {
                button.textContent = originalLabel;
            }, 1400);
        });
    });
};
