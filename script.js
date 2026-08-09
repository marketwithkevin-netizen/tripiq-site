(function () {
  var button = document.querySelector('.nav-toggle');
  var links = document.getElementById('site-links');
  if (!button || !links) return;

  button.addEventListener('click', function () {
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open', !expanded);
  });

  links.addEventListener('click', function (event) {
    if (event.target && event.target.tagName === 'A') {
      button.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      button.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  });
}());
