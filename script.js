// Travello-Inspired JavaScript for Anubhav Travels

const defaultConfig = {
  background_color: "#ffffff",
  surface_color: "#f8f9fa",
  text_color: "#212529",
  primary_action_color: "#1e88e5",
  secondary_action_color: "#1565c0",
  font_family: "Playfair Display",
  font_size: 16,
  hero_title: "Explore Delhi Tourism & Beyond",
  hero_subtitle: "Your trusted travel partner for memorable experiences. We provide complete travel arrangements with highest level of satisfaction.",
  cta_button: "Plan Your Journey",
  destinations_title: "Popular Destinations",
  booking_title: "Plan Your Journey",
  testimonials_title: "What Travelers Say",
  footer_text: "© 2024 Anubhav Travels - Time 2 Journey. All rights reserved."
};

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Active nav link on scroll
window.addEventListener('scroll', function() {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Booking form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const form = document.getElementById('booking-form');
  const successMessage = document.getElementById('booking-success');
  
  // Hide form
  form.style.display = 'none';
  
  // Show success message
  successMessage.classList.remove('d-none');
  
  // Reset form after 5 seconds
  setTimeout(() => {
    form.reset();
    form.style.display = 'block';
    successMessage.classList.add('d-none');
  }, 5000);
});

// Search form submission
document.querySelector('.search-form-card form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Search functionality will be implemented soon!');
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.service-card, .destination-card, .testimonial-card');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// SDK Configuration Functions
async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Poppins, system-ui, -apple-system, sans-serif';
  const displayFontStack = 'Georgia, serif';
  const baseSize = config.font_size || defaultConfig.font_size;
  
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;

  // Apply background color
  document.body.style.backgroundColor = backgroundColor;
  
  // Apply surface colors
  document.querySelectorAll('.service-card, .destination-card, .testimonial-card, .booking-card, .search-form-card').forEach(el => {
    el.style.backgroundColor = surfaceColor;
  });
  
  // Apply text color
  document.body.style.color = textColor;
  document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, label, input, select, textarea, li').forEach(el => {
    el.style.color = textColor;
  });
  
  // Apply primary action color
  document.querySelectorAll('.btn-primary, .search-btn, .booking-submit, .service-icon, .destination-badge').forEach(el => {
    el.style.backgroundColor = primaryActionColor;
    el.style.borderColor = primaryActionColor;
  });
  
  // Apply fonts
  document.getElementById('nav-brand').style.fontFamily = `${customFont}, ${displayFontStack}`;
  document.getElementById('hero-title').style.fontFamily = `${customFont}, ${displayFontStack}`;
  document.querySelectorAll('.section-title').forEach(el => {
    el.style.fontFamily = `${customFont}, ${displayFontStack}`;
  });
  
  document.querySelectorAll('p, span, a, label, input, select, textarea, button').forEach(el => {
    el.style.fontFamily = `${customFont}, ${baseFontStack}`;
  });

  // Apply font sizes
  document.getElementById('nav-brand').style.fontSize = `${baseSize * 1.5}px`;
  document.getElementById('hero-title').style.fontSize = `${baseSize * 3.5}px`;
  document.getElementById('hero-subtitle').style.fontSize = `${baseSize * 1.25}px`;
  document.getElementById('cta-button').style.fontSize = `${baseSize * 1.125}px`;
  
  document.querySelectorAll('.section-title').forEach(el => {
    el.style.fontSize = `${baseSize * 2.5}px`;
  });
  
  document.querySelectorAll('p, span, a, label, input, select, textarea').forEach(el => {
    el.style.fontSize = `${baseSize}px`;
  });

  // Update text content
  document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
  document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById('cta-button').textContent = config.cta_button || defaultConfig.cta_button;
  document.getElementById('destinations-title').textContent = config.destinations_title || defaultConfig.destinations_title;
  document.getElementById('booking-title').textContent = config.booking_title || defaultConfig.booking_title;
  document.getElementById('testimonials-title').textContent = config.testimonials_title || defaultConfig.testimonials_title;
  document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ background_color: value });
          }
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ surface_color: value });
          }
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ primary_action_color: value });
          }
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ secondary_action_color: value });
          }
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_family: value });
        }
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["hero_title", config.hero_title || defaultConfig.hero_title],
    ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
    ["cta_button", config.cta_button || defaultConfig.cta_button],
    ["destinations_title", config.destinations_title || defaultConfig.destinations_title],
    ["booking_title", config.booking_title || defaultConfig.booking_title],
    ["testimonials_title", config.testimonials_title || defaultConfig.testimonials_title],
    ["footer_text", config.footer_text || defaultConfig.footer_text]
  ]);
}

// Initialize SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-section');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Mobile menu close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});
