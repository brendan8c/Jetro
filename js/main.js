$(function() {
    $('.slider__inner').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.thumbs',
        arrows: true,
        responsive: [{
            breakpoint: 502,
            settings: {
                dots: true,
            },
        }]
    });
    $('.thumbs').slick({
        slidesToShow: 5.9,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [{
            breakpoint: 828,
            settings: {
                slidesToShow: 5,
            },
        }, {
            breakpoint: 638,
            settings: {
                slidesToShow: 4,
            },
        }]
    });

    $('.header__menu-btn').on('click', function() {
        $('.header__menu ul').slideToggle();
    });
});