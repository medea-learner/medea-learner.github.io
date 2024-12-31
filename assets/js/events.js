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

function showCategory(category) {
    const sections = ['web', 'mobile', 'ai', 'desktop'];
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Hide all sections
    sections.forEach(sec => document.getElementById(sec).classList.add('hidden'));
    // Show the selected section
    document.getElementById(category).classList.remove('hidden');

    // Remove active-tab class from all buttons
    buttons.forEach(button => button.classList.remove('active-tab'));
    // Add active-tab class to the clicked button
    event.target.classList.add('active-tab');
}
  