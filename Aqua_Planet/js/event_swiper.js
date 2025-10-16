var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    loopedSlides: 6,
    // 슬라이드 개수 맞춰서 루프 복제
    speed: 800,
    // autoplay: {
    //     delay: 3000,
    // },
    effect: 'coverflow',
    grabCursor: true,
    // centeredSlidesBounds: true,
    // centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.event_next',
        prevEl: '.event_prev',
    },

})