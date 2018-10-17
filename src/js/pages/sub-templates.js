$(document).ready(function(){
	$('.footer__main__title').on('click', function(){
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
		}else {
			$(this).addClass('is-active');
		}

	});


	$('.toogle-search').on('click', function(){
		$('.header__search-form').toggleClass('is-active');
	})
	$('.cancel-ico').on('click', function(){
		$('.header__search-form').toggleClass('is-active');
	})
});
