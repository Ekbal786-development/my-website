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
       ACTIVE NAVBAR HIGHLIGHT
    ================================ */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

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
