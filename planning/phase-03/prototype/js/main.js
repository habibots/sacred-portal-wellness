/**
 * Sacred Portal - Main JavaScript
 * Handles all interactive components
 */

// Mobile Menu Toggle
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const backdrop = document.querySelector('.mobile-menu-backdrop');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.setAttribute('aria-hidden', isExpanded);
    
    if (backdrop) {
      backdrop.setAttribute('aria-hidden', isExpanded);
    }
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });
  
  // Close menu when clicking backdrop
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }
  
  // Close menu when clicking a link
  const menuLinks = menu.querySelectorAll('.mobile-menu-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      if (backdrop) {
        backdrop.setAttribute('aria-hidden', 'true');
      }
      document.body.style.overflow = '';
    });
  });
}

// Accordion
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion-trigger');
  
  accordions.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const content = trigger.nextElementSibling;
      
      trigger.setAttribute('aria-expanded', !isExpanded);
      content.setAttribute('aria-hidden', isExpanded);
      
      if (!isExpanded) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
}

// Modal
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal-trigger');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        openModal(modal);
      }
    });
  });
  
  const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');
  modalCloses.forEach(close => {
    close.addEventListener('click', () => {
      const modal = close.closest('.modal-backdrop');
      if (modal) {
        closeModal(modal);
      }
    });
  });
  
  // Close on backdrop click
  const backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal-backdrop:not([aria-hidden="true"])');
      if (openModal) {
        closeModal(openModal);
      }
    }
  });
}

function openModal(modal) {
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Focus first focusable element
  const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable) {
    focusable.focus();
  }
}

function closeModal(modal) {
  modal.setAttribute('aria-hidden', 'true');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      
      inputs.forEach(input => {
        const errorElement = input.parentElement.querySelector('.form-error');
        
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          if (errorElement) {
            errorElement.textContent = 'This field is required';
            errorElement.style.display = 'block';
          }
        } else {
          input.classList.remove('error');
          if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
          }
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('error');
            if (errorElement) {
              errorElement.textContent = 'Please enter a valid email address';
              errorElement.style.display = 'block';
            }
          }
        }
      });
      
      if (isValid) {
        // Form is valid, you can submit it here
        console.log('Form is valid, submitting...');
        // form.submit(); // Uncomment to actually submit
        
        // Show success message (for demo)
        alert('Form submitted successfully!');
      }
    });
    
    // Clear errors on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorElement = input.parentElement.querySelector('.form-error');
        if (errorElement) {
          errorElement.textContent = '';
          errorElement.style.display = 'none';
        }
      });
    });
  });
}

// Sticky Header
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// Scroll Reveal Animation
function initScrollReveal() {
  const reveals = document.querySelectorAll('[data-reveal]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
}

// Quantity Selector
function initQuantitySelectors() {
  const selectors = document.querySelectorAll('.quantity-selector');
  
  selectors.forEach(selector => {
    const input = selector.querySelector('.quantity-input');
    const decreaseBtn = selector.querySelector('.quantity-decrease');
    const increaseBtn = selector.querySelector('.quantity-increase');
    
    if (!input || !decreaseBtn || !increaseBtn) return;
    
    decreaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(input.value) || 1;
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });
    
    increaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(input.value) || 1;
      const max = parseInt(input.getAttribute('max')) || 99;
      if (currentValue < max) {
        input.value = currentValue + 1;
      }
    });
    
    input.addEventListener('input', () => {
      const value = parseInt(input.value) || 1;
      const min = parseInt(input.getAttribute('min')) || 1;
      const max = parseInt(input.getAttribute('max')) || 99;
      
      if (value < min) input.value = min;
      if (value > max) input.value = max;
    });
  });
}

// Active Navigation Link
function initActiveNavigation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.header-nav-link, .mobile-menu-link');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAccordions();
  initModals();
  initFormValidation();
  initStickyHeader();
  initScrollReveal();
  initQuantitySelectors();
  initActiveNavigation();
  
  console.log('Sacred Portal prototype initialized');
});

// Export functions for use in other scripts
window.SacredPortal = {
  openModal,
  closeModal
};
