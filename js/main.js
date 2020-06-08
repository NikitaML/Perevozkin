$(function () {
    $('.banner-slider').slick({
        dotsClass: 'dots-banner',
        arrows: false,
        dots: true,
        infinite: true,
        speed: 400,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.accordeon__question').click(function (event) {
        if ($('.questions-accordeon').hasClass('only-one')) {
            $('.accordeon__question').not($(this)).removeClass('accordeon-active');
            $('.accordeon__answer').not($(this).next()).slideUp(400);
        }
        $(this).toggleClass('accordeon-active').next().slideToggle(400);


    });

});

$(function () {

    $('.reviews-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '20%',
        variableWidth: true,
        dotsClass: 'dots-reviews',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: false
                }
            }]
    });
});

$(function () {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
});