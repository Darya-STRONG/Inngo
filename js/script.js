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


$(document).ready(function() {
  $('.header-slider-wrap').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      fade: true,

  });

  $('.js-header-slide-prev').on('click', function() {
      $('.header-slider-wrap').slick('slickPrev');
  });


  $('.js-header-slide-next').on('click', function() {
      $('.header-slider-wrap').slick('slickNext');

  });
});
