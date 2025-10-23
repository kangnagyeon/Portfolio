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
  // loop: true,
  // 슬라이더 1개

  // If we need pagination
  pagination: {
    el: '.pagination-deoksugung',
    clickable: true,
  },

  watchOverflow: false,
});

const swiper6 = new Swiper('.exhibition-cheongju', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination-cheongju',
    clickable: true,
  },
});

const swiper7 = new Swiper('.exhibition-children', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination-children',
    clickable: true,
  },

  watchOverflow: false,
});