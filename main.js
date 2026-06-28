document.addEventListener('DOMContentLoaded', () => {
    // === 1. Custom Trailing Cursor ===
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const label = document.getElementById('cursor-label');

    if (dot && ring && label) {
        let mx = -100, my = -100; // Mouse targets
        let rx = -100, ry = -100; // Interpolated ring positions
        let dx = -100, dy = -100; // Interpolated dot positions (slight trail for dot too)

        document.addEventListener('mousemove', (e) => {
            mx = e.clientX;
            my = e.clientY;
        });

        // Interpolation loop for buttery smooth physics
        const updateCursor = () => {
            // Ring trails mouse with friction
            rx += (mx - rx) * 0.15;
            ry += (my - ry) * 0.15;

            // Dot follows mouse very closely
            dx += (mx - dx) * 0.4;
            dy += (my - dy) * 0.4;

            dot.style.left = `${dx}px`;
            dot.style.top = `${dy}px`;

            ring.style.left = `${rx}px`;
            ring.style.top = `${ry}px`;

            label.style.left = `${rx}px`;
            label.style.top = `${ry}px`;

            requestAnimationFrame(updateCursor);
        };
        updateCursor();

        // Bind interactive elements
        const updateInteractiveListeners = () => {
            const interactives = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .project-card');
            interactives.forEach(el => {
                // Avoid double binding
                if (el.dataset.cursorBound) return;
                el.dataset.cursorBound = "true";

                el.addEventListener('mouseenter', () => {
                    document.body.classList.add('hover-project');
                    if (el.classList.contains('project-card')) {
                        label.textContent = el.dataset.cursorLabel || 'View';
                    } else {
                        label.textContent = ''; // Empty label for normal links/buttons
                    }
                });

                el.addEventListener('mouseleave', () => {
                    document.body.classList.remove('hover-project');
                    label.textContent = '';
                });
            });
        };

        updateInteractiveListeners();
        // Expose helper globally so dynamic content can refresh listeners
        window.refreshCursorListeners = updateInteractiveListeners;
    }

    // === 2. Scroll Reveal Animations (Intersection Observer) ===
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Animate once
            }
        });
    }, revealOptions);

    const applyRevealAnimations = () => {
        document.querySelectorAll('.reveal').forEach((el, index) => {
            revealObserver.observe(el);
        });

        // Stagger child cards if containers exist
        document.querySelectorAll('.stagger-container').forEach(container => {
            const children = container.querySelectorAll('.reveal');
            children.forEach((child, i) => {
                child.style.transitionDelay = `${(i + 1) * 100}ms`;
            });
        });
    };
    applyRevealAnimations();
    window.refreshRevealAnimations = applyRevealAnimations;

    // === 3. Sticky Navigation Scroll Effect ===
    const header = document.querySelector('header') || document.querySelector('nav');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                header.classList.add('py-2', 'bg-surface/95', 'backdrop-blur-lg', 'border-b', 'border-fog');
                header.classList.remove('py-4', 'bg-surface/80');
            } else {
                header.classList.add('py-4', 'bg-surface/80');
                header.classList.remove('py-2', 'bg-surface/95', 'border-b', 'border-fog');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run initially
    }

    // === 4. Mobile Burger Navigation Menu ===
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuCloseBtn = document.getElementById('mobile-menu-close');

    if (menuBtn && mobileMenu) {
        const openMenu = () => {
            mobileMenu.classList.remove('hidden');
            // Force reflow
            mobileMenu.offsetHeight;
            mobileMenu.classList.add('opacity-100');
            mobileMenu.classList.remove('opacity-0');
            document.body.classList.add('overflow-hidden'); // Disable scroll
        };

        const closeMenu = () => {
            mobileMenu.classList.add('opacity-0');
            mobileMenu.classList.remove('opacity-100');
            document.body.classList.remove('overflow-hidden');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        };

        menuBtn.addEventListener('click', openMenu);
        if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);

        // Close when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
