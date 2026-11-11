
// Dark and Light Mode

let themeToggle = document.getElementById("themeToggle");

let savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = "☾";
}

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.innerHTML = "☾";
        localStorage.setItem("portfolio-theme", "light");
    } else {
        themeToggle.innerHTML = "☀";
        localStorage.setItem("portfolio-theme", "dark");
    }

});


// Mobile Navbar

let menuToggle = document.getElementById("menuToggle");

let navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


// Close navbar after clicking a link

let links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("open");
        menuToggle.innerHTML = "☰";

    });

});

// Timeline scroll animation

let timelineCards = document.querySelectorAll(".timeline-card");

let observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

timelineCards.forEach(function(card) {

    observer.observe(card);

});

// Typing Animation

let technologies = [
    "Python",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub"
];

let techIndex = 0;
let charIndex = 0;
let isDeleting = false;

let typingText = document.getElementById("typing-text");

function typeEffect() {

    let currentTech = technologies[techIndex];

    if (isDeleting) {

        typingText.textContent =
            currentTech.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentTech.substring(0, charIndex + 1);

        charIndex++;

    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentTech.length) {

        speed = 1200;
        isDeleting = true;

    }

    else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        techIndex++;

        if (techIndex === technologies.length) {
            techIndex = 0;
        }

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();
