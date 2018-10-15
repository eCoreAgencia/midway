import '../scss/main.scss'
//import './modules/vtexRequest'

//import './components/menu'
//import './components/hover-menu'
//import './components/sticky'
import './components/searchForm'

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

      $('.search-form').searchform({'vtexStore': 'midwaylabs', 'showDepartments': false}); 
    
    if($('.navbar__list__item__dropdown__item--banner-prod')[0]){
        const banner = $('.navbar__list__item__dropdown__item--banner-prod .box-banner').length;

        
        const bannerShow = Math.round(Math.random() * banner);

        console.log(bannerShow);
        $(`.navbar__list__item__dropdown__item--banner-prod .box-banner:eq(${bannerShow})`).show();
    }
      
})


