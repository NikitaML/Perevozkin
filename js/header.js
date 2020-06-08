$(document).ready(function () {

    $(window).scroll(function() { 
        var the_top = $(document).scrollTop();
        if (the_top > 70) {
            $('.header').addClass('header-scroll');
        }
        else {
            $('.header').removeClass('header-scroll');
        }
    });

    $('.burger-box').click(function (event) {
        $('.header__burger,.header__menu,.burger-box').toggleClass('header__active');
        $('body').toggleClass('lock-content');

    });




    $('.dropdown-button').click(function (event) {
        $('.dropdown-button').toggleClass('dropdown-active');
        $('.dropdown-menu').slideToggle();
    });

    $(document).scroll(function(event){
        $('.dropdown-menu').slideUp();
        $('.dropdown-button').removeClass('dropdown-active');
    });



    $('.dropdown-button-mobile').click(function (event) {
        $('.mobile-dropdown').slideToggle();

    });
    $('.burger-box').click(function (event) {
        $('.mobile-dropdown').slideUp();
        $('.dropdown-button').removeClass('dropdown-active');

    });
   

  

});


