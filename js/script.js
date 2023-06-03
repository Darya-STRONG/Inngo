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
    autoplay: true,
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

