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
