// ============================================
//  myervisit.com — Shared JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll behavior ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Mobile menu ----
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('active');
      mobileMenu && mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // ---- AOS Init ----
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 680, once: true, offset: 50, easing: 'ease-out-cubic' });
  }

  // ---- Blog category filter ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const blogCards = document.querySelectorAll('.blog-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      blogCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ============================================
  //  Subtle motion layer (2026 refresh)
  // ============================================
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Scroll progress bar ----
  const progress = document.getElementById('scrollProgress');
  if (progress && !reduceMotion) {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${Math.min(Math.max(pct, 0), 1)})`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }

  // ---- Typewriter: navbar brand "Eric Cummins, MD" ----
  const navTypedEl = document.getElementById('navTyped');
  if (navTypedEl) {
    const fullText = 'Eric Cummins, MD';
    const cursor = document.querySelector('.nav-cursor');
    if (reduceMotion) {
      navTypedEl.textContent = fullText;
      if (cursor) cursor.classList.add('typed-done');
    } else {
      let i = 0;
      const type = () => {
        if (i <= fullText.length) {
          navTypedEl.textContent = fullText.slice(0, i);
          i++;
          const delay = fullText[i - 1] === ',' ? 300 : 62;
          setTimeout(type, delay);
        } else if (cursor) {
          cursor.classList.add('typed-done');
        }
      };
      setTimeout(type, 400); // starts quickly as page loads
    }
  }

  // ---- Count-up on the 15+ badge ----
  const badge = document.getElementById('badgeCount');
  if (badge) {
    const target = parseInt(badge.dataset.target, 10) || 15;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      badge.textContent = target + '+';
    } else {
      badge.textContent = '0+';
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const duration = 1200;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
            badge.textContent = Math.round(eased * target) + '+';
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.6 });
      io.observe(badge);
    }
  }

  // ---- Gentle hero parallax drift ----
  const heroShape = document.querySelector('.hero-bg-shape');
  if (heroShape && !reduceMotion) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          heroShape.style.transform = `translateY(${y * 0.08}px)`;
        }
        ticking = false;
      });
    }, { passive: true });
  }

});
