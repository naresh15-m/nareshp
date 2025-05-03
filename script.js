document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Sidebar toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        });
    });
    
    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
    
    // Dark/Light mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleHeader = document.getElementById('theme-toggle-header');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        themeToggleHeader.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    function toggleTheme() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            themeToggleHeader.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            themeToggleHeader.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleHeader) {
        themeToggleHeader.addEventListener('click', toggleTheme);
    }
    
    // Typing animation for hero section
    const typingText = document.querySelector('.typing-text');
    const typingDescription = document.querySelector('.typing-description');
    const texts = ["Naresh Malyavantham", "a Full Stack Web Developer","Python Developer"];
    const descriptions = [
        "Recent graduate passionate about developing efficient code and solving complex problems.",
        "Eager to join a dynamic team where I can contribute my skills in Python and full-stack development.",
        "Let's build something amazing together!"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        const currentDescription = descriptions[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            typingDescription.textContent = currentDescription;
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            isEnd = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        const speed = isDeleting ? 50 : isEnd ? 2000 : 150;
        setTimeout(typeText, speed);
    }
    
    setTimeout(typeText, 1000);
    
    // Animate skill bars on scroll
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
            bar.style.width = width;
        });
    }
    
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                if (entry.target.classList.contains('skills-container')) {
                    animateSkills();
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe sections
    const sectionsToAnimate = document.querySelectorAll('.about-img, .about-text, .skill-category, .experience-item, .project-card, .education-item, .certification-card');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
    
    // Rotate experience cards on hover
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'rotate(1deg)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'rotate(0)';
        });
    });
});