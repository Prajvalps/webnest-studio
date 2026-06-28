const video = document.getElementById("bg-video");

/* redirect immediately after video ends */

video.addEventListener("ended", () => {

    window.location.href = "home.html";
});