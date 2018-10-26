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

    $('.itensSelect .title .section__page__title span').on('click', function() {
      let dataName = $(this).attr('data-name');
      $('.itensSelect .title .section__page__title span').removeClass('active');
      $(this).addClass('active');
      $('.shelf__carousel--full .itemSlider').each(function() {
        let dataNameSlider = $(this).attr('data-name');
        if(dataNameSlider == dataName) {
          $('.shelf__carousel--full .itemSlider').removeClass('active');
          $(this).addClass('active');
        }
      })
    });

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







  }
});
