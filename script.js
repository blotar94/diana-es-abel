/* ================================================================
   DIÁNA ÉS ÁBEL – script.js
   Témaváltás, navigáció, kisebb UX funkciók
   ================================================================ */

'use strict';

/* ----------------------------------------------------------------
   TÉMAVÁLTÁS
   ---------------------------------------------------------------- */

const THEME_KEY = 'diana-abel-theme';

function setTheme(theme) {
  const body = document.getElementById('body');
  const btnSzekely = document.getElementById('btn-szekely');
  const btnVadasz  = document.getElementById('btn-vadasz');

  if (!body) return;

  /* Átmenet animáció */
  body.classList.add('theme-transition');

  /* Osztályok cseréje */
  body.classList.remove('theme-szekely', 'theme-vadasz');
  body.classList.add('theme-' + theme);

  /* Gomb állapotok */
  if (btnSzekely && btnVadasz) {
    if (theme === 'szekely') {
      btnSzekely.classList.add('active');
      btnVadasz.classList.remove('active');
      btnSzekely.setAttribute('aria-pressed', 'true');
      btnVadasz.setAttribute('aria-pressed', 'false');
    } else {
      btnVadasz.classList.add('active');
      btnSzekely.classList.remove('active');
      btnVadasz.setAttribute('aria-pressed', 'true');
      btnSzekely.setAttribute('aria-pressed', 'false');
    }
  }

  /* Tárolás */
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    /* localStorage nem elérhető – csendesen folytatjuk */
  }

  /* Átmenet osztály eltávolítása */
  setTimeout(function () {
    body.classList.remove('theme-transition');
  }, 450);
}

/* Mentett téma visszaállítása */
function restoreTheme() {
  var saved;
  try {
    saved = localStorage.getItem(THEME_KEY);
  } catch (e) {
    saved = null;
  }

  if (saved === 'vadasz' || saved === 'szekely') {
    setTheme(saved);
  } else {
    /* Alapértelmezett: székelyruha */
    setTheme('szekely');
  }
}

/* ----------------------------------------------------------------
   MOBILNAVIGÁCIÓ
   ---------------------------------------------------------------- */

function toggleNav() {
  var nav    = document.getElementById('main-nav');
  var toggle = document.getElementById('nav-toggle');
  if (!nav || !toggle) return;

  var isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  toggle.setAttribute('aria-label',   isOpen ? 'Menü bezárása' : 'Menü megnyitása');

  /* Hamburger → X animáció */
  var bars = toggle.querySelectorAll('.hamburger-bar');
  if (isOpen) {
    bars[0].style.transform = 'translateY(9px) rotate(45deg)';
    bars[1].style.opacity   = '0';
    bars[2].style.transform = 'translateY(-9px) rotate(-45deg)';
  } else {
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  }
}

function closeNav() {
  var nav    = document.getElementById('main-nav');
  var toggle = document.getElementById('nav-toggle');
  if (!nav || !toggle) return;

  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü megnyitása');

    var bars = toggle.querySelectorAll('.hamburger-bar');
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  }
}

/* Kattintás oldal bármely pontján zárja be a menüt */
document.addEventListener('click', function (e) {
  var nav    = document.getElementById('main-nav');
  var toggle = document.getElementById('nav-toggle');
  var header = document.querySelector('.site-header');

  if (!nav || !nav.classList.contains('open')) return;
  if (header && header.contains(e.target)) return;

  closeNav();
});

/* Escape billentyű zárja be a menüt */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeNav();
});

/* ----------------------------------------------------------------
   FEJLÉC SCROLL ÁRNYÉK
   ---------------------------------------------------------------- */

(function () {
  var header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
    } else {
      header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.25)';
    }
  }, { passive: true });
}());

/* ----------------------------------------------------------------
   AKTÍV NAVIGÁCIÓ KIEMELÉSE (SCROLL)
   ---------------------------------------------------------------- */

(function () {
  var sections = document.querySelectorAll('section[id], .hero[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    var scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}());

/* ----------------------------------------------------------------
   GALÉRIA LIGHTBOX (egyszerű, natív)
   ---------------------------------------------------------------- */

(function () {
  function buildLightbox() {
    var overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Kép nagyítva');
    overlay.style.cssText = [
      'display:none',
      'position:fixed',
      'inset:0',
      'background:rgba(0,0,0,0.88)',
      'z-index:9999',
      'align-items:center',
      'justify-content:center',
      'padding:1rem',
      'cursor:zoom-out'
    ].join(';');

    var img = document.createElement('img');
    img.id = 'lightbox-img';
    img.style.cssText = [
      'max-width:94vw',
      'max-height:88vh',
      'border-radius:8px',
      'box-shadow:0 8px 48px rgba(0,0,0,0.7)',
      'object-fit:contain',
      'user-select:none'
    ].join(';');

    var caption = document.createElement('p');
    caption.id = 'lightbox-caption';
    caption.style.cssText = [
      'position:absolute',
      'bottom:1.5rem',
      'left:50%',
      'transform:translateX(-50%)',
      'color:#fff',
      'font-size:0.92rem',
      'background:rgba(0,0,0,0.55)',
      'padding:0.35rem 1rem',
      'border-radius:20px',
      'white-space:nowrap',
      'max-width:90vw',
      'overflow:hidden',
      'text-overflow:ellipsis'
    ].join(';');

    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Lightbox bezárása');
    closeBtn.style.cssText = [
      'position:absolute',
      'top:1rem',
      'right:1.25rem',
      'background:rgba(255,255,255,0.15)',
      'border:none',
      'color:#fff',
      'font-size:1.5rem',
      'width:44px',
      'height:44px',
      'border-radius:50%',
      'cursor:pointer',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'transition:background 0.2s'
    ].join(';');

    overlay.appendChild(img);
    overlay.appendChild(caption);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    function open(src, alt) {
      img.src = src;
      img.alt = alt || '';
      caption.textContent = alt || '';
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function close() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.style.display === 'flex') close();
    });

    return open;
  }

  var openLightbox = buildLightbox();

  /* Galériakép kattintás */
  document.addEventListener('click', function (e) {
    var item = e.target.closest('.gallery-item');
    if (!item) return;
    var img = item.querySelector('.gallery-img');
    var caption = item.querySelector('figcaption');
    if (img) {
      openLightbox(img.src, caption ? caption.textContent : img.alt);
    }
  });

  /* Billentyűzettel is aktiválható */
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var img = item.querySelector('.gallery-img');
        var caption = item.querySelector('figcaption');
        if (img) openLightbox(img.src, caption ? caption.textContent : img.alt);
      }
    });
  });
}());

/* ----------------------------------------------------------------
   LÁBLÉC ÉV
   ---------------------------------------------------------------- */

(function () {
  var el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}());

/* ----------------------------------------------------------------
   INICIALIZÁLÁS
   ---------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  restoreTheme();
});

/* Ha a DOM már betöltött (inline script esetén) */
if (document.readyState !== 'loading') {
  restoreTheme();
}
