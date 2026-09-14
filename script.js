//Preloader
window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader");
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 500);
});

// Theme Toggle
function toggleTheme() {
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    } else {
        localStorage.setItem("theme", "light");
    }
    updateIcon();
}

toggleTheme();

const themeToggle = document.querySelector(".toggle-theme");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
        
        updateIcon();
    });
}

function updateIcon() {
    const button = document.querySelector(".toggle-theme");
    if (!button) return;

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Modo Claro";
    } else {
        button.textContent = "Modo Oscuro";
    }
}
