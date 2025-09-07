// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close menu after click (mobile)
    document.getElementById('navMenu').classList.remove('active');
  });
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Simple form handler
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();
  message.textContent = "✅ Thank you! We will get back to you soon.";
  form.reset();
});