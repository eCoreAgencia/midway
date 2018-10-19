import '../scss/main.scss'
//import './modules/vtexRequest'

//import './components/menu'
//import './components/hover-menu'
//import './components/sticky'
import './components/searchForm'
import './components/send-form'

import './components/minicart';
import './components/mobile-menu';

import './components/filter';
import './components/modal';
import './components/product';
import './components/teamMidway';
import './components/shelf';

import './pages/home';
import './pages/sub-templates';
import './pages/persona';
import './pages/empty-search';
import './pages/fale-conosco';
import { equal } from 'assert';


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


$(document).ready(function(){
    if($('li.helperComplement')[0]){
        $('li.helperComplement').remove();
      }

	  $('.search-form').searchform({'vtexStore': 'midwaylabs'});

	  $('.default__form').sendForm('NL');

	  const NumberOfBanners = $('.navbar__list__item__dropdown__item--banner-prod .box-banner').length;

	  var rnd = Math.ceil(Math.random() * NumberOfBanners);

	  console.log(rnd);
	  $(`.navbar__list__item__dropdown__item--banner-prod .box-banner:eq(${rnd - 1})`).show();

	if(isMobile.any()){
		$('.header').addClass('header--fixed');
	}

	$(window).resize(function(){
		if(isMobile.any()){
			$('.header').addClass('header--fixed');
		}else {
			$('.header').removeClass('header--fixed');
		}
	})

	const shelf__prev = `<button type='button' class='slick-prev shelf__button'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="27" viewBox="0 0 15 27"><defs><path id="idyha" d="M361 1386l-12-12.5 12-12.5"/><clipPath id="idyhb"><use fill="#fff" xlink:href="#idyha"/></clipPath></defs><g><g transform="translate(-347 -1360)"><use fill="#fff" fill-opacity="0" stroke="#f22100" stroke-miterlimit="50" stroke-width="4" clip-path="url(&quot;#idyhb&quot;)" xlink:href="#idyha"/></g></g></svg></button>`;
    const shelf__next = `<button type='button' class='slick-next shelf__button'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="27" viewBox="0 0 15 27"><defs><path id="pyzfa" d="M1545 1361l12 12.5-12 12.5"/><clipPath id="pyzfb"><use fill="#fff" xlink:href="#pyzfa"/></clipPath></defs><g><g transform="translate(-1544 -1360)"><use fill="#fff" fill-opacity="0" stroke="#f22100" stroke-miterlimit="50" stroke-width="4" clip-path="url(&quot;#pyzfb&quot;)" xlink:href="#pyzfa"/></g></g></svg></button>`;
	const varSlick = {
		dots: true,
		slideToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: shelf__prev,
		nextArrow: shelf__next,
		mobileFirst: true,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 800,
			settings: {
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 319,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  dots: false
			}
		  }
		]
	  }




	  $(".shelf__carousel--full .prateleira > ul").each(function() {
		var shelf = $(this);
		shelf.find("li.helperComplement").remove();
		if($('li', this).length >= 4){
			shelf.slick(varSlick);
		} else if(isMobile.any()){
			shelf.slick(varSlick);
		}

	  });
})


