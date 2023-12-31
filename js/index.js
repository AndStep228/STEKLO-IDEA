$(document).ready(function () {

    $('.header__burger').click(function (event) {
        $('.header__burger, .header__burger__block').toggleClass('main__active');
    });

    $('.sort-goods__item').click(function (event) {
        $(this).toggleClass('active');
        $(this).next('.sort-goods__content').toggleClass('active').slideToggle(300, 'linear');
    });

    $('.v2').click(function (event) {
        $('.goods__item, .goods__block, .goods-item__img, .goods-item__name, .buy__cost, .buy__cost-mobile, .goods-line, .cart, .cart__txt-mobile, .goods-item__buy').addClass('active')
        $('.filters__mobile').removeClass('active');
        $('body').removeClass('active')
    });

    if ($(window).width() < 650) {
        $('.goods__item, .goods__block, .goods-item__img, .goods-item__name, .buy__cost, .buy__cost-mobile, .goods-line, .cart, .cart__txt-mobile, .goods-item__buy').addClass('active')
    }


    $('.v1').click(function (event) {
        $('.goods__item, .goods__block, .goods-item__img, .goods-item__name, .buy__cost, .buy__cost-mobile, .goods-line, .cart, .cart__txt-mobile, .goods-item__buy').removeClass('active')
        $('.filters__mobile').removeClass('active');
        $('body').removeClass('active')
    });

    $('.pagination__item').click(function (event) {
        $('.pagination__item').removeClass('active');
        $(this).addClass('active');
    });

    $('.pagination__arrows.next').click(function (event) {
        $('.pagination__item.active').next('.pagination__item').addClass('active')
        $('.pagination__item.active').prev().removeClass('active')
    });

    $('.pagination__arrows.next.first').click(function (event) {
        $('.pagination__item').removeClass('active')
        $('.pagination__item').last().addClass('active')
    });

    $('.pagination__arrows.prev').click(function (event) {
        $('.pagination__item.active').prev('.pagination__item').addClass('active')
        $('.pagination__item.active').next().removeClass('active')
    });

    $('.pagination__arrows.prev.first').click(function (event) {
        $('.pagination__item').removeClass('active')
        $('.pagination__item').first().addClass('active')
    });

    $('.goods__sort__choose, .sort__btn-m').click(function (event) {
        $(this).toggleClass('active');
        $('.goods__sort__block').toggleClass('active');
    });

    $('.filter-item__txt').click(function (event) {
        $(this).siblings('.filter-mobile__open').slideToggle(300, 'linear');
    });

    $('.filter__btn, .filter-close__btn').click(function (event) {
        $('.filters__mobile').toggleClass('active');
        $('body').toggleClass('active')
    });

    $(window).on("scroll", function () {

        $('.filters__mobile').removeClass('active');

    });



    $('.cart__link__block').click(function (event) {
        $('.cart__block').toggleClass('active');
        $('body').toggleClass('active-cart')
    });

    $('.cart-header__close.cart-close').click(function (event) {
        $('.cart__block').removeClass('active');
        $('body').removeClass('active-cart')
    });

    $('.order-m__btn').click(function (event) {
        $('.cart__order').addClass('active');
    });

    $('.cart-header__close.order-close').click(function (event) {
        $('.cart__order').removeClass('active');
    });


    $('.projects__img').click(function (event) {
        let whatIs = $(this).data('id')
        console.log($('.projects__image-show.' + whatIs + ''))
        $('.projects__image-show.' + whatIs + '').toggleClass('active');
    });

    $('.image-show__close').click(function (event) {
        $('.projects__image-show').removeClass('active');
    });

    $('.question').click(function (event) {
        $(this).find('.question__txt').toggleClass('active').slideToggle(300, 'linear');
        $(this).find('.question__arrow').toggleClass('active');
    });

    $('.goods__sort__radio').click(function (event) {

        $('.goods__sort__radio').each(function () {
            $('.goods__sort__radio').prop('checked', false)
        });

        $(this).prop('checked', true);

        var text = $(this).siblings().find('p').text();

        $('.goods__sort-value').text(text);

        setTimeout(function () {
            $('.goods__sort__block').removeClass('active');
        }, 200);

    });

    $(window).on("scroll", function () {
        setTimeout(function () {
            $('.header__burger, .header__burger__block').removeClass('main__active');
        }, 500);
    });


    $(function () {
        if ($(window).width() > 514) {
            scrollActive = true;
            scrollDirection = 0;

            $muchElements = $('.img__wrapper').length;


            $nav = $('.parallax__block');
            $scrollBlock = $('.horizontal-scroll__wrapper');
            $fixedWidth = $nav.outerWidth();

            $scrollTotalWidth = $('.img__wrapper').width() * ($muchElements - 1) + 260 + 180;



            $window = $(window);


            $windowBottom = $window.height();

            var lastScrollTop = 0;
            $(window).scroll(function (event) {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {

                    scrollDirection = 0;
                } else {
                    scrollDirection = 1;
                }
                lastScrollTop = st;
            });

            $window.scroll(function () {
                if ($nav.hasClass('fixed') == false) {
                    $h = $nav.offset().top;
                }

                $scrollUp = $nav.offset().top;
                $muchLeft = ($scrollTotalWidth - $window.width()) / $muchElements;
                $muchPadding = $muchLeft + 100;
                console.log($muchLeft)
                $parallaxFixed = $('.parallax__fixed');
                $parallaxFixed.css('padding-bottom', $muchPadding * $muchElements + 'px')

                if (scrollDirection == 1 && $window.scrollTop() + $window.height() < $scrollUp + 200 + $nav.height()) {
                    scrollActive = true
                    $nav.css({
                        transform: 'translateY(0px)'
                    });
                }
                if (scrollActive) {
                    var scrollMuch = $window.scrollTop() - $h;
                    if ($nav.hasClass('fixed') == true) {
                        $scrollBlock.css({
                            transform: 'translateX(-' + scrollMuch + 'px)'
                        });
                    }
                    if ($window.scrollTop() > $h) {
                        $nav.addClass('fixed');
                    }
                    else {
                        $nav.removeClass('fixed');
                        $scrollBlock.css({
                            transform: 'translateX(0px)'
                        });
                    }

                    $muchScrollBottom = $muchPadding * $muchElements - 1000

                    if (scrollMuch > $muchLeft * $muchElements && scrollDirection == 0) {
                        $nav.removeClass('fixed');
                        $nav.css({
                            transform: 'translateY(' + $muchScrollBottom + 'px)'
                        });
                        scrollActive = false;
                    }
                }
            });
        }
        else {
            const scrollContainer = new IScroll('.horizontal-scroll__wrapper', {
                momentum: true // включаем инерцию
            });
            var startX = 0; // начальная позиция touchmove по оси X
            var translateX = 0; // текущее смещение блока
            $window = $(window);
            $muchElements = $('.img__wrapper').length;
            $scrollTotalWidth = $('.img__wrapper').width() * ($muchElements - 1) + 260 + 15;
            $muchLeft = ($scrollTotalWidth - $window.width()) / $muchElements;

            // определяем блок, который нужно смещать
            var block = $('.horizontal-scroll__wrapper');

            // обработчик события touchmove
            block.on('touchmove', function (event) {
                var touch = event.originalEvent.touches[0];
                var moveX = touch.pageX;
                console.log(touch)
                if (startX > moveX && translateX > ($muchLeft * $muchElements) * -1) {
                    // если пользователь двигался влево
                    translateX -= startX - moveX + 3;
                } else if (startX < moveX) {
                    // если пользователь двигался вправо
                    translateX += moveX - startX + 3;
                }

                console.log(($muchLeft * $muchElements) * -1)
                console.log(translateX)
                if (translateX > 0) {
                    translateX = 0;
                }
                if (translateX > ($muchLeft * $muchElements) * -1) {
                    block.css('transform', 'translateX(' + translateX + 'px)');
                }
                startX = moveX;
            });

            // обработчик события touchstart
            block.on('touchstart', function (event) {
                var touch = event.originalEvent.touches[0];
                startX = touch.pageX;
            });

        }
    });

    var count = 1;

    $('.count-plus').click(function (event) {
        count += 1;
        $('.count').text(count)
    });


    $('.count-minus').click(function (event) {
        if ($('.count').text() == '1')
            return
        count -= 1;
        $('.count').text(count)
    });

    $('.product__slide__block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__subslide__block',
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        focusOnSelected: true
    });
    $('.product__subslide__block').slick({
        arrows: false,
        draggable: false,
        asNavFor: '.product__slide__block',
        centerMode: false,
        dots: false,
        slidesToShow: 1,
        variableWidth: true,
        focusOnSelect: true
    });

    $('.mirror-show').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.mirror__nav',
        arrows: false,
        fade: true,
        adaptiveHeight: true,
    });
    $('.mirror__nav').slick({
        arrows: true,
        asNavFor: '.mirror-show',
        centerMode: true,
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 510,
            settings: {
                arrows: false,
                centerMode: true,
            }
        }]
    });

    $('.projects__slider').slick({
        fade: true,
        draggable: false,
        swipe: false
    });

    // $('.parallax__slick').slick({
    //     fade: false,
    //     draggable: true,
    //     swipe: true,
    //     arrows: false,
    //     infinite: false,
    //     variableWidth: true,
    //     slidesToShow: 2
    // });

    $('.image-show__slider').slick({
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
    });

    $('.projects-slide__images').slick({
        draggable: true,
        swipe: true,
        slidesToShow: 1,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        infinite: false,

        mobileFirst: true,
        responsive: [{
            breakpoint: 1200,
            settings: 'unslick'
        }]
    });
});

