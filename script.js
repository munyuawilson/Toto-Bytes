/* =========================================================
   YOUNG MINDS — Shared Scripts
   ========================================================= */
(function () {
  'use strict';

  /* ---- 1. Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close on link click (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 980) links.classList.remove('open');
      });
    });
  }

  /* ---- 2. Active nav highlight ---- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href && href === path) a.classList.add('active');
  });

  /* ---- 3. Footer year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- 4. WhatsApp widget (auto-injected) ---- */
  // Set your number in one place here. International format, no + or spaces.
  const WA_NUMBER = '254700000000'; // TODO: replace with real number
  const WA_MSG    = encodeURIComponent('Hi Young Minds! I would like to learn more about your tech skills programs.');
  if (!document.querySelector('.wa-widget')) {
    const wa = document.createElement('a');
    wa.className = 'wa-widget';
    wa.href = 'https://wa.me/' + WA_NUMBER + '?text=' + WA_MSG;
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('aria-label', 'Chat with Young Minds on WhatsApp');
    wa.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>';
    document.body.appendChild(wa);

    const tip = document.createElement('span');
    tip.className = 'wa-tooltip';
    tip.textContent = 'Chat with us on WhatsApp';
    document.body.appendChild(tip);
  }

  /* ---- 5. Reveal-on-scroll (subtle) ---- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      io.observe(el);
    });
  }
})();