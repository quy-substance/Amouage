function initDropdownColumns() {
  var columnTitle = document.querySelectorAll("[data-toggle-column]");
  if (columnTitle.length > 0) {
    for (i = 0; i < columnTitle.length; i++) {
      (function (i) {
        columnTitle[i].addEventListener("click", function (event) {
          var $this = event.target;
          if ($this.classList.contains("is-clicked")) {
            $this.classList.remove("is-clicked");
          } else {
            $this.classList.add("is-clicked");
          }
        });
      })(i);
    }
  }
}

function initMobileMenu() {
  var buttonIconOpen = document.querySelector("[data-toggle-mobile-menu]");

  buttonIconOpen?.addEventListener("click", function (event) {
    document.body.classList.toggle("menu_open");
  });
}

initMobileMenu();
initDropdownColumns();

$(document).ready(function ($) {
  // p-top1
  $('.js-slider1').slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    appendDots: $('.c-dots'),
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });
  // tab ranking
  $('.TabsNav-ranking li:first-child').addClass('is-active');
  $('.TabsNav-ranking .tab-content').hide();
  $('.TabsNav-ranking .tab-content:first').show();

  $('.TabsNav-ranking li').click(function () {
    $('.TabsNav-ranking li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.TabsNav-ranking .tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  // p-top5
  $('.js-slider2').slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false
  });
  $('.js-slider3').slick({
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false
  });

  // popup video youtube
  $.fn.grtyoutube = function (options) {

    return this.each(function () {

      // Get video ID
      var getvideoid = $(this).attr("youtubeid");

      // Default options
      var settings = $.extend({
        videoID: getvideoid,
        autoPlay: true,
        theme: "dark"
      }, options);

      // Convert some values
      if (settings.autoPlay === true) { settings.autoPlay = 1 } else if (settings.autoPlay === false) { settings.autoPlay = 0 }
      if (settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if (settings.theme === "light") { settings.theme = "grtyoutube-light-theme" }

      // Initialize on click
      if (getvideoid) {
        $(this).on("click", function () {
          $("body").append('<div class="grtyoutube-popup ' + settings.theme + '">' +
            '<div class="grtyoutube-popup-content">' +
            '<span class="grtyoutube-popup-close"></span>' +
            '<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + settings.videoID + '?rel=0&wmode=transparent&autoplay=' + settings.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>' +
            '</div>' +
            '</div>');
        });
      }

      // Close the box on click or escape
      $(this).on('click', function (event) {
        event.preventDefault();
        $(".grtyoutube-popup-close, .grtyoutube-popup").click(function () {
          $(".grtyoutube-popup").remove();
        });
      });

      $(document).keyup(function (event) {
        if (event.keyCode == 27) {
          $(".grtyoutube-popup").remove();
        }
      });
    });
  };

  $(".youtube-link").grtyoutube({
    autoPlay: true
  });

  // tab news
  $('.TabsNav-news li:first-child').addClass('is-active');
  $('.c-Tabs .TabsNav-news').parent().find('.tab-content').hide();
  $('.c-Tabs .TabsNav-news').parent().find('.tab-content:first').show();

  $('.TabsNav-news li').click(function () {
    $('.TabsNav-news li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.c-Tabs .TabsNav-news').parent().find('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  // scroll to top
  $("a.scrollToTop").click(function () {
    $("html,body").scrollTop(0);
    return false;
  });

  // girls list
  $('.js-slider4').slick({
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false
  });
  $('.js-showFilter').click(function () {
    $(this).toggleClass('is-show');
    $(this).parent().find('.c-dropFilter__List').slideToggle();
  })
  $('.c-dropFilter__List li').click(function (e) {
    e.preventDefault();
    const value = $(this).find('a').html();
    $('.c-dropFilter__title span').html(value);
    $('.c-dropFilter__List').slideUp();
  })
  // silder thumbnail girls list detail
  $('.js-sliderThumnail').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    infinite: true,
    dots: true,
    fade: true,
    arrows: false,
    customPaging: function (slider, i) {
      return '<button><span style="background-image:url(' + $(slider.$slides[i]).data('thumb') + ');"></span></button>';
    }
  });
  $('.js-clickScroll a').click(function () {
    $("html,body").scrollTop(0);
  })
  $('.js-showFaq .c-Faq__title').click(function () {
    $(this).toggleClass('is-show');
    $(this).parent().find('.c-Faq__content').slideToggle();
  })
  $(document).on('click', 'a[href^="#"]', function (e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }
    e.preventDefault();
    var pos = $id.offset().top - 50;
    $('body, html').animate({ scrollTop: pos });
  });
});

