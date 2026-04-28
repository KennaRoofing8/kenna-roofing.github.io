/**
 * KENNA ROOFING — components.js
 * Injects: Navbar, Quote Modal, Footer
 * 
 * Usage: Add <script src="components.js"></script> before </body>
 * Set data-page="pagename" on <body> to highlight the active nav link.
 * 
 * Example: <body data-page="about">
 * Valid page values: home, about, services, our-work, contact, quote
 */

(function () {
  // ──────────────────────────────────────────────
  // NAVBAR HTML
  // ──────────────────────────────────────────────
  const navbarHTML = `
  <header class="navbar">
    <div class="nav-container">
      <div class="logo">
        <a href="index.html" class="logo-text">Kenna Roofing</a>
      </div>

      <!-- Hamburger Icon -->
      <div class="menu-toggle" id="mobile-menu" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <ul class="nav-links" id="nav-links">
        <li><a href="about.html" data-nav="about">About</a></li>
        <li class="dropdown">
          <a href="#" data-nav="services">Services ▾</a>
          <ul class="dropdown-menu">
            <li><a href="roofs.html">Roofs</a></li>
            <li><a href="gutters.html">Gutters</a></li>
            <li><a href="siding.html">Siding</a></li>
            <li><a href="storm-repair.html">Storm Repair</a></li>
            <li><a href="painting.html">Painting</a></li>
            <li><a href="other-improvements.html">Other Improvements</a></li>
          </ul>
        </li>
        <li><a href="our-work.html" data-nav="our-work">Our Work</a></li>
        <li>
          <button class="quote-btn open-quote-modal" aria-haspopup="dialog">
            Free Quote
          </button>
        </li>
      </ul>
    </div>
  </header>`;

  // ──────────────────────────────────────────────
  // QUOTE MODAL HTML
  // ──────────────────────────────────────────────
  const modalHTML = `
  <div class="modal-overlay" id="quoteModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-box">
      <button class="modal-close" id="closeModal" aria-label="Close modal">&times;</button>
      <h2 id="modalTitle">Get a Free Quote</h2>
      <p>Fill out the form below and we'll get back to you as soon as possible.</p>
      <form class="modal-form" id="quoteForm" action="#" method="post">
        <div class="modal-row">
          <input type="text" name="name" placeholder="Your Name" required>
          <input type="email" name="email" placeholder="Your Email" required>
        </div>
        <input type="tel" name="phone" placeholder="Your Phone Number" required>
        <textarea name="message" placeholder="Tell us about your project..." rows="4"></textarea>
        <button type="submit" class="modal-submit">Send Request</button>
      </form>
    </div>
  </div>`;

  // ──────────────────────────────────────────────
  // FOOTER HTML
  // ──────────────────────────────────────────────
  const footerHTML = `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <a href="index.html" class="footer-logo-text">Kenna Roofing</a>
        <p class="footer-tagline">Connecticut's trusted home improvement specialists since 1996.</p>
      </div>

      <div class="footer-column">
        <h3>Information</h3>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="our-work.html">Our Work</a></li>
          <li><a href="photo-gallery.html">Photo Gallery</a></li>
          <li><a href="quote.html">Free Quote</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Services</h3>
        <ul>
          <li><a href="roofs.html">Roofs</a></li>
          <li><a href="gutters.html">Gutters</a></li>
          <li><a href="siding.html">Siding</a></li>
          <li><a href="storm-repair.html">Storm Repair</a></li>
          <li><a href="painting.html">Painting</a></li>
          <li><a href="other-improvements.html">Other Improvements</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Contact Us</h3>
        <ul class="contact-list">
          <li><i data-lucide="phone"></i>(203) 824-3843</li>
          <li><i data-lucide="mail"></i>KennaRoofingLLC@yahoo.com</li>
          <li><i data-lucide="shield-check"></i>Fully Insured &middot; Lic.&nbsp;#&nbsp;0629999</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Kenna Roofing. All rights reserved.</p>
      <p><a href="https://www.qualnexsolutions.com" target="_blank" rel="noopener">Website design by Qualnex Solutions</a></p>
    </div>
  </footer>`;

  // ──────────────────────────────────────────────
  // INJECT COMPONENTS
  // ──────────────────────────────────────────────
  function inject() {
    // Navbar — prepend to body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Modal — after navbar
    document.body.insertAdjacentHTML('afterbegin', modalHTML);

    // Footer — append to body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Re-run Lucide icons after footer injection
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // ── ACTIVE NAV LINK ──
    const page = document.body.getAttribute('data-page');
    if (page) {
      const link = document.querySelector(`[data-nav="${page}"]`);
      if (link) link.classList.add('active');
    }

    // ── HAMBURGER MENU ──
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      // Mobile: tap on Services to toggle dropdown
      const dropdownToggle = navLinks.querySelector('.dropdown > a');
      if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
          if (window.innerWidth <= 900) {
            e.preventDefault();
            dropdownToggle.closest('.dropdown').classList.toggle('open');
          }
        });
      }

      // Close menu on outside click
      document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
        }
      });
    }

    // ── QUOTE MODAL ──
    const overlay = document.getElementById('quoteModal');
    const closeBtn = document.getElementById('closeModal');
    const openBtns = document.querySelectorAll('.open-quote-modal');

    function openModal() {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on backdrop click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });

    // Form submission placeholder
    const form = document.getElementById('quoteForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.innerHTML = `
          <div style="text-align:center; padding: 24px 0;">
            <p style="font-size:1.1rem; font-weight:600; color:var(--green); margin-bottom:8px;">
              ✓ Request Sent!
            </p>
            <p style="color:var(--gray-text);">We'll be in touch with you shortly.</p>
          </div>`;
      });
    }
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
