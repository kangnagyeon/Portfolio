$(document).ready(function(){
  $('.nav_menu > .nav-item').stop(true).mouseenter(function(){
    $('header').stop(true).animate({'height' : '328px', 'background' : '#fff', 'backdrop-filter' : 'blur(0px)'});
    $(this).addClass('on');
  }).mouseleave(function(){
    $('header').animate({'height' : '142px', 'background' : 'transparent', 'backdrop-filter' : 'blur(20px)'});
    $(this).removeClass('on');
  });
});