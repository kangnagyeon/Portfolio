// 포트폴리오 메뉴 초기 설정
$('.portfolio-list').hide();
$('.portfolio-list[data-category="all"]').css({'display' : 'flex'});

// 포트폴리오 메뉴
$('.portfolio-menu ul li a').click(function(){
  $('.portfolio-menu ul li a').removeClass('on');
  $(this).addClass('on');

  var portfolio_list = $(this).attr('date-filter');

  if (portfolio_list === 'all') {
    $('.portfolio-list').hide().css({'opacity' : 0});
    $('.portfolio-list[data-category="all"]').show().animate({opacity : 1}, 500);
  } else {
    $('.portfolio-list').hide().css({'opacity' : 0});
    $('.portfolio-list[data-category="' + portfolio_list + '"]').show().animate({opacity : 1}, 500);
  }
});

// 상세페이지
$('#portfiolio .life_diffuser button').click(function(){
  $('.project-life-overlay').show();
  $('body').addClass('overlay-open');
  $('.project-life-overlay').scrollTop(0);
});

$('.project-life-overlay .btn_close').click(function(){
  $('.project-life-overlay').hide();
  $('body').removeClass('overlay-open');
});


// 여행 프로모션
$('#portfiolio .Kapadokya button').click(function(){
  $('.project-capaTrip-overlay').show();
  $('body').addClass('overlay-open');
  $('.project-capaTrip-overlay').scrollTop(0);
});

$('.project-capaTrip-overlay .btn_close').click(function(){
  $('.project-capaTrip-overlay').hide();
  $('body').removeClass('overlay-open');
});

// 제품 포스터
$('#portfiolio .jigushop button').click(function(){
  $('.project-jigushop-overlay').show();
  $('body').addClass('overlay-open');
  $('.project-capaTrip-overlay').scrollTop(0);
});

$('.project-jigushop-overlay .btn_close').click(function(){
  $('.project-jigushop-overlay').hide();
  $('body').removeClass('overlay-open');
});

// 제품 포스터 swiper
const swiper = new Swiper('.project-jigushop-overlay', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 광고 배너
$('#portfiolio .Pulmuone button').click(function(){
  $('.project-Pulmuone-overlay').show();
  $('body').addClass('overlay-open');
  $('.project-Pulmuone-overlay').scrollTop(0);
});

$('.project-Pulmuone-overlay .btn_close').click(function(){
  $('.project-Pulmuone-overlay').hide();
  $('body').removeClass('overlay-open');
});
