document.addEventListener('DOMContentLoaded', () => {

    // --- Welcome Animation ---
    const welcomeOverlay = document.getElementById('welcome-overlay');

    // Hide welcome overlay after 2.5 seconds
    const heroSection = document.getElementById('hero');
    heroSection.classList.add('hero-zoom-in'); // Ensure started scaled up

    setTimeout(() => {
        welcomeOverlay.style.opacity = '0';
        heroSection.classList.remove('hero-zoom-in'); // Trigger Zoom Out
        setTimeout(() => {
            welcomeOverlay.style.display = 'none';
        }, 600);
    }, 2500);

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Check for saved user preference, if any
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'light') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Fade out when scrolling away
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right, .hidden-up');
    hiddenElements.forEach((el) => observer.observe(el));

    // Particle System
    function createParticles() {
        const particleCount = 40;
        const body = document.body;
        const colors = ['#007aff', '#bf5af2', '#ff2d55', '#64d2ff', '#ffffff']; // Multi-color palette

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random properties
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = Math.random() * 15 + 10; // 10-25s
            const delay = Math.random() * 20;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}vw`;
            particle.style.top = `${top}vh`;
            particle.style.background = color;
            particle.style.boxShadow = `0 0 5px ${color}`; // Glow effect
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;

            body.appendChild(particle);
        }
    }
    createParticles();

    // --- Mobile Menu ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-times');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.add('fa-bars');
            menuBtn.querySelector('i').classList.remove('fa-times');
        });
    });

    // --- Navbar Hide on Scroll ---
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-80px'; // Hide
        } else {
            navbar.style.top = '0'; // Show
        }
        lastScrollTop = scrollTop;
    });

});
