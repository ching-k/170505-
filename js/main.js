$(function () {

    //wow.js 的入口
    new WOW().init();


    $('nav a, #scrollTopBtn').bind('click', function (event) {
        var $anchor = $(this);

        // 宣告navbarHeight = 50 之後就不用記數字，可直接打變數名稱//
        var navbarHeight = 50;
        //宣告動畫秒數為1250//
        var animationDuration = 1250;
        //宣告timingFunction//
        var timingFunction = 'easeInExpo';

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - navbarHeight)
        }, animationDuration, timingFunction);
        event.preventDefault();
    });
    // window在捲動的時候
    $(window).scroll(function () {
        // 以上條件發生時所做的處理
        // 把$(window).scrollTop()存到$scrollPosition
        var $scrollPosition = $(window).scrollTop();
        // 把()的內容印到console裡面
        console.log($scrollPosition);

        //如果$scrollPosition大於500
        if ($scrollPosition > 500) {
            //#scrollTopBtn加上class scroll
            //$('#scrollTopBtn').addClass('scroll');
            $('#scrollTopBtn').fadeIn();
        } else {
            //#scrollTopBtn去除class scroll
            //沒有了scroll的#scrollTopBtn display為none
            //$('#scrollTopBtn').removeClass('scroll');
            $('#scrollTopBtn').fadeOut();
        }

        if ($scrollPosition > 20) {
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }

    });


});


//$() 是js的選擇器 //
//http://easings.net/zh-tw 可在這裡選擇timing function //
//offset50是因為navbar設了固定的50在網頁最上端，沒設會被擋住 //
