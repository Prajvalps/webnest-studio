window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const links = document.querySelectorAll(".nav-links li");
const bubble = document.querySelector(".nav-bubble");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const rect = link.getBoundingClientRect();
        const parentRect = link.parentElement.getBoundingClientRect();

        bubble.style.width = rect.width + "px";
        bubble.style.left = (rect.left - parentRect.left) + "px";
    });
});

const headers = document.querySelectorAll(".section-header");

window.addEventListener("scroll", () => {
    headers.forEach(header => {
        const top = header.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            header.classList.add("active");
        }
    });
});


const items = document.querySelectorAll(".trust-item");

function animateTrust() {
    items.forEach((item, index) => {
        item.style.animation = "none";
        item.offsetHeight; // reset animation

        item.style.animation = `popUp 1.2s ease forwards`;
        item.style.animationDelay = `${index * 0.5}s`;
    });
}

// run first time
animateTrust();

// repeat every 4 seconds
setInterval(animateTrust, 4000);


// Work page navigation

function goToWork() {
    window.location.href = "work.html";
}

//Particles effect 
// prevent duplicate creation
if (document.querySelector(".particles")) {

    const particleContainer = document.querySelector(".particles");

    if (particleContainer.children.length === 0) {

        for (let i = 0; i < 35; i++) {
            const span = document.createElement("span");

            span.style.left = Math.random() * 100 + "vw";
            span.style.top = Math.random() * 100 + "vh";

            span.style.animationDuration = (6 + Math.random() * 10) + "s";
            span.style.animationDelay = Math.random() * 5 + "s";

            particleContainer.appendChild(span);
        }
    }
}

const contactItems = document.querySelectorAll('.contact-item');

function showContactItems() {
    const trigger = window.innerHeight * 0.85;

    contactItems.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showContactItems);
window.addEventListener('load', showContactItems);

const animatedElements = document.querySelectorAll(
    '.fade-up, .fade-left, .fade-right'
);

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

console.log(animatedElements.length);


//-----------------------------------Mobile Edition ------------


function revealOnScroll() {

    const trigger = window.innerHeight * 0.95;

    animatedElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('show');
        }

    });
}
