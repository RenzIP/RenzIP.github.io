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
        strings: ["Web Developer", "Gamer", "DevOps Engineer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Hapus class "active" dari semua link
            navLinks.forEach((link) => link.classList.remove("active"));

            // Tambahkan class "active" ke link yang diklik
            this.classList.add("active");
        });
    });
});