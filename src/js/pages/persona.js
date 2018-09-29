$(document).ready(function(){
    if($('body').hasClass('persona')){
        $('.persona__top__info__link').on('click', function(event){
            $('.modal__item').addClass('active');
        });
    }
});