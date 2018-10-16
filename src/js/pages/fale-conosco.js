import formatInput from '../components/formatInput';
import '../components/send-form';


$(document).ready(function(){
	if($('body').hasClass('fale-conosco')){
		$('.faleconosco__content__form__field__title').sendForm('CT');

		formatInput('#co_telefone', '00000-000');
	}

})
