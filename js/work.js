const projects = document.querySelectorAll(".project img");

const preview = document.getElementById("imagePreview");

const previewImg = document.getElementById("previewImg");

const title = document.getElementById("previewTitle");

const closeBtn = document.querySelector(".close-btn");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

let currentGroup = [];

let currentIndex = 0;


function openPreview(img){

    preview.classList.add("active");

    previewImg.src = img.src;

title.textContent = img.alt;
    const group = img.closest(".project-group");

    currentGroup = Array.from(group.querySelectorAll("img"));

    currentIndex = currentGroup.indexOf(img);
}


/* ================= CLOSE ================= */

function closePreview(){

    preview.classList.remove("active");
}


/* ================= IMAGE CLICK ================= */

projects.forEach(img => {

    img.addEventListener("click", (e) => {

        e.stopPropagation();

        openPreview(img);
    });

});


/* ================= NEXT ================= */

nextBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex = (currentIndex + 1) % currentGroup.length;

    slideImage(1);
});


/* ================= PREV ================= */

prevBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;

    slideImage(-1);
});


/* ================= SLIDE EFFECT ================= */

function slideImage(direction){

    previewImg.style.opacity = "0";

    previewImg.style.transform = `translateX(${direction * 60}px)`;


    setTimeout(() => {

        previewImg.src = currentGroup[currentIndex].src;

title.textContent = currentGroup[currentIndex].alt;
        previewImg.style.transform = `translateX(${-direction * 60}px)`;


        setTimeout(() => {

            previewImg.style.opacity = "1";

            previewImg.style.transform = "translateX(0)";

        }, 50);

    }, 180);
}


/* ================= CLOSE BUTTON ================= */

closeBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    closePreview();
});


/* ================= CLICK OUTSIDE ================= */

preview.addEventListener("click", closePreview);

document.querySelector(".preview-content").addEventListener("click", (e) => {

    e.stopPropagation();
});


/* ================= TRUST BOX ANIMATION ================= */

const trustBox = document.querySelector(".trust-box");

function revealOnScroll(){

const { top } = trustBox.getBoundingClientRect();
    if(top < window.innerHeight - 100){

        trustBox.classList.add("show");
    }
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ================= PARTICLES ================= */

const particleContainer = document.querySelector(".particles");

for(let i = 0; i < 40; i++){

    const span = document.createElement("span");

    span.style.left = Math.random() * 100 + "vw";

    span.style.top = Math.random() * 100 + "vh";

    span.style.animationDuration = (5 + Math.random() * 10) + "s";

    span.style.animationDelay = Math.random() * 5 + "s";

    particleContainer.appendChild(span);
}