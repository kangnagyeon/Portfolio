$('.exhibition-itme .poster').mouseenter(function(){
  $(this).find('.info-content').css({'display' : 'block'});
}).mouseleave(function(){
  $(this).find('.info-content').css({'display' : 'none'});
});