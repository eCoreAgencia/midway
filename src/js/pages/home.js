/* $('.shelf__carousel--category ul').slick({
  arrows: true,
  slideToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  prevArrow: shelf__prev,
  nextArrow:shelf__next
}); */

$(document).ready(function() {
  if ($("body").hasClass("home")) {
    if ($(".call__box")[0]) {
      $(".call__box").each(function() {
        const img = $("img", this).attr("src");

        $(this).css("background-image", "url(" + img + ")");
      });
    }

    $(".product--shelf-flip .product__front").on("click", function() {
      $(this)
        .parents(".product--shelf-flip")
        .addClass("hover");
    });

    var $gallery = $(".banner--full .banner__inner");
    var slideCount = null;

    $gallery.on("init", function(event, slick) {
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });

    $gallery.on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      setCurrentSlideNumber(nextSlide);
    });

    function setSlideCount() {
      var $el = $(".slide-count-wrap").find(".total");
      $el.text(function(i, n) {
        var result = Number(n) + 1;
        if (result < 10) {
          return "0" + slideCount;
        } else {
          return result;
        }
      });
    }

    function setCurrentSlideNumber(currentSlide) {
      var $el = $(".slide-count-wrap").find(".current");
      var n = currentSlide + 1;
      $el.text(function(i, n) {
        var result = currentSlide + 1;
        if (result < 10) {
          return "0" + result;
        } else {
          return result;
        }
      });
    }

    $gallery.slick({
      dots: true,
      autoplay: true,
      arrows: false,
      fade: true,
      infinite: false
    });

    const shelf__prev = `<button type='button' class='slick-prev shelf__button'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="27" viewBox="0 0 15 27"><defs><path id="idyha" d="M361 1386l-12-12.5 12-12.5"/><clipPath id="idyhb"><use fill="#fff" xlink:href="#idyha"/></clipPath></defs><g><g transform="translate(-347 -1360)"><use fill="#fff" fill-opacity="0" stroke="#f22100" stroke-miterlimit="50" stroke-width="4" clip-path="url(&quot;#idyhb&quot;)" xlink:href="#idyha"/></g></g></svg></button>`;
    const shelf__next = `<button type='button' class='slick-next shelf__button'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="27" viewBox="0 0 15 27"><defs><path id="pyzfa" d="M1545 1361l12 12.5-12 12.5"/><clipPath id="pyzfb"><use fill="#fff" xlink:href="#pyzfa"/></clipPath></defs><g><g transform="translate(-1544 -1360)"><use fill="#fff" fill-opacity="0" stroke="#f22100" stroke-miterlimit="50" stroke-width="4" clip-path="url(&quot;#pyzfb&quot;)" xlink:href="#pyzfa"/></g></g></svg></button>`;

    $(".shelf__carousel--full ul").slick({
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
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    });

    $(".shelf__brand").slick({
      arrows: true,
      slideToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      prevArrow: shelf__prev,
      nextArrow: shelf__next
    });

    $(window).on("productFinished", function() {
      console.log("productFinished");
      $(".buy-by-category .shelf ul").each(function() {
        if ($("li.helperComplement", this)[0]) {
          $("li.helperComplement", this).remove();
        }
        if (
          $("li", this).length > 5 &&
          !$(this).hasClass("slick-initialized")
        ) {
          $(this).slick({
            arrows: true,
            slideToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            prevArrow: shelf__prev,
            nextArrow: shelf__next
          });
        }
      });
    });
  }
});
