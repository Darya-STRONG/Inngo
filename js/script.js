$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:false,
    speed:500,
    sliderToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    waitForAnimate:true,
    variableWidth: true,  
  });
});
$(document).ready(function(){
  $('.slider-banner').slick({
    arrows:true,
    dots:false,
    speed:500,
    sliderToShow: 1,
    variableWidth: true,  
    infinite: true,
    slidesToScroll: 1,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 2000,

  });
});

if ($(window).width() >= 992) {
  standartWidth(1440);
  $(window).resize(function () {
    if ($(window).width() >= 992) {
      standartWidth(1440);
    } else {
      standartWidth(360);
    }
  });
} else {
  standartWidth(360);
  $(window).resize(function () {
    if ($(window).width() >= 992) {
      standartWidth(1440);
    } else {
      standartWidth(360);
    }
  });
};

// document.addEventListener("click", function(event) {
//   const target = event.target;
//   if (!target.closest(".nav__item")) {
//     const dropdownMenus = document.querySelectorAll(".dropdown-menu");
//     dropdownMenus.forEach(function(menu) {
//       menu.style.display = "none";
//     });
//   }
// });


const burgerMenu = document.querySelector('.burger-menu');
const menuButton = document.querySelector('.burger-menu__button');
const closeButton = document.querySelector('.burger-menu__close');

menuButton.addEventListener('click', function() {
  burgerMenu.classList.add('open');
  menuButton.style.display = 'none';
  closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  burgerMenu.classList.remove('open');
  menuButton.style.display = 'block';
  closeButton.style.display = 'none';
});

// код для закриття меню при натисканні на інше місце на сторінці
document.addEventListener('click', function(event) {
  const target = event.target;
  const isMenuOpen = burgerMenu.classList.contains('open');
  const isMenuButton = target.classList.contains('burger-menu__button');
  const isCloseButton = target.classList.contains('burger-menu__close');
  const isMenu = target.classList.contains('burger-menu');
  
  if (isMenuOpen && !isMenuButton && !isCloseButton && !isMenu) {
    burgerMenu.classList.remove('open');
    menuButton.style.display = 'block';
    closeButton.style.display = 'none';
  }
});