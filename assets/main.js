(function ($) {
 
    'use strict';
     
        $(document).ready(function(){

            readyActivation();
            magnificPopupActivation();
            testimonialActivation();

        });



      function readyActivation() {

        sal({
            threshold: 0.3,
            once: true
        });

        $('.slider-thumb-activation-one').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            focusOnSelect: false,
            speed: 1000,
            autoplay: false,
            asNavFor: '.slider-content-activation-one',
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]

        });

        $('.slider-content-activation-one').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: false,
            speed: 500,
            fade: true,
            autoplay: false,
            asNavFor: '.slider-thumb-activation-one',
        });

        $('.slider-thumb-activation-two').slick({
            infinite: true,
            slidesToShow: 3,
            centerPadding: '0',
            arrows: false,
            dots: true,
            speed: 1500,
            autoplay: false,
            centerMode: true,
            responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('.testimonial-slick-activation').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 500,
            draggable: true,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('.recently-viwed-activation').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            dots: false,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.popular-product-activation').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
            
        });
        
        $('.categrie-product-activation-2').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 7,
            arrows: true,
            dots: false,
            autoplay: true,
            speed: 1000,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        $('.categrie-product-activation-3').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            arrows: true,
            dots: false,
            autoplay: false,
            speed: 1000,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },

            ]
        });

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

        $('.categrie-product-activation').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 7,
            arrows: true,
            dots: false,
            autoplay: false,
            speed: 1000,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },

            ]
        });
      }
      function testimonialActivation() {

        var $slideStatus = $('.slick-slide-count');
            
        $('.testimonial-slick-activation-three').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $slideStatus.text(i + '/' + slick.slideCount);
        });

        $('.testimonial-slick-activation-three').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 500,
            draggable: true,
            prevArrow: $('.prev-custom-nav'),
            nextArrow: $('.next-custom-nav'),
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
      }
      function magnificPopupActivation() {
            var yPopup = $('.popup-youtube');
            if (yPopup.length) {
                yPopup.magnificPopup({
                    disableOn: 300,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }
            if ($('.zoom-gallery').length) {
                $('.zoom-gallery').each(function() {
                    $(this).magnificPopup({
                        delegate: 'a.popup-zoom',
                        type: 'image',
                        gallery: {
                            enabled: true
                        }
                    });
                });
            }
        }



    })(jQuery)