// FUNCTION - SLIDE MENU
const navSlide = () => {
  
  // CONST
  const btnBurger = document.querySelector('.burger');
  const menuContent = document.querySelector('.menu-content');
  // const linkMenuOption = document.querySelectorAll('.nav__ul--li > a');

  btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('toggle')
    menuContent.classList.toggle('nav-active')
  });
}
navSlide();