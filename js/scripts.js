// scripts.js - JavaScript functionality for the portfolio template

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Navigation hamburger menu toggle
  const hamburger = document.querySelector('.navigation__hamburger');
  const navLinks = document.querySelector('.navigation__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
      if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when window is resized to desktop view
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Contact Form Handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    // Email validation helper
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Show error message
    function showError(input, message) {
      const formGroup = input.closest('.form-group');
      const existingError = formGroup.querySelector('.error-message');
      
      if (!existingError) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        formGroup.appendChild(errorDiv);
      }
    }

    // Clear error message
    function clearError(input) {
      const formGroup = input.closest('.form-group');
      const existingError = formGroup.querySelector('.error-message');
      if (existingError) {
        existingError.remove();
      }
    }

    // Handle form submission
    contactForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      let isValid = true;

      // Clear all previous error messages
      contactForm.querySelectorAll('.error-message').forEach(error => error.remove());

      // Validate name
      const nameInput = contactForm.querySelector('#name');
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your name');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate email
      const emailInput = contactForm.querySelector('#email');
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate subject
      const subjectInput = contactForm.querySelector('#subject');
      if (!subjectInput.value.trim()) {
        showError(subjectInput, 'Please enter a subject');
        isValid = false;
      } else {
        clearError(subjectInput);
      }

      // Validate message
      const messageInput = contactForm.querySelector('#message');
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Please enter your message');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Message must be at least 10 characters long');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.classList.add('loading');
        submitButton.disabled = true;

        try {
          // Send form data to Formspree
          const formData = new FormData(contactForm);
          const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            // Show success message
            contactForm.reset();
            alert('Thank you! Your message has been sent successfully.');
          } else {
            throw new Error('Form submission failed');
          }
        } catch (error) {
          alert('Sorry, there was an error sending your message. Please try again.');
        } finally {
          submitButton.classList.remove('loading');
          submitButton.disabled = false;
        }
      }
    });

    // Real-time validation
    contactForm.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('blur', function() {
        if (this.value.trim()) {
          if (this.type === 'email' && !isValidEmail(this.value.trim())) {
            showError(this, 'Please enter a valid email address');
          } else {
            clearError(this);
          }
        }
      });
    });
  }
}); 