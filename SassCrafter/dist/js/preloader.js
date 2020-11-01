// Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.parentElement.removeChild(preloader);
});