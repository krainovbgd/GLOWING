

$('#header-slider').slick({
  arrows: false,
  autoplay: true,
  infinity:  true,
  autoplaySpeed: 4000,
  speed: 1000,
  fade: true,
  pauseOnFocus: false,
  pauseOnHover: false
})

$('#card-sl').slick ({
  initialSlide: 0,
  dots: true,
  arrows: false, 
  centerMode: false,
  variableWidth: false,
  infinity: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0
      }
    },
    {
      breakpoint: 4000,
      settings: {
        dots: false,
        arrows: true, 
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        infinity: false,
        initialSlide: 0
      }
    },
    
  ]
})


  $('#sponsor_sl').slick ({
    initialSlide: 0,
    dots: true,
    arrows: false, 
    centerMode: false,
    variableWidth: false,
    infinity: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: 'unslick'
      },
    ]
  })

  const set_spons= {
    // default settings
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 4000,
        settings: 'unslick'
      },
    ]
  };
  
  const sl2 =  $('#sponsor_sl').slick(set_spons);
     
  $(window).on('resize', function() {
  if( $(window).width() > 920 &&  !sl2.hasClass('slick-initialized')) {
        $('#sponsor_sl').slick(set_spons);
   }
  });







$('#img-box-sl').slick ({
  initialSlide: 0,
  dots: false,
  arrows: false, 
  centerMode: false,
  variableWidth: false,
  infinity: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 4000,
      settings: 'unslick'
    }
  ]
})

const settings = {
  // default settings
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 4000,
      settings: 'unslick'
    }
  ]
};

const sl =  $('#img-box-sl').slick(settings);
   
$(window).on('resize', function() {
if( $(window).width() > 920 &&  !sl.hasClass('slick-initialized')) {
      $('#img-box-sl').slick(settings);
 }
});


$("img.img-svg").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(imgURL, function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
          $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
      }
      $img.replaceWith($svg);
  }, "xml");
});

const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");
  $this.next("ul").slideToggle(500, function () {
    console.log(this);
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });

  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .slideUp();
}

function resetMobileMemu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".mobile-navigation  .has-submenu").removeClass("opener").find("ul").hide();
}
