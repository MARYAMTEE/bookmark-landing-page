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

// Features tab
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        const target = tab.dataset.tab;
        const matchingContent = document.querySelector(`.tab__content[data-content="${target}"]`);

        contents.forEach(c => c.classList.remove("active"));
        matchingContent.classList.add("active");
    })
});