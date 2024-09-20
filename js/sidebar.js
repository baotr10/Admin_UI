$('.sub-btn').click(function(){
    $('this').next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
});