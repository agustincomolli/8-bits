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


function openMenu() {
    toggleMenu();
    // Agrega una clase de animación de apertura.
    navBar.classList.add("animate__slideInRight");
}

function closeMenu() {
    // Agrega una clase de animación de cierre.
    navBar.classList.add("animate__slideOutRight");
    // Espera a que termine la animación para cerrar el menú.
    setTimeout(() => {
        toggleMenu();
        // Elimina las clases de animación después de cerrar el menú.
        navBar.classList.remove("animate__slideInRight", "animate__slideOutRight");
    }, 650);
}

hamburgerMenu.addEventListener("click", openMenu);
hamburgerClose.addEventListener("click", closeMenu);
