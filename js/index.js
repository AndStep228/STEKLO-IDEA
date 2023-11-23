

$(document).ready(function () {

    $('.header__burger').click(function (event) {
        $('.header__burger, .header__burger__block').toggleClass('main__active');
    });

    $('.sort-goods__item').click(function (event) {
        $(this).toggleClass('active');
    });

    $('.goods__sort__choose').click(function (event) {
        $(this).toggleClass('active');
        $('.goods__sort__block').toggleClass('active');
    });

    $('.cart__link__block').click(function (event) {
        $('.cart__block').toggleClass('active');
    });

    $('.cart-header__close').click(function (event) {
        $('.cart__block').removeClass('active');
    });

    $('.projects__img').click(function (event) {
        let whatIs = $(this).data('id')
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

    $("body").on("scroll", function () {
        setTimeout(function () {
            $('.header__burger, .header__burger__block').removeClass('main__active');
        }, 500);
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

