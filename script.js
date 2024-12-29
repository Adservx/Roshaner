// Sticky Navigation
window.onscroll = function() {stickyNav()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Typing Effect
const text = document.querySelector('.typing-effect');
const originalText = text.textContent;
text.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        text.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Animate on scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Image loading animation
document.querySelectorAll('img').forEach(img => {
    img.classList.add('loading');
    img.onload = () => {
        img.classList.remove('loading');
    };
});

// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation for headings
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Apply typing animation to main heading
window.addEventListener('load', () => {
    const mainHeading = document.querySelector('header h1');
    const originalText = mainHeading.textContent;
    typeWriter(mainHeading, originalText);
});

// Parallax effect for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Skills progress animation
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.querySelector('.icon-wrapper i').style.animation = 'rotate 1s linear infinite';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.querySelector('.icon-wrapper i').style.animation = 'none';
    });
});

// Form submission animation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button');
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Sent!';
        button.style.backgroundColor = '#28a745';
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            button.style.backgroundColor = '';
            this.reset();
        }, 2000);
    }, 1500);
});

// Form handling
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Add your form submission logic here
    alert(`Thank you ${name}! Your message has been sent.`);
    event.target.reset();
    return false;
}

// Initialize
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', () => {
    typeWriter();
    checkScroll();
});
