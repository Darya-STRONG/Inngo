$(document).ready(function(){
  $('.carrousel').slick({
    arrows:true,
    dots:false,
    speed:500,
    sliderToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    waitForAnimate:true,
    variableWidth: true,
    responsive:[
      {
        breakpoint:992,
        settings:{
          sliderToShow: 2,

        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.slider-banner').slick({
    arrows:true,
    dots:false,
    speed:500,
    sliderToShow: 1,
    variableWidth: false,  
    infinite: true,
    slidesToScroll: 1,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 2000,
    fade: true,

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




// Замена хедера на хедер фиксирований при скролле страницы
const header = document.querySelector('.header');
const headerFixed = document.querySelector('.header-fixed');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > header.offsetTop) {
    header.style.display = 'none';
    headerFixed.style.display = 'block';
  } else {
    header.style.display = 'block';
    headerFixed.style.display = 'none';
  }
});



// Получаем ссылки на все элементы выпадающих меню
const dropdowns = document.querySelectorAll('.header-dropdown');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Добавляем обработчики событий для каждого выпадающего меню
dropdownToggles.forEach((dropdownToggle, index) => {
  dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    dropdowns[index].classList.toggle('open');
  });
});

// Обрабатываем событие клика вне выпадающего меню для каждого меню
document.addEventListener('click', function(event) {
  dropdowns.forEach((dropdown) => {
    const target = event.target;
    if (!dropdown.contains(target)) {
      dropdown.classList.remove('open');
    }
  });
});



//Фильтрация стран при вводе текста в инпут
function filterCountries() {
  let input, filter, dropdown, countries, a, i;
  input = document.getElementById("countryInput");
  filter = input.value.toUpperCase();
  dropdown = document.getElementById("countryDropdown");
  countries = dropdown.getElementsByTagName("a");
  
  for (i = 0; i < countries.length; i++) {
    a = countries[i];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      a.style.display = "";
    } else {
      a.style.display = "none";
    }
  }
}


//Навешивание класа active на вибраную цифру в инпуте aduits
document.addEventListener('DOMContentLoaded', function() {
  let travelerItems = document.querySelectorAll('.item__traveler a');

  travelerItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();

      // Знаходимо батьківський контейнер
      let parentContainer = this.closest('.wrap__traveler');

      // Знаходимо всі елементи в поточній категорії
      let categoryItems = parentContainer.querySelectorAll('.item__traveler a');

      // Перевіряємо, чи вже вибраний номерок в поточній категорії
      if (this.classList.contains('active')) {
        // Не змінюємо стан, якщо вже вибраний
        return;
      }

      // Відключаємо активний клас у всіх елементах поточної категорії
      categoryItems.forEach(function(item) {
        item.classList.remove('active');
      });

      // Додаємо активний клас до поточного елемента
      this.classList.add('active');
    });
  });
});

