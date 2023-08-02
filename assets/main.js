(function ($) {
 
    'use strict';
     

        $(document).ready(function(){
            $('.categrie-product-activation-4').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                autoplay: false,
                speed: 1000,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
            });
          });



    })(jQuery)