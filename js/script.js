// Set last updated date
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdated.textContent = date.toLocaleDateString('en-US', options);
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('nav a');

    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                const correspondingNavItem = document.querySelector(`nav a[href="#${section.id}"]`);
                if (correspondingNavItem) {
                    correspondingNavItem.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection();

    // Add fade-in animation to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-ready');
        observer.observe(section);
    });

    // Publications expand/collapse functionality
    const publications = document.querySelectorAll('.publication');
    publications.forEach(pub => {
        pub.style.cursor = 'pointer';
        pub.addEventListener('click', function(e) {
            if (!e.target.classList.contains('pub-link')) {
                this.classList.toggle('expanded');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle (if needed in future)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });
    }
});