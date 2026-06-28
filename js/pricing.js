const container = document.querySelector(".particles");

if (container) {
    for (let i = 0; i < 30; i++) {
        const span = document.createElement("span");

        span.style.left = Math.random() * 100 + "vw";
        span.style.top = Math.random() * 100 + "vh";

        span.style.animationDuration = (6 + Math.random() * 10) + "s";
        span.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(span);
    }
}

/*-------- Quick switch btw pricing pages---------*/

const pages = ["basicplan.html", "midplan.html", "advancedplan.html"];

function getCurrentIndex() {
    const current = window.location.pathname.split("/").pop();
    return pages.indexOf(current);
}

// NEXT
function goNext() {
    const index = getCurrentIndex();
    const next = (index + 1) % pages.length;
    slideAndGo(pages[next], 1);
}

// PREV
function goPrev() {
    const index = getCurrentIndex();
    const prev = (index - 1 + pages.length) % pages.length;
    slideAndGo(pages[prev], -1);
}

// ----------------SLIDE
function slideAndGo(url, direction) {
    document.body.style.transition = "0.4s ease";
    document.body.style.transform = `translateX(${direction * -80}px)`;
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = url;
    }, 250);
}

// ----------------DOT ACTIVE (SAFE)
document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    const index = getCurrentIndex();

    if (dots[index]) {
        dots[index].classList.add("active");
    }
});

const topBar = document.querySelector(".top-bar");

// get exact position where it should stick
const offset = topBar.offsetTop;

window.addEventListener("scroll", () => {

    if (window.scrollY >= offset) {
        topBar.classList.add("sticky");
    } else {
        topBar.classList.remove("sticky");
    }

});