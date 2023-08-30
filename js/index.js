const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const navMenu = document.getElementById('nav-menu');

iconHamburger.addEventListener('click', e => {
  iconHamburger.classList.toggle('hidden');
  iconClose.classList.add('show');
  navMenu.classList.add('nav__menu__show');
});

iconClose.addEventListener('click', () => {
  iconHamburger.classList.toggle('hidden');
  iconClose.classList.toggle('show');
  navMenu.classList.remove('nav__menu__show');
})
