document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    }

    // 🔥 CRITICAL FIX: Run once on page load
    revealOnScroll();

    // Then run on scroll
    window.addEventListener("scroll", revealOnScroll);
});