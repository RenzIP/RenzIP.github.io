document.addEventListener("DOMContentLoaded", function() {
    // Inisialisasi AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".section-title", { opacity: 0, y: -50, duration: 1, delay: 0.3 });

    // Inisialisasi Typed.js
    var typed = new Typed(".typed-text", {
        strings: ["Web Developer", "DevOps Engineer", "Content Creator"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});