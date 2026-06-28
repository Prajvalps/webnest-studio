document.addEventListener("DOMContentLoaded", () => {
    const waves = document.querySelectorAll(".bubble-overlay");

    setTimeout(() => {
        waves.forEach(w => w.remove());
    }, 1300);
});
const skills = document.querySelectorAll(".skill-list span");
const icons = document.querySelectorAll(".skills-bg img");

skills.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        const key = skill.getAttribute("data-skill");

        icons.forEach(icon => {
            if (icon.getAttribute("data-skill") === key) {
                icon.classList.add("active");
            }
        });
    });

    skill.addEventListener("mouseleave", () => {
        icons.forEach(icon => {
            icon.classList.remove("active");
        });
    });
});

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