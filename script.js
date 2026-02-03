// Immediate function to ensure header visibility with direct inline styles
(function () {
    // Force header visibility by applying inline styles with highest priority
    const nav = document.querySelector('.main-nav');
    if (nav) {
        nav.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 999999 !important;
            visibility: visible !important;
            opacity: 1 !important;
            display: flex !important;
            background-color: var(--nav-bg) !important;
            width: 100% !important;
        `;
        nav.classList.add('js-fix-header');

        // Ensure main content doesn't hide under the header
        const main = document.querySelector('main');
        if (main) {
            main.style.paddingTop = '90px';
        }
    }
})();

// Add featured image section animations
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const options = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.textContent);
                const duration = 2000; // 2 seconds
                const steps = 50;
                const stepValue = targetValue / steps;
                let currentStep = 0;

                const counter = setInterval(() => {
                    currentStep++;
                    const progress = Math.min(currentStep / steps, 1);
                    const currentValue = Math.floor(progress * targetValue);
                    target.textContent = currentValue + "+";

                    if (currentStep >= steps) {
                        clearInterval(counter);
                    }
                }, duration / steps);

                observer.unobserve(target);
            }
        });
    }, options);

    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// Theme Management - Immediate execution to prevent FOUC
const ThemeManager = {
    getStoredTheme: () => {
        try {
            return localStorage.getItem("theme");
        } catch (e) {
            console.warn("ThemeManager: Unable to access localStorage", e);
            return null;
        }
    },
    getSystemTheme: () => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    },

    getActiveTheme: function () {
        const stored = this.getStoredTheme();
        if (stored) {
            console.log(`ThemeManager: Using stored preference: ${stored}`);
            return stored;
        }
        const system = this.getSystemTheme();
        console.log(`ThemeManager: Using system preference: ${system}`);
        return system;
    },

    applyTheme: function (theme) {
        // Toggle body class
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }

        // Update header border if scrolled
        const nav = document.querySelector('.main-nav');
        if (nav && window.scrollY > 50) {
            nav.style.borderBottom = theme === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)';
        }

        // Notify header iframe
        const headerFrame = document.querySelector('iframe[src*="header.html"]');
        if (headerFrame && headerFrame.contentWindow) {
            try {
                headerFrame.contentWindow.postMessage({
                    type: 'update-theme',
                    isDark: theme === 'dark'
                }, '*');
            } catch (e) {
                console.error('Error communicating with header iframe:', e);
            }
        }
    },

    updateIcons: function (isDark) {
        const icons = document.querySelectorAll('.theme-toggle i');
        icons.forEach(icon => {
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    },

    init: function () {
        // Apply initial theme immediately
        this.applyTheme(this.getActiveTheme());

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = (e) => {
                if (!this.getStoredTheme()) {
                    console.log(`ThemeManager: System theme changed to ${e.matches ? "dark" : "light"}`);
                    this.applyTheme(e.matches ? "dark" : "light");
                    this.updateIcons(e.matches);
                } else {
                    console.log("ThemeManager: Ignoring system change due to stored preference");
                }
            };

            // Support both modern and legacy listener methods
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', handleChange);
            } else if (mediaQuery.addListener) {
                mediaQuery.addListener(handleChange);
            }
        }
    }
};

// Initialize theme immediately
ThemeManager.init();

// Projects filtering functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize stats animation
    animateStats();

    // Apply animation to project cards on page load
    const allProjectCards = document.querySelectorAll('.project-card');
    allProjectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('.main-nav');

        // Force visibility with every scroll event
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
        nav.style.display = 'flex';

        // Apply appropriate styling based on scroll position
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = 'var(--shadow-md)';
            // Use the CSS variable for background color to respect dark mode
            nav.style.background = 'var(--nav-bg)';
            // Use a CSS variable for border color in dark mode
            nav.style.borderBottom = document.body.classList.contains('dark-theme')
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.padding = '16px 0';
            nav.style.boxShadow = 'var(--shadow)';
            nav.style.background = 'var(--nav-bg)';
            nav.style.borderBottom = 'none';
        }
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filterValue = this.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                // Show all projects if 'all' filter is selected
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.classList.remove('hidden');
                    }, 10);
                } else {
                    // Get card categories
                    const categories = card.getAttribute('data-category').split(' ');

                    // Check if card has the selected category
                    if (categories.includes(filterValue)) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.classList.remove('hidden');
                        }, 10);
                    } else {
                        card.classList.add('hidden');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300); // Match this with CSS transition time
                    }
                }
            });
        });
    });



    // Dark mode functionality - Event Listeners
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');

    // Initial icon update based on current state
    const currentTheme = ThemeManager.getActiveTheme();
    ThemeManager.updateIcons(currentTheme === 'dark');

    function handleThemeToggle() {
        const isDark = document.body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';

        // Save preference
        localStorage.setItem("theme", newTheme);

        // Apply new theme
        ThemeManager.applyTheme(newTheme);
        ThemeManager.updateIcons(newTheme === 'dark');
    }

    if (themeToggle) themeToggle.addEventListener('click', handleThemeToggle);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', handleThemeToggle);

    // Back to top button functionality
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile sidebar functionality
    const hamburger = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('closeSidebar');

    if (hamburger && sidebar && overlay && closeBtn) {
        // Toggle sidebar function
        function toggleSidebar() {
            sidebar.classList.toggle('active');
            overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        }

        // Event listeners for mobile menu
        hamburger.addEventListener('click', toggleSidebar);
        hamburger.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                toggleSidebar();
                e.preventDefault();
            }
        });

        closeBtn.addEventListener('click', toggleSidebar);
        closeBtn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                toggleSidebar();
                e.preventDefault();
            }
        });

        overlay.addEventListener('click', toggleSidebar);

        // Close sidebar when clicking a mobile nav link
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', toggleSidebar);
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });

            // Close mobile sidebar if open
            const mobileSidebar = document.getElementById('mobileSidebar');
            const sidebarOverlay = document.getElementById('sidebarOverlay');

            if (mobileSidebar && mobileSidebar.classList.contains('active')) {
                mobileSidebar.classList.remove('active');
                if (sidebarOverlay) {
                    sidebarOverlay.style.display = 'none';
                }
                document.body.style.overflow = '';
            }
        }
    });
});

// Video Modal Functionality
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const closeVideoModal = document.querySelector('.close-video-modal');
const videoTriggers = document.querySelectorAll('.video-trigger');

if (videoModal && videoFrame && videoTriggers.length > 0) {

    // Open modal
    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const videoSrc = this.getAttribute('data-video-src');
            if (videoSrc) {
                videoFrame.src = videoSrc;
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal function
    const closeModal = () => {
        videoModal.classList.remove('active');
        // Wait for transition to finish before clearing src specifically
        setTimeout(() => {
            videoFrame.src = '';
        }, 300);
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close on X click
    if (closeVideoModal) {
        closeVideoModal.addEventListener('click', closeModal);
    }

    // Close on outside click
    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Scroll reveal animations
// Use window events to trigger scroll reveal, but check function existence first
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


function revealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
} 