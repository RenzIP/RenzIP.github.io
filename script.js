// Typed.js Initialization
const typed = new Typed('.typed-text', {
    strings: ['Web Developer', 'Gamer', 'DevOps Enginer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
});

// GSAP Animations
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from(".hero .btn", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

// Animasi untuk section About
gsap.from("#about", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
});

// Inisialisasi ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animasi untuk setiap section

// Animasi untuk navbar saat scroll up/down
const navbar = document.querySelector(".navbar");

gsap.to(navbar, {
    backgroundColor: "rgba(52, 58, 64, 0.9)", // Warna navbar saat scroll
    duration: 0.5,
    scrollTrigger: {
        trigger: "header", // Trigger animasi saat header keluar dari viewport
        start: "top -100px", // Mulai animasi saat header keluar 100px dari atas
        end: "bottom -100px", // Akhiri animasi saat header masuk kembali
        toggleActions: "play none none reverse", // Play animasi saat scroll down, reverse saat scroll up
    },
});

// Animasi untuk section Contact
gsap.from("#contact", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
});

// Loading Screen
window.addEventListener("load", function() {
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 500); // Sesuaikan dengan durasi transisi
});

// Fungsi untuk menambahkan class active pada navbar
function setActiveNav() {
    const sections = document.querySelectorAll("section"); // Ambil semua section
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Ambil semua link navbar

    let currentSection = "";

    // Cek posisi scroll untuk setiap section
    sections.forEach((section) => {
        const sectionTop = section.offsetTop; // Posisi atas section
        const sectionHeight = section.clientHeight; // Tinggi section
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id"); // Ambil id section yang sedang dilihat
        }
    });

    // Tambahkan class active pada link navbar yang sesuai
    navLinks.forEach((link) => {
        link.classList.remove("active"); // Hapus class active dari semua link
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active"); // Tambahkan class active pada link yang sesuai
        }
    });
}

// Jalankan fungsi saat scroll dan saat halaman dimuat
window.addEventListener("scroll", setActiveNav);
window.addEventListener("load", setActiveNav);
