$('.collection_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrow: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1178,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 570,
        settings: {
          centerMode: true,

          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    prevArrow: $('.l_arrow'),
    nextArrow: $('.r_arrow')
});



$('.product_reviwe').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrow: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1178,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 570,
      settings: {

        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$(document).ready(function() {
  $(".accordion-button").on("click", function() {
    var clickedAccordion = $(this);
    if (!clickedAccordion.hasClass('active')) {
      $(".accordion-button").removeClass('active');
      $(".accordion-content").slideUp();
    }
    clickedAccordion.toggleClass('active');
    var content = clickedAccordion.siblings(".accordion-content");
    content.slideToggle();
  });
});


$(".burger").click(function() {
  $(".burger_inner").toggleClass("open");
  $(".burger").toggleClass("active");
  $("html").toggleClass("hold");
});
