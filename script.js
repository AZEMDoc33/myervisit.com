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

});
