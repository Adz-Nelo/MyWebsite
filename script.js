// EmailJS init
emailjs.init({ publicKey: "MegHCkMWcbWhjN5Xv" });

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector('header');

// Throttled scroll handler
let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            let top = window.scrollY;

            sections.forEach(section => {
                let offset = section.offsetTop - 150;
                let height = section.offsetHeight;
                let id = section.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (activeLink) activeLink.classList.add('active');
                }
            });

            header.classList.toggle('sticky', top > 100);

            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');

            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .home-content h3, .services-container, .portfolio-box, .contact form, .tech-stack img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content h3, .home-content h2, .about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-txt', {
    strings: ['Frontend Developer', 'Game Developer', 'Web Developer', 'Photoshop Editor', 'Web Designer', 'Graphic Designer', 'Video Editor', 'Freelancer', 'Software Engineer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 1500,
    loop: true
});

// Dark Mode Toggle
let btn = document.getElementById("btn");
let btnIcon = document.getElementById("btnIcon");

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-theme');
        document.documentElement.setAttribute('data-theme', 'dark');
        btnIcon.src = "img/moon.svg";
    } else {
        document.body.classList.remove('dark-theme');
        document.documentElement.removeAttribute('data-theme');
        btnIcon.src = "img/sun.svg";
    }
}

btn.onclick = function () {
    const isDark = !document.body.classList.contains('dark-theme');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Set initial theme (data-theme may already be set by inline head script)
applyTheme(localStorage.getItem('theme') === 'dark');

// Phone number: digits only
document.getElementById("number").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => { toast.className = 'toast'; }, 4000);
}

// Send Email
function sendMail(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_wj3bf4s", "template_jllc5j4", params)
        .then(() => {
            emailjs.send("service_wj3bf4s", "template_7wfh0jo", params)
                .catch((err) => console.warn("Auto-reply failed:", err));
            showToast("Message sent successfully! You'll get an auto-reply soon.");
            form.reset();
        })
        .catch((error) => {
            console.error("Email send failed:", error);
            const isOverLimit = error?.status === 429 || error?.status === 402
                || String(error?.text).toLowerCase().includes("limit");
            if (isOverLimit) {
                showToast("We apologize for the inconvenience — our message limit has been reached. Please come back next month!", "error");
            } else {
                showToast("Failed to send message. Please try again.", "error");
            }
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.value = "Send Message";
        });
}
