import {data} from "../assets/data/data.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');

    const personCard = (person, delay = 0) => `
        <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="${delay}">
            <figure>
                <div class="photo-ring">
                    <img src="${person.image}" alt="${person.name}" loading="lazy">
                </div>
                <figcaption>
                    <span class="role-badge">${person.role}</span>
                    <span class="speaker-name">${person.name}</span>
                    <span class="speaker-creds">${person.credentials}</span>
                </figcaption>
            </figure>
            <div class="speaker-detail">
                <p class="speaker-inst">
                    <i class="bx bx-buildings"></i>
                    ${person.institution}
                </p>
                <p class="speaker-bio">${person.bio}</p>
            </div>
        </li>
    `;

    const { speaker, mc, tilawah } = data.event;

    brideCouple.innerHTML =
        personCard(speaker,  0)  +
        personCard(mc,       100) +
        personCard(tilawah,  200);
};