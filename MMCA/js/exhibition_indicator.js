// window.addEventListener('DOMContentLoaded', () => {
//   // 모든 exhibition 섹션 선택
//   const exhibitions = document.querySelectorAll('.exhibition');

//   exhibitions.forEach(exhibition => {
//     const exhibitionList = exhibition.querySelector('.exhibition-list');
//     const slides = exhibition.querySelectorAll('.exhibition-itme');
//     const indicators = exhibition.querySelectorAll('.indicator span');

//     if (!exhibitionList || slides.length === 0 || indicators.length === 0) return;

//     let slideWidth = slides[0].offsetWidth;

//     // 인디케이터 클릭 이벤트
//     indicators.forEach((indicator, idx) => {
//   indicator.addEventListener('click', () => {
//     // transition 켜둔 상태에서 transform만 변경
//     exhibitionList.style.transition = 'transform 0.5s ease';
//     exhibitionList.style.transform = `translateX(-${slideWidth * idx}px)`;

//     indicators.forEach(ind => ind.classList.remove('on'));
//     indicator.classList.add('on');
//   });
// });


//     // 창 크기 변경 시 슬라이드 너비 갱신
//     window.addEventListener('resize', () => {
//       slideWidth = slides[0].offsetWidth;
//       const activeIdx = [...indicators].findIndex(ind => ind.classList.contains('on'));
//       exhibitionList.style.transform = `translateX(-${slideWidth * activeIdx}px)`;
//     });
//   });
// });


const swiper3 = new Swiper('.exhibition-seou', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.agination-seou',
    clickable: true,
  },
});

const swiper4 = new Swiper('.exhibition-gwacheon', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination-gwacheon',
    clickable: true,
  },
});

const swiper5 = new Swiper('.exhibition-deoksugung', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination-deoksugung',
    clickable: true,
  },
});