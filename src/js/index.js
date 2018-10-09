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


import './pages/home';
import './pages/sub-templates';
import './pages/persona';
import './pages/empty-search';


$(document).ready(function(){
    if($('li.helperComplement')[0]){
        $('li.helperComplement').remove();
      }
})

