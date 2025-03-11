AOS.init();

var typed = new Typed(".typed-text", {
    strings: ["Web Developer", "Gamer", "DevOps Enginer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
