document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const offset = 100;
    for (let link of navLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    }
});
