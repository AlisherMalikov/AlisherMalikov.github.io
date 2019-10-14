$(document).ready(function(){
    new WOW().init();
    $(window).on('scroll',function(){
        if($(window).scrollTop()){

            $('.header_bottom').addClass('fixed');
            $('.logo').addClass('fix_logo');
        }
        else{
            $('.header_bottom').removeClass('fixed ');
            $('.logo').removeClass('fix_logo');

        }
    });



    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('menu-mobile');
    });

    $('.product-card').hover(
        
        function() {
          $( this ).addClass( "scale-card" );
        }, function() {
          $( this ).removeClass( "scale-card" );
        }
      );
    
 

           $(".product-cards").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            verticalSwiping: true,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
  });

  $(".product-cards").on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));
    


});
