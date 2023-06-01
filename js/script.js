$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:false,
    speed:1000,
    sliderToShow:3,
    slidesToScroll:2,
    infinite: true,
    waitForAnimate:true,
    variableWidth: true,  
  });
});