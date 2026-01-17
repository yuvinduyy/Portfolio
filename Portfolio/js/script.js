window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("active");
        }
    });
});

document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};