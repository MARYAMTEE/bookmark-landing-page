const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__nav");
const nav = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__item");

openMenu.addEventListener("click", () => {
    nav.classList.toggle("toggle");
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove("toggle");
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navLink.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        nav.classList.remove("toggle");
    });
});