// Simple section navigation — no animations, instant switching
(function () {
  'use strict';

  var sections = document.querySelectorAll('.section');
  var navLinks  = document.querySelectorAll('.nav-links a[data-section]');

  function showSection(id) {
    sections.forEach(function (s) {
      s.classList.toggle('active', s.id === id);
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.dataset.section === id);
    });
    window.scrollTo(0, 0);
    history.replaceState(null, '', '#' + id);
  }

  navLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      showSection(a.dataset.section);
    });
  });

  // Honour hash on load
  var initial = (window.location.hash || '#home').replace('#', '');
  var validIds = Array.from(sections).map(function (s) { return s.id; });
  showSection(validIds.includes(initial) ? initial : 'home');
})();
