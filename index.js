const h1 = document.querySelector(".header-red");

h1.addEventListener('click', () => {
  if (h1.classList.contains('header-red')) {
    h1.classList.remove('header-red');
    h1.classList.add('header-blue');
  } else {
    h1.classList.remove('header-blue');
    h1.classList.add('header-red');
  }
})