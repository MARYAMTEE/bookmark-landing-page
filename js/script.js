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

// Accordion
const btns = document.querySelectorAll(".arrowBtn");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btns.forEach(b => { b.classList.remove("active")});
        btn.classList.add("active");

        const accordionContainer = btn.closest(".accordion__container");
        const accordion = accordionContainer.querySelector(".accordion");
        const arrow = btn.querySelector(".arrow__icon");
        const isOpen = accordion.classList.toggle("toggle");

        arrow.classList.toggle("fa-angle-down");
        arrow.classList.toggle("fa-angle-up");

        if(isOpen) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active");
        }
    });
});
