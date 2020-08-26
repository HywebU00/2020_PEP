// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // fixed_sidebar
    $('.fixed_sidebar .switch').on('click', function(e){
        if ($('.fixed_sidebar').hasClass('close')) {
            $(this).parents('.fixed_sidebar').removeClass('close');
            $(this).html("收合");
        } else {
            $(this).parents('.fixed_sidebar').addClass('close');
            $(this).html("展開");
        }
    });

    // 條件查詢
    $('#Conditional_switch').click(function(){
        $('#Conditional_query').find('.form_grid').stop(true, false).slideToggle(function(){
            if ($(this).is(':visible')) {
                $('#Conditional_switch').attr('value', '收合條件查詢');
            } else {
                $('#Conditional_switch').attr('value', '開啟條件查詢');
            }
        });
    });

    // 偵測高度吐出來 accordion
    $(document).ready(function(){
        _tabItem_HH = $('.tabItem').height();              //標屜高
        _tabConten_HH = $('.accordion').height();          //內容高
        _total_HH = _tabItem_HH + _tabConten_HH + 120;           //總高＝標屜高＋內容高
        $(".tabItemH").find('span').text(_tabItem_HH);     //前台動態顯示
        $(".contentH").find('span').text(_tabConten_HH);   //前台動態顯示
        $('.totalH').find('span').text(_total_HH);         //前台動態顯示
        $('.tabLink').css('height', _total_HH);            //把總高吐出來

        $('.tabs2 .accordion a.title').click(function(){
            _tabItem_HH = $('.tabItem').height();
            _tabConten_HH = $('.accordion').height();
            _total_HH = _tabItem_HH + _tabConten_HH + 120;

            $(".tabItemH").find('span').text(_tabItem_HH);
            $(".contentH").find('span').text(_tabConten_HH);
            $('.totalH').find('span').text(_total_HH);

            $('.tabLink').css('height', _total_HH);
        })
    });

    
    // modal設定
    $(function() {
        $('#modal1').hide();                                                                //先隱藏視窗
        $('.modal').after('<div class="modal_overlay"></div>');                             //新增透明底
        $('.modal').prepend('<button type="button" class="close">關閉</button>');           //新增關閉按鈕
        $('.modal_overlay').hide();                                                         //隱藏透明底
        //按鈕動作
        $('#openModal').click(function(e) {
            $('.modal_overlay').fadeIn(100);
            $('.modal').fadeIn(100);
            $('body').addClass('noscroll');
            e.preventDefault();
        });
        //關閉function
        function closeModal(){
            $('#modal1').hide();
            $('.modal_overlay').hide();
            $('body').removeClass('noscroll');
        }
        //點選關閉按鈕及透明底都可關閉
        $('.modal_overlay').click(closeModal);
        $('.modal .close').click(closeModal);

    });
});