$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  autoplay: true,
  arrows: true,
  dots:true,
  autoplaySpeed: 3500,
  easing:"linear",
  focusOnSelect: true,
  variableWidth: true,
  lazyLoad: "progressive",
  adaptiveHeight: true,
  variableWidth: true,
  
  
});
var isTouching = false;
window.addEventListener('touchstart', function(){
  document.documentElement.classList.remove('mouse');
  document.documentElement.classList.add('touch');
  isTouching = true;
});
  
window.addEventListener('mousemove', function(){
  if(isTouching) isTouching = false
  else
  {
    document.documentElement.classList.remove('touch');
    document.documentElement.classList.add('mouse');
  }
});