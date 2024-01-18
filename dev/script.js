const navbar = document.getElementById("myNavbar");
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');

function closeNavbar() {
  if (navbarToggler.getAttribute('aria-expanded') === 'true') {
    navbarToggler.click();
  }
}

function addClickEventListeners() {
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNavbar);
  });
}

function navbarFn() {
  addClickEventListeners();

}


navbarFn();