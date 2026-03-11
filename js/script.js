console.log('Script loaded!');

// Set last updated date
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded!');

    // Pixel art canvas renderer
    const pixelCanvas = document.getElementById('heroPixelArt');
    if (pixelCanvas) {
        fetch('assets/landscape_pixel.json')
            .then(r => r.json())
            .then(data => {
                const cols = data.cols;
                const rows = data.pattern.split(',');
                const numRows = rows.length;
                const colors = data.colors;
                const cellW = 12;
                const cellH = 8;
                const gap = 1;
                const stepX = cellW + gap;
                const stepY = cellH + gap;

                pixelCanvas.width = cols * stepX - gap;
                pixelCanvas.height = numRows * stepY - gap;
                const ctx = pixelCanvas.getContext('2d');
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, pixelCanvas.width, pixelCanvas.height);

                rows.forEach((row, y) => {
                    [...row].forEach((ch, x) => {
                        ctx.fillStyle = colors[parseInt(ch)];
                        ctx.fillRect(x * stepX, y * stepY, cellW, cellH);
                    });
                });
            });
    }
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdated.textContent = date.toLocaleDateString('en-US', options);
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[data-scroll]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('data-scroll');
            const targetSection = document.getElementById(targetId);
            if (!targetSection) return;
            e.preventDefault();
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            history.pushState(null, '', '/');
        });
    });

    // Section navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    const sectionGroups = document.querySelectorAll('.section-group');
    
    console.log('Found nav buttons:', navButtons.length);
    console.log('Found section groups:', sectionGroups.length);

    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Button clicked:', this.getAttribute('data-section'));
            
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all section groups
            sectionGroups.forEach(group => {
                group.style.display = 'none';
            });
            
            // Show the corresponding section group
            const sectionType = this.getAttribute('data-section');
            const targetGroup = document.getElementById(sectionType + '-group');
            console.log('Looking for:', sectionType + '-group');
            console.log('Found group:', targetGroup);
            
            if (targetGroup) {
                targetGroup.style.display = 'block';
                // Reset animation
                targetGroup.style.animation = 'none';
                setTimeout(() => {
                    targetGroup.style.animation = 'fadeIn 0.3s ease';
                }, 10);
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