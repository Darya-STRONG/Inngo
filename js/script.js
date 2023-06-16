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


// Отримуємо всі необхідні елементи з DOM
const departureDateInput = document.querySelector('#departure-date');
const returnDateInput = document.querySelector('#return-date');
const calendarContainers = document.querySelectorAll('.calendar-container');
const calendars = document.querySelectorAll('.calendar');

// Логіка відображення/приховування календаря для кожного вхідного поля
departureDateInput.addEventListener('click', () => {
  calendarContainers[0].classList.toggle('show');
  calendarContainers[1].classList.remove('show');
});

returnDateInput.addEventListener('click', () => {
  calendarContainers[1].classList.toggle('show');
  calendarContainers[0].classList.remove('show');
});

// Функція для створення календаря
function createCalendar(container, dateInput) {
  const calendar = container.querySelector('.calendar');
  const year = dateInput.date.getFullYear();
  const month = dateInput.date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Створюємо заголовок календаря
  const header = document.createElement('div');
  header.classList.add('calendar-header');
  header.textContent = `${dateInput.date.toLocaleString('default', { month: 'long' })} ${year}`;
  calendar.innerHTML = '';
  calendar.appendChild(header);

  // Створюємо сітку днів календаря
  const grid = document.createElement('div');
}

Календарь 
$(function() {
  $('#daterange').daterangepicker({
    opens: 'center',
    startDate: moment().startOf('day'),
    endDate: moment().endOf('day'),
    locale: {
      format: 'DD MMMM',
      daysOfWeek: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ]
    },
    autoApply:true,
    showCustomRangeLabel: function(start, end, label) {
      const month = start.format('MMMM');
      return month;
    }
  });

});




function validateForm(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');
  var status = document.getElementById('status');
  var sendButton = document.getElementById('submitButton');

  var hasEmptyFields = false; // Флаг для проверки пустых полей

  if (name.trim() === '') {
    nameError.textContent = 'The field is required.';
    hasEmptyFields = true; // Устанавливаем флаг, если поле не заполнено
  } else {
    nameError.textContent = '';
  }

  if (email.trim() === '') {
    emailError.textContent = 'The field is required.';
    hasEmptyFields = true; // Устанавливаем флаг, если поле не заполнено
  } else {
    emailError.textContent = '';
  }

  if (phone.trim() === '') {
    phoneError.textContent = 'The field is required.';
    hasEmptyFields = true; // Устанавливаем флаг, если поле не заполнено
  } else {
    phoneError.textContent = '';
  }

  // Дополнительная логика, если форма валидна
  // ...

  if (hasEmptyFields) {
    sendButton.textContent = 'Error';
    status.style.visibility = 'visible';
    status.textContent = 'Error';
  } else {
    sendButton.textContent = 'Send'; // Восстанавливаем текст кнопки после отправки
    status.style.visibility = 'visible';
    status.textContent = 'Sent'; // Устанавливаем текст "Sent" для элемента status
  }
}