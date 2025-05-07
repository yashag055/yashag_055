// Mobile Navigation Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
  this.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.menu ul li a').forEach(link => {
  link.addEventListener('click', function() {
      document.querySelector('.menu').classList.remove('active');
      document.querySelector('.hamburger').classList.remove('fa-times');
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
      });
  });
});

// Sticky Navigation on Scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
      nav.style.padding = '15px 0';
      nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  } else {
      nav.style.padding = '20px 0';
      nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Contact Form Submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will contact you soon.');
  this.reset();
});