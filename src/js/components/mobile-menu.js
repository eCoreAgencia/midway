class MobileMenu {
    constructor() {

      this.menuIcon = $(".header__menu-icon");
      this.menuMobileContent = $(".header__menu");
	  this.events();

	  $('.navbar__list__item__voltar, .header__overlay').on('click', this.toggleTheMenu.bind(this))

	  $('.navbar__list__item__link').on('click', function(){
		  $(this).parent().toggleClass('is-active');
	  })
    }

    events(){
      this.menuIcon.click(this.toggleTheMenu.bind(this));
    }


    toggleTheMenu() {
      this.menuMobileContent.toggleClass("header__menu--is-visible");
      this.menuIcon.toggleClass("header__menu-icon--close-x");
    }
  }

  let mobileMenu = new MobileMenu;
