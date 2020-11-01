// Select Element
const selectElement = function (element) {
    return document.querySelector(element);
}

// Open and Close mobile menu
const toggler = selectElement(".mobile-toggler");

toggler.addEventListener("click", function () {
    toggler.classList.toggle("menu-open");
});