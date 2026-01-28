document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Close navbar when clicking outside
  document.addEventListener('click', function(e) {
    if (
      navbar.classList.contains('show') &&
      !navbar.contains(e.target) &&
      !navbarToggler.contains(e.target)
    ) {
      navbar.classList.remove('show');
    }
  });

  // Optional: Close navbar when a link inside is clicked
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    });
  });
});
