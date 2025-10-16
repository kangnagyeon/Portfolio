const swiper1 = new Swiper('.program_swip', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 40,

  allowTouchMove: false,

  slidesPerView: 'auto',
  centeredSlides: false,

  watchOverflow: true, 
  // 마지막 슬라이드까지 자연스럽게 보이도록

  // slidesOffsetBefore: 314, 
  // margin-left 대신 이걸로 hover 대비 공간 확보

  // Navigation arrows
  navigation: {
    nextEl: '.program_next',
    prevEl: '.program_prev',
  },
});

$('.program_box').mouseenter(function(){
  $(this).css({'width': '754px'});
  $(this).find('.inner').css({'width': '754px'});
}).mouseleave(function(){
  $(this).css({'width': '440px'});
  $(this).find('.inner').css({'width': '440px'});
});