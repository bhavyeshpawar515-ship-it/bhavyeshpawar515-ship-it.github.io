// SmartToolsHub v1

// ==========================
// Dark Mode
// ==========================
const darkBtn = document.querySelector(".dark-btn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = darkBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkBtn.querySelector("i").classList.remove("fa-moon");
    darkBtn.querySelector("i").classList.add("fa-sun");
}

// ==========================
// Search
// ==========================
const searchInput = document.querySelector(".search-box input");
const tools = document.querySelectorAll(".tool");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    tools.forEach(tool => {

        let title = tool.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            tool.style.display = "block";
        } else {
            tool.style.display = "none";
        }

    });

});

// ==========================
// Button Click

// ==========================
// Fade Animation
// ==========================
const cards = document.querySelectorAll(".card, .tool");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});
