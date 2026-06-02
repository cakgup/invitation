import {data} from "../assets/data/data.js";
import {addClassElement, getQueryParameter, removeClassElement} from "../utils/helper.js";

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');

    const figureElement = welcomeElement.querySelector('figure');
    const weddingToElement = welcomeElement.querySelector('p');
    const openWeddingButton = welcomeElement.querySelector('button');

    const audioSection = document.querySelector('.audio');
    const audioMusic = audioSection?.querySelector('audio');
    const audioButton = audioSection?.querySelector('button');
    const iconButton = audioButton?.querySelector('i');

    const generateFigureContent = (event) => `
        <div class="welcome-event-box">
            <p class="organizer">${event.organizer}</p>
            <h3 class="event-title">${event.title}</h3>
        </div>`;

    const generateParameterContent = () => {
        const nameInput = document.querySelector('#name');
        const params = getQueryParameter('to');
        const display = params || 'Kelas IA302';

        if (weddingToElement) {
            weddingToElement.innerHTML =
                `Kepada Yth Bapak/Ibu/Saudara/i<br><span>${display}</span>`;
        }
        if (nameInput && params) nameInput.value = params;
    };

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
            audioMusic?.play().catch(() => {});
        }, 1500);

        setTimeout(() => {
            if (audioButton) addClassElement(audioButton, 'active');
        }, 3000);
    });

    if (figureElement) figureElement.innerHTML = generateFigureContent(data.event);
    generateParameterContent();
    addClassElement(welcomeElement, 'active');
    initialAudio();
};
