$('#section3 .group-cards .box').mouseenter(function(){
  $(this).find('.edu').attr('src', './img/svg/group_school_icon_dark.svg');
  $(this).find('.corporate').attr('src', './img/svg/group_bus_icon_dark.svg');
  $(this).find('.inbound').attr('src', './img/svg/group_building_icon_dark.svg');
}).mouseleave(function(){
  $(this).find('.edu').attr('src', './img/svg/group_school_icon.svg');
  $(this).find('.corporate').attr('src', './img/svg/group_bus_icon.svg');
  $(this).find('.inbound').attr('src', './img/svg/group_building_icon.svg');
});