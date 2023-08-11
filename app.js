document.getElementById("current-year").textContent = new Date().getFullYear();

const navbarBtn = document.getElementById("navbar-btn");
const navbarClose = document.getElementById("navbar-close");
const navbar = document.getElementById("navbar");

navbarBtn.addEventListener("click", () => navbar.classList.add("show-navbar"));
navbarClose.addEventListener("click", () => navbar.classList.remove("show-navbar"));
