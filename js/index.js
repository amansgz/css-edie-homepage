const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const navMenu = document.getElementById('nav-menu');
const nav_Menu = document.querySelector('.nav__menu');

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


document.addEventListener("click", (e) => {
    if (!e.target.matches(".nav__menu a")) return false;

    iconHamburger.classList.toggle('hidden');
    iconClose.classList.toggle('show');
    nav_Menu.classList.remove('nav__menu__show');
});
