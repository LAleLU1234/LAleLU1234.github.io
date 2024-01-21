document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const offset = 100; // Offset in Pixeln, passen Sie diesen Wert bei Bedarf an
    for (let link of navLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - offset, // Subtrahieren Sie den Offset vom Ziel-OffsetTop
                    behavior: "smooth"
                });
            }
        });
    }

    // Contact form submission (placeholder functionality)
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // TODO: Add actual form submission logic here
        alert("Form submitted! (Add backend logic to handle submission)");
    });
});
