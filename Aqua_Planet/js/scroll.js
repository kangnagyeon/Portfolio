$(document).ready(function() {
    var activeIndex = $('#fullpage .section.active').index();
    if(activeIndex >= 4){
    $('.section_hamburger, header, .header-top, .header-nav').addClass('dark');
    };

    

    $('#fullpage').fullpage({
        sectionSelector: '.main > .section', 
        // .main 안의 .section을 섹션으로 인식
        
        licenseKey: 'YOUR_KEY_HERE',

        //options here
        autoScrolling:true,
        // scrollHorizontally: true,

        // 페이지 내비게이션
        navigation: true,
        // 내비게이션 표시 true or false
        navigationPosition: 'left',
        // 내비게이션 위치 left or right
        navigationTooltips: ['소개', '운영', '단체/혜택', '체험', '이벤트', 'footer'],

        // 페이지 스크롤 속도
        scrollingSpeed: 1000,

        afterLoad: function(origin, destination, direction){
            var windowWidth = $(window).width(); // 현재 브라우저 가로 크기
            // 1440px 이상이면 section5(index 4)부터, 작으면 section4(index 3)부터 적용
            var darkStartIndex = (windowWidth >= 1440) ? 4 : 3;
            

            if(destination.index >= darkStartIndex){ // section5가 5번째 섹션이면 index 4

                console.log('현재 섹션 인덱스:', destination.index);

                $('header, .header-top, .header-nav').addClass('dark');
                $('.header-nav .logo img').attr('src', 'img/svg/logo_black.png');
                $('.header-top .location .location-selec img').attr('src', 'img/svg/user_time_icon_dark.svg');
                $('.header-top .location .operation-time img').attr('src', 'img/svg/user_time_icon_dark.svg');
                $('.header-top .user .user-umber img').attr('src', 'img/svg/service_icon_dark.svg');
                $('.header-nav .user-quick-actions .user-login img').attr('src', 'img/svg/ion_user_login_dark.svg');
                $('.program .program_next img').attr('src', 'img/svg/next-btn_black.svg');
                $('.program .program_prev img').attr('src', 'img/svg/prev-btn_black.png');
                $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css({'background' : '#000'});
                $('#fp-nav ul li .fp-tooltip').css({'color': '#000'});
            } else {
                $('header, .header-top, .header-nav').removeClass('dark');
                $('.header-nav .logo img').attr('src', 'img/svg/logo_white.png');
                $('.header-top .location img').attr('src', 'img/svg/ham_btn_icon.svg');
                $('.header-top .location .operation-time img').attr('src', 'img/svg/user_time_icon.svg');
                $('.header-top .user .user-umber img').attr('src', 'img/svg/service_icon.svg');
                $('.header-nav .user-quick-actions .user-login img').attr('src', 'img/svg/ion_user_login.svg');
                $('.program .program_next img').attr('src', 'img/svg/next-btn.svg');
                $('.program .program_prev img').attr('src', 'img/prev-btn.png');
                $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css({'background' : '#fff'});
                $('#fp-nav ul li .fp-tooltip').css({'color': '#fff'});
            }
        }

        
    });

    // Example of how to use fullpage.js methods
    $.fn.fullpage.setAllowScrolling(true);
});