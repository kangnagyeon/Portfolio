// 초기 설정
$('.popup').hide();

// 물범
$('.mun').click(function(){
  $('.place-mun').show();
  $('body').addClass('no-scroll');
});
$('.mun-close_btn').click(function(){
  $('.place-mun').hide();
  $('body').removeClass('no-scroll');
});

// 세계의 섬
$('.world').click(function(){
  $('.place-world').show();
  $('body').addClass('no-scroll');
});
$('.world-close_btn').click(function(){
  $('.place-world').hide();
  $('body').removeClass('no-scroll');
});

 // 물범
$('.seal').click(function(){
  $('.place-seal').show();
  $('body').addClass('no-scroll');

});
$('.seal-close_btn').click(function(){
  $('.place-seal').hide();
  $('body').removeClass('no-scroll');
});

// 펭귄
$('.penguin').click(function(){
  $('.place-penguin').show();
  $('body').addClass('no-scroll');

});
$('.penguin-close_btn').click(function(){
  $('.place-penguin').hide();
  $('body').removeClass('no-scroll');
});