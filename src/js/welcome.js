import {data} from "../assets/data/data.js";
import {addClassElement, getQueryParameter, removeClassElement} from "../utils/helper.js";

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement    = document.querySelector('.home');
    const navbarElement  = document.querySelector('header nav');

    // ── Elemen dengan querySelector (lebih robust) ──
    const figureElement      = welcomeElement.querySelector('figure');
    const weddingToElement   = welcomeElement.querySelector('p');
    const openWeddingButton  = welcomeElement.querySelector('button');

    const audioSection  = document.querySelector('.audio');
    const audioMusic    = audioSection?.querySelector('audio');
    const audioButton   = audioSection?.querySelector('button');
    const iconButton    = audioButton?.querySelector('i');

    // ── Konten kotak event di splash screen ──
    const generateFigureContent = (event) => `
        <div class="welcome-event-box">
            <span class="icon-wrap">📚</span>
            <p class="organizer">${event.organizer}</p>
            <h3 class="event-title">${event.title}</h3>
        </div>`;

    // ── Nama tamu dari URL parameter ──
    const generateParameterContent = () => {
        const nameInput = document.querySelector('#name');
        const params    = getQueryParameter('to');
        const display   = params || 'Kelas IA302';

        if (weddingToElement) {
            weddingToElement.innerHTML =
                `Kepada Yth Bapak/Ibu/Saudara/i<br><span>${display}</span>`;
        }
        if (nameInput && params) nameInput.value = params;
    };

    // ── Kontrol audio ──
    const initialAudio = () => {
        if (!audioMusic || !audioButton || !iconButton) return;

        let isPlaying = false;
        audioMusic.innerHTML = `<source src="${data.audio}" type="audio/mp3"/>`;

        audioButton.addEventListener('click', () => {
            if (isPlaying) {
                addClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-play-circle');
                addClassElement(iconButton, 'bx-pause-circle');
                audioMusic.play();
            } else {
                removeClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-pause-circle');
                addClassElement(iconButton, 'bx-play-circle');
                audioMusic.pause();
            }
            isPlaying = !isPlaying;
        });
    };

    // ── Tombol buka undangan ──
    openWeddingButton?.addEventListener('click', () => {
        addClassElement(document.body, 'active');
        addClassElement(welcomeElement, 'hide');

        setTimeout(() => {
            addClassElement(homeElement, 'active');
            addClassElement(navbarElement, 'active');
            if (audioButton) addClassElement(audioButton, 'show');
            if (iconButton) {
                removeClassElement(iconButton, 'bx-play-circle');
                addClassElement(iconButton, 'bx-pause-circle');
            }
            audioMusic?.play().catch(() => {}); // catch autoplay policy error
        }, 1500);

        setTimeout(() => {
            if (audioButton) addClassElement(audioButton, 'active');
        }, 3000);
    });

    // ── Init ──
    if (figureElement) figureElement.innerHTML = generateFigureContent(data.event);
    generateParameterContent();
    addClassElement(welcomeElement, 'active');
    initialAudio();
};