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


// Отримуємо посилання на всі елементи випадаючих меню
const dropdowns = document.querySelectorAll('.header-dropdown');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Додаємо обробники подій для кожного випадаючого меню
dropdownToggles.forEach((dropdownToggle, index) => {
  dropdownToggle.addEventListener('mouseover', function(event) {
    event.preventDefault(); // Попереджаємо перехід за посиланням
    dropdowns[index].classList.add('open');
  });
});

dropdownMenus.forEach((dropdownMenu) => {
  dropdownMenu.addEventListener('mouseleave', function(event) {
    dropdownMenu.closest('.header-dropdown').classList.remove('open');
  });
});


//Фильтрация стран при вводе текста в инпут
function filterCountries() {
  var input, filter, dropdown, countries, a, i;
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
  var travelerItems = document.querySelectorAll('.item__traveler a');

  travelerItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();

      // Знаходимо батьківський контейнер
      var parentContainer = this.closest('.wrap__traveler');

      // Знаходимо всі елементи в поточній категорії
      var categoryItems = parentContainer.querySelectorAll('.item__traveler a');

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



function validateForm(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;

  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let phoneError = document.getElementById('phoneError');
  let status = document.getElementById('status');
  let sendButton = document.getElementById('submitButton');
  let sendError = document.getElementById('sendError');

  let hasEmptyFields = false; // Флаг для проверки пустых полей

  if (name.trim() === '') {
    nameError.textContent = 'The field is required.';
    hasEmptyFields = true;
  } else {
    nameError.textContent = '';
  }

  if (email.trim() === '') {
    emailError.textContent = 'The field is required.';
    hasEmptyFields = true;
  } else {
    emailError.textContent = '';
  }

  if (phone.trim() === '') {
    phoneError.textContent = 'The field is required.';
    hasEmptyFields = true;
  } else {
    phoneError.textContent = '';
  }

  if (hasEmptyFields) {
    sendButton.textContent = 'Send';
    status.style.visibility = 'visible';
    status.textContent = 'Sent';
  } else {
    sendButton.textContent = 'Send';
    status.style.visibility = 'visible';
    status.textContent = 'Sent';
    // Сброс значений инпутов и поля сообщения
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';

    // Сброс статуса через некоторое время
    setTimeout(function() {
      status.textContent = '';
      status.style.visibility = 'hidden';
    }, 3000);
  }
}