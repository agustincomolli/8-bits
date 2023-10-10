const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerClose = document.querySelector(".hamburger-close");
const navBar = document.querySelector(".nav-bar");

/**
 * Alternar la visibilidad del menú hamburguesa
 */
function toggleMenu() {
    navBar.classList.toggle("active");
    hamburgerClose.classList.toggle("active");
    hamburgerMenu.classList.toggle("menu-active");
};


hamburgerMenu.addEventListener("click", toggleMenu);
hamburgerClose.addEventListener("click", toggleMenu);