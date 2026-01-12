// 기본 설정
$('.section-bro').hide();

$('.exhibition-content .content-brochure button').click(function(){
  $('.section-bro').show();
  $('body').addClass('no-scroll');
});

$('.brochure .close-btn').click(function(){
  $('.section-bro').hide();
  $('body').removeClass('no-scroll');
});