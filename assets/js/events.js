// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

const backToTop = () => {
document.body.scrollTo({
    top: 0,
    behavior: "smooth",
});

document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
});
};

const scrollFunction = () => {
if (window.scrollY > 20) {
    backToTopBtn.style.display = "block";
} else {
    backToTopBtn.style.display = "none";
}
};

window.addEventListener("scroll", scrollFunction);
backToTopBtn.addEventListener("click", backToTop);

// Burger Menu Button

const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("hidden");
});

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("hidden");
});

const menuToggleLinks = document.getElementsByClassName("close-menu");
for (let i = 0; i < menuToggleLinks.length; i++) {
    menuToggleLinks[i].addEventListener("click", () => {
        document.getElementById("menu").classList.toggle("hidden");
        console.log("clicked");
    });
}
