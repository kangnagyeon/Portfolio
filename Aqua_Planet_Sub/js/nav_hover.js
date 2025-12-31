$(document).ready(function(){
  $('.nav_menu > .nav-item').stop(true).mouseenter(function(){
    $('.header-nav').stop(true).animate({'height' : '301px', 'background' : '#fff', 'backdrop-filter' : 'blur(0px)'});
    $(this).addClass('on');
  }).stop(true).mouseleave(function(){
    $('.header-nav').animate({'height' : '100px', 'background' : '#fff', 'backdrop-filter' : 'blur(20px)'});
    $(this).removeClass('on');
  });
});