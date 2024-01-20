const navbar = document.getElementById("myNavbar");
const pfp = document.getElementById("pfp");
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');

fetch ( 'https://api.github.com/users/Jay-MM')
.then(function (response) {
  return response.json()
}) 
.then(function(data){
  console.log(data)
  pfp.src = data.avatar_url
})

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