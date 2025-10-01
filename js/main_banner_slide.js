document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slide_track');
  const slides = Array.from(track.querySelectorAll('.slide_banner'));
  const slideCount = slides.length;

  let slideWidth = slides[0].offsetWidth;

  // 복제하여 오른쪽에 붙여 무한 루프
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  let position = 0; // 현재 transform 위치
  function moveSlide() {
    position -= slideWidth; // 오른쪽 → 왼쪽 이동
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(${position}px)`;

    // 끝까지 이동하면 위치 초기화 (첫 슬라이드가 오른쪽 끝에 이어져 있음)
    if (Math.abs(position) >= slideWidth * slideCount) {
      setTimeout(() => {
        track.style.transition = 'none';
        position = 0;
        track.style.transform = `translateX(${position}px)`;
      }, 500); // transition duration과 동일하게
    }
  }

  setInterval(moveSlide, 6000);

  window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
  });
});
