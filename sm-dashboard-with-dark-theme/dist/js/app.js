const checked = document.querySelector(".dark-toggler");

const body = document.querySelector(".body");

checked.addEventListener("click", function() {
    body.classList.toggle("dark");
});