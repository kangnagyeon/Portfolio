
// 초기 설정
$('.floor-1f-items, .floor-b1f-items').hide();

// const $map = $('.map-floor');
const $floor_button = $('.floor_button');

// 지도 기준 top위치
// const Top = $('#map_2f').position().top;

$floor_button.on('click', function(){
  // button의 data-floor 값 저장
  const floor = $(this).data('floor');

  // map / list의 data-floor 값 저장
  const targetmap = $('.map-floor[data-floor="' + floor + '"]').data('floor');
  const $targetlist = $('.floor-items[data-floor="' + floor + '"]');

  // 층에 맞춰서 floor-items 보이고 숨기기
  $('.floor-items').hide();
  $targetlist.show();

  // 버튼 활성화 표시
  $floor_button.removeClass('on');
  $(this).addClass('on');


  if ($(this).data('floor') === "1f") {
    $('.map-floors .floor-2f').css({'left' : '317px', 'top' : '-146px', 'z-index' : '-1'}).animate({opacity:0}, 400);
    $('.map-floors .floor-1f').css({'left' : '218px', 'top' : '0', 'z-index' : '0'}).animate({opacity:1}, 400);
    $('.map-floors .floor-b1f').css({'left' : '119px', 'top' : '146px', 'z-index' : '-2'}).animate({opacity:0.2}, 400);

    // $('.swiper[data-category="aqua"').show().css({'opacity' : 1});
    $('.swiper[data-category="aqua_1f"]').show().css({'opacity' : 1});
    // $('.swiper[data-category="aqua_b1f"').show().css({'opacity' : 1});

  } else if ($(this).data('floor') === "b1f") {
    $('.map-floors .floor-2f').css({'left' : '416px', 'top' : '-292px', 'z-index' : '-2'}).animate({opacity:0}, 400);
    $('.map-floors .floor-1f').css({'left' : '317px', 'top' : '-146px', 'z-index' : '-1'}).animate({opacity:0}, 400);
    $('.map-floors .floor-b1f').css({'left' : '218px', 'top' : '0', 'z-index' : '0'}).animate({opacity:1}, 400);

    // $('.swiper[data-category="aqua"').show().css({'opacity' : 1});
    // $('.swiper[data-category="aqua_1f"').show().css({'opacity' : 1});
    $('.swiper[data-category="aqua_b1f"]').show().css({'opacity' : 1});

  } else {
    $('.map-floors .floor-2f').css({'left' : '218px', 'top' : '0', 'z-index' : '0'}).animate({opacity:1}, 400);
    $('.map-floors .floor-1f').css({'left' : '119px', 'top' : '146px', 'z-index' : '-1'}).animate({opacity:0.2}, 400);
    $('.map-floors .floor-b1f').css({'left' : '20px', 'top' : '292px', 'z-index' : '-2'}).animate({opacity:0}, 400);

    $('.swiper[data-category="aqua"]').show().css({'opacity' : 1});
    // $('.swiper[data-category="aqua_1f"').show().css({'opacity' : 1});
    // $('.swiper[data-category="aqua_b1f"').show().css({'opacity' : 1});

  };
});
