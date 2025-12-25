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
