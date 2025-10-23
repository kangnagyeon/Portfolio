// 초기 설정
$('.exhibition-card').hide();
$('.exhibition-card[date-category="all"]').css('display', 'flex');

$('.exhibition-page .exhibition-filter li').click(function(){
  $('.exhibition-page .exhibition-filter li').removeClass('on');
  $(this).addClass('on');

  var exhibition = $(this).attr('date-filter');
  // date-filter 값 변수에 저장
  
  if (exhibition === 'all') {
    // 전체 exhibition-card 숨기고
    $('.exhibition-card').hide();
    // 전체를 눌렀을 때 date-category="all"만 보이게
    $('.exhibition-card[date-category="all"]').css({'display' : 'flex'});
  } else {
    $('.exhibition-card').hide(); 
    // 모두 숨기고
    $('.exhibition-card[date-category="' + exhibition + '"]').css({'display' : 'flex'});
    // date-fiter와 이름이 같은 exhibition-card만 보이게
  }
});

  