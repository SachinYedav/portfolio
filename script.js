const bars = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-links");

bars.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    bars.classList.toggle("fa-bars");
});
