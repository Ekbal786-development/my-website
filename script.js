// Select form and message area
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    // Extra safety check (HTML already validates)
    if (name === "" || email === "" || userMessage === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Success message
    message.textContent = "Thank you! Your message has been sent.";
    message.style.color = "green";

    // Clear form
    form.reset();
});

// Active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
    window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
}
