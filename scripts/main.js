/* ====================================================
   SHAPES OF LIFE — main.js
   ==================================================== */

(function () {
  'use strict';

  // ---- Cart State ----
  let cartCount = 0;

  function updateCartDisplay() {
    const countEls = document.querySelectorAll('.nav__cart-count');
    countEls.forEach(el => {
      el.textContent = cartCount;
      el.classList.toggle('is-visible', cartCount > 0);
    });
  }

  // Expose globally so pages can call it
  window.SOL = window.SOL || {};
  window.SOL.addToCart = function () {
    cartCount += 1;
    updateCartDisplay();
    // Brief visual feedback on button
    const btn = document.querySelector('.js-add-to-cart');
    if (btn) {
      const original = btn.textContent;
      btn.textContent = 'Added ✓';
      setTimeout(() => { btn.textContent = original; }, 1800);
    }
  };

  // ---- Mobile Nav ----
  function initMobileNav() {
    const hamburger = document.querySelector('.nav__hamburger');
    const drawer = document.querySelector('.nav__mobile-drawer');
    if (!hamburger || !drawer) return;

    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      drawer.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        drawer.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Nav scroll tint ----
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 1px 0 rgba(0,1,2,0.06)'
        : 'none';
    }, { passive: true });
  }

  // ---- Acquire / Add buttons ----
  function initAcquireButtons() {
    // Collection page "Acquire" links
    document.querySelectorAll('.js-acquire').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.SOL.addToCart();
      });
    });

    // Detail page "Add to Collection"
    const addBtn = document.querySelector('.js-add-to-cart');
    if (addBtn) {
      addBtn.addEventListener('click', () => window.SOL.addToCart());
    }
  }

  // ---- Intersection Observer: fade-in on scroll ----
  function initFadeIn() {
    const targets = document.querySelectorAll('[data-fade]');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const style = document.createElement('style');
    style.textContent = `
      [data-fade] { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
      [data-fade].is-visible { opacity: 1; transform: none; }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    targets.forEach(el => observer.observe(el));
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initNavScroll();
    initAcquireButtons();
    initFadeIn();
    updateCartDisplay();
  });
})();
