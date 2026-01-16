$('.swiper').hide().css({'opacity' : 0});

$('.swiper[data-category="aqua"]').show().css({'opacity' : 1});
$('.swiper[data-category="aqua_1f"]').show().css({'opacity' : 1});
$('.swiper[data-category="aqua_b1f"]').show().css({'opacity' : 1});


$('.floor-2f-items .place_menu button').click(function(event){
  event.preventDefault();
  $('.floor-2f-items .place_menu button p').removeClass('on');
  $(this).find('p').addClass('on');

  let place = $(this).attr('data-filter');

  if (place === 'all') {
    $('.swiper').hide().css({'opacity' : 0});
    $('.swiper[data-category="aqua"]').show().animate({opacity : 1}, 300);
  } else {
    $('.swiper').hide().css({'opacity' : 0});
    $('.swiper[data-category="' + place + '"]').show().animate({opacity : 1}, 300);
  };
});

$('.floor-1f-items .place_menu button').click(function(event){
  event.preventDefault();
  $('.floor-1f-items .place_menu button p').removeClass('on');
  $(this).find('p').addClass('on');

  let place_1f = $(this).attr('data-filter');

  if (place_1f === 'all') {
    $('.swiper').hide().css({'opacity' : 0});
    $('.swiper[data-category="aqua"]').show().animate({opacity : 1}, 300);
  } else {
    $('.swiper').hide().css({'opacity' : 0});
    $('.swiper[data-category="' + place_1f + '"]').show().animate({opacity : 1}, 300);
  };
});

$('.floor-b1f-items .place_menu button').click(function(event){
  event.preventDefault();
  $('.floor-b1f-items .place_menu button p').removeClass('on');
  $(this).find('p').addClass('on');

  let place_b1f = $(this).attr('data-filter');

  if (place_b1f === 'all') {
    $('.swiper').hide().css({'opacity' : 0});
    $('.swiper[data-category="aqua"]').show().animate({opacity : 1}, 300);
  } else {
    $('.swiper').hide().css({'opacity' : 0});
    $('.swiper[data-category="' + place_b1f + '"]').show().animate({opacity : 1}, 300);
  };
});