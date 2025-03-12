document.addEventListener("DOMContentLoaded", function() {
    // Inisialisasi AOS
    AOS.init({
        duration: 1000,
        once: true,
    });
    // gsap.registerPlugin(ScrollTrigger);

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
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeActiveNav() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                let sectionId = section.getAttribute("id");

                // Hapus semua active
                navLinks.forEach((link) => link.classList.remove("active"));

                // Tambahkan active ke yang sesuai
                document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add("active");
            }
        });
    }

    // Tambahkan event listener
    window.addEventListener("scroll", changeActiveNav);
});

document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.1, rotation: 5, duration: 0.1, ease: "power2.out" });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, rotation: 0, duration: 0.1, ease: "power2.out" });
    });
});
