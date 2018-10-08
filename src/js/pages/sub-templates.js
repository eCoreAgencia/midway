$(() => {
  let footerTlt = $(".footer__main__title");
  let list = footerTlt.parent().find("ul");
  list.css("display", "none");

  footerTlt.click(event => {
    let arrow = $(event.target).find("i");
    let listToExpand = $(event.target)
      .parent()
      .find("ul");
    listToExpand.toggleClass("is-active");
    listToExpand.toggle(700);
    listToExpand.hasClass("is-active")
      ? arrow.css({ transform: " rotate(90deg)" })
      : arrow.css({ transform: " rotate(0deg)" });
  });

  let searchIcon = $(".header__account-info i");
  let searchBAr = $(".header__search-form");
  searchIcon.click(() => {
    searchBAr.toggleClass("header__search-form--is-active");
  });
});
