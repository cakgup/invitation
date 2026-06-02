import {home} from "./js/home.js";
import {time} from "./js/time.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    welcome();
    navbar();
    home();
    time();
    wishas();
});
