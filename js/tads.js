$('.tabs-nav__item').click(function() {
    var id = $(this).attr('data-tab-name'),
        content = $('.tab[data-tab-name="'+ id +'"]');
    
    $('.tabs-nav__item.is-active').removeClass('is-active'); // 1
    $(this).addClass('is-active'); // 2
    
    $('.tab.is-active').removeClass('is-active'); // 3
    content.addClass('is-active'); // 4
 });


