const navbar = document.getElementById("myNavbar");
const pfp = document.getElementById("pfp");
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const contactForm = document.querySelector('#contact-form' )


fetch ( 'https://api.github.com/users/Jay-MM')
.then(function (response) {
  return response.json()
}) 
.then(function(data){
  // console.log(data)
  pfp.src = data.avatar_url
})

const handleSubmit = () => {
  (function () {
    emailjs.init('pr1RRftrdnA3UsIjc');
  })();

  const contactForm = document.getElementById('contact-form');
  const successToast = new bootstrap.Toast(document.getElementById('successToast'));
  const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));

  function handleResponse(response, toast) {
    console.log('SUCCESS!');

    contactForm.reset();

    toast.show();

  }
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('default_service', 'contact_form', contactForm)
    .then((response) => {
      if (response.status === 200) {
        handleResponse(response, successToast);
      } else {
        handleResponse(response, errorToast);
      }
    })
    .catch(function (error) {
      console.log('FAILED...', error);
      contactForm.reset();
      errorToast.show();
    });
})
}
handleSubmit()

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