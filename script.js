document.addEventListener('DOMContentLoaded', function () {
  // Revela seções ao entrar na tela
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Sombra/fundo da nav ao rolar
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('nav-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Menu do estúdio: troca a foto do viewer conforme a linha em foco
  var menuList = document.getElementById('menuList');
  var viewer = document.getElementById('menuViewer');
  if (menuList && viewer) {
    var rows = menuList.querySelectorAll('.menu-row');
    var imgs = viewer.querySelectorAll('img');
    var setActive = function (key) {
      imgs.forEach(function (img) {
        img.classList.toggle('is-active', img.getAttribute('data-key') === key);
      });
      rows.forEach(function (r) {
        r.classList.toggle('is-active', r.getAttribute('data-photo') === key);
      });
    };
    rows.forEach(function (row) {
      var key = row.getAttribute('data-photo');
      row.addEventListener('mouseenter', function () { setActive(key); });
      row.addEventListener('focus', function () { setActive(key); });
    });
  }
});
