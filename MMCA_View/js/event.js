const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 80,

  // 자동으로 움직이기
  autoplay: {
    delay: 3000,            // 3초마다 이동
    disableOnInteraction: false, // 손으로 움직여도 자동 재생 유지
  },
  speed: 600,

  simulateTouch: true,

});