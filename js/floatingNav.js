// Minimize/expand floating nav (sans dépendance)
document.addEventListener('DOMContentLoaded', function() {
  var nav = document.getElementById('floatingNav');
  var btn = document.getElementById('minimizeNav');
  var minimized = false;

  btn.addEventListener('click', function() {
    minimized = !minimized;
    nav.classList.toggle('minimized', minimized);
    btn.textContent = minimized ? '+' : '-';
    btn.setAttribute('aria-label', minimized ? 'Agrandir la navigation' : 'Réduire la navigation');
  });
});
