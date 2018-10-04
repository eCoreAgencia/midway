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
    listToExpand.toggle();
    listToExpand.hasClass("is-active")
      ? arrow.css({ transform: " rotate(90deg)" })
      : arrow.css({ transform: " rotate(0deg)" });
  });

  let iconSearch = document.querySelectorAll('header__account__info i');
  let searchForm = document.querySelector('header__search-form');

  iconSearch.addEventListener('click', showSearch)
  let showSearch = () => {
    searchForm.classList.addClass('is-active');
  }

});

