class MobileMenu {
    constructor() {
      this.menuIcon = $(".header__menu-icon");
      this.menuMobileContent = $(".header__menu");
      this.events();
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