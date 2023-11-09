$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__burger__block').toggleClass('main__active');
    });

    $("body").on("scroll", function () {
        setTimeout(function () {
            $('.header__burger, .header__burger__block').removeClass('main__active');
        }, 500);
    });

    $('.mirror-show').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    });
    $('.mirror__nav').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        asNavFor: '.mirror-show',
        centerMode: true,
        focusOnSelect: true,
        draggable: true,
    });

    $('body').on('click', '.mirror__nav__item', function (e) {
        $('.mirror__nav__item').each(function () {
            $(this).removeClass('active')
        });
        if ($('[data-slick-index = ' + $(this).data('id') + ']').hasClass('slick-current')) {
            $(this).toggleClass('active')
        }
    });

    $('body').on('click', '.mirror-show .slick-arrow', function (e) {
        $('.mirror__nav__item').each(function () {
            $(this).removeClass('active')
        });
        let index = $('.mirror-show .slick-current').data('slick-index')
        if ($('[data-id = ' + index + ']').length) {
            $('[data-id = ' + index + ']').addClass('active')
        }
    });
});






