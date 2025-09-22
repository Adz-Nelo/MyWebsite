let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(section => {
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /*sticky navbar*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky',window.scrollY > 100);

  
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .home-content h3, .services-container, .portfolio-box, .contact form, .tech-stack img',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content h3, .home-content h2, .about-content', {origin: 'right'});

// typed js
const typed = new Typed('.multiple-txt', {
  strings: ['Frontend Developer','Game Developer','Web Developer','Photoshop Editor','Web Designer','Video Editor'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1500,
  startDelay: 1500,
  loop: true
});

// Send Email
function sendMail(event) {
  event.preventDefault(); // stop form reload

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    subject: document.getElementById("subject").value,
    text: document.getElementById("text").value
  };

  // Send to Admin (you)
  emailjs.send("service_wj3bf4s", "template_gzgrcct", params)
    .then(() => {
      console.log("Admin Email Sent!");
    })
    .catch((error) => console.error("Admin Email Failed:", error));

  // Send Auto-Reply to User
  emailjs.send("service_wj3bf4s", "template_7wfh0jo", params)
    .then(() => {
      alert("Your message has been sent and you’ll get an auto-reply soon!");
    })
    .catch((error) => console.error("User Auto-Reply Failed:", error));
}
