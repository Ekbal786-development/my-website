document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       CONTACT FORM HANDLING
    ================================ */
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    if (form && message) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // STOP page reload

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const userMessage = document.getElementById("message").value.trim();

            if (!name || !email || !userMessage) {
                message.textContent = "Please fill in all fields.";
                message.style.color = "red";
                return;
            }

            message.textContent = "Thank you! Your message has been sent.";
            message.style.color = "green";
            form.reset();
        });
    }

/* ===============================
   STABLE ACTIVE NAVBAR LOGIC
   (Sticky-header aware)
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");

function updateActiveNav() {
    const headerHeight = header.offsetHeight;
    let currentSectionId = null;

    sections.forEach(section => {
        const sectionTop =
            section.getBoundingClientRect().top - headerHeight;

        if (sectionTop <= 0) {
            currentSectionId = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (
            currentSectionId &&
            link.getAttribute("href") === `#${currentSectionId}`
        ) {
            link.classList.add("active");
        }
    });
}

// Run on scroll + load
window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


    /* ===============================
       SCROLL TO TOP BUTTON
    ================================ */
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});
