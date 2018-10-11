$(() => {
  // Institucional part of footer
  const footerTlt = $('.footer__main__title');
  const list = footerTlt.parent().find('ul');
  list.css('display', 'none');

  footerTlt.click((event) => {
    const arrow = $(event.target).find('i');
    const listToExpand = $(event.target)
      .parent()
      .find('ul');
    listToExpand.toggleClass('is-active');
    listToExpand.toggle(700);
    listToExpand.hasClass('is-active')
      ? arrow.css({ transform: ' rotate(-270deg)' })
      : arrow.css({ transform: ' rotate(-90deg)' });
  });

  //   Header Search Mobile
  const searchIcon = $('.header__account-info i');
  const searchBAr = $('.header__search-form');
  searchIcon.click(() => {
    searchBAr.toggleClass('header__search-form--is-active');
  });

  // Mobile Navbar Interaction
  const itemToClick = $('.navbar__list__item__link');
  const itemToExpand = '.navbar__list__item__dropdown';

  itemToClick.click((e) => {
	  let that = this;
    $(e.target)
      .next(itemToExpand)
	  .toggleClass('is-visible')
	  let go = $(that).find('i');
	  console.log(go);
  });
});
