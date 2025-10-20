$('.mmca_nav_list').mouseenter(function(){
  $(this).find('.mmca_gnb_list').stop().slideDown();
  $(this).find('.mmca_gnb_list').addClass('on');
}).mouseleave(function(){
  $('.mmca_gnb_list').stop().slideUp();
  $(this).find('.mmca_gnb_list').removeClass('on');
});