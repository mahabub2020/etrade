(function ($) {
 
    'use strict';

        $(document).ready(function(){ 
            readyActivation();  
            testimonialActivation();
            countdown();
            headerIconToggle();
            headerCampaignRemove(); 
            axilslickactivation2();
            magnificPopupActivationProductDetails();
            magnificPopupActivation();
            axilslickactivation3();
            axilSlickActivation();
            axilBackToTop();

        });

    function  axilBackToTop() {
        var btn = $('#backto-top');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    }
    
document.addEventListener("shopify:section:load", () => {
    axilSlickActivation();
    countdown(); 
    axilBackToTop();

});

function  axilSlickActivation (e) {
    $('.axil-slick-slider').not('.slick-initialized').slick();
}

function productGlightbox() {

	// Start Product Page Lightbox
	var lightbox = GLightbox({
		autoplayVideos: true,
		selector: ".enable-zoom .image-popup",
		title: false,
		openEffect: "zoom",
		closeEffect: "fade",
		fade: {
			in: "fadeIn",
			out: "fadeOut",
		},
		zoom: {
			in: "zoomIn",
			out: "zoomOut",
		},
	});
	var lightboxVideo = GLightbox({
		selector: '.video-popup'
	});

	lightboxVideo.on('slide_changed', ({
		prev,
		current
	}) => {
		console.log('Prev slide', prev);
		console.log('Current slide', current);

		const {
			slideIndex,
			slideNode,
			slideConfig,
			player
		} = current;

		if (player) {
			if (!player.ready) {
				// If player is not ready
				player.on('ready', (event) => {
					// Do something when video is ready
				});
			}

			player.on('play', (event) => {
				console.log('Started play');
			});

			player.on('volumechange', (event) => {
				console.log('Volume change');
			});

			player.on('ended', (event) => {
				console.log('Video ended');
			});
		}
	});
	// End Product Page Lightbox
 }
function axilslickactivation3() {

    var SlickCarousel = $('.single-product-thumb');


    if (SlickCarousel.length) {
        try {
            if (SlickCarousel.find('.product-small-thumb-2').hasClass('slick-initialized')) {
                SlickCarousel.find('.product-small-thumb-2').slick('unslick');
            }

            if (SlickCarousel.find('.product-large-thumbnail-2').hasClass('slick-initialized')) {
                SlickCarousel.find('.product-large-thumbnail-2').slick('unslick');
            }

        } catch (e) { }

        SlickCarousel.find('.product-large-thumbnail-2').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 800,
            draggable: false,
            
            asNavFor: '.product-small-thumb-2',
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="far fa-angle-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="far fa-angle-right"></i></button>'


        });
        SlickCarousel.find('.product-small-thumb-2').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            speed: 800,
                
            asNavFor: '.product-large-thumbnail-2',
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 4,
                }
            }
            ]


        });

    }
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
                delegate: 'a.popup-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }
}



function magnificPopupActivationProductDetails() {
    $(document).on('click', '.product-quick-view', function (event) {
        event.preventDefault();

        $(this).next('.single-product-thumbnail').children('.slick-list').children('.slick-track').children('.slick-slide').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');

        /*let images = [];
        $('.single-product-thumbnail .slick-track .slick-slide').each(function() { // the containers for all your galleries
            images.push({
                src: $(this).find('img').attr('src'),
                type: 'image'
            });
        });

        $(this).magnificPopup({
            items: images, // the selector for gallery item
            delegate: 'a',
            type: 'image',
            gallery: {
            enabled:true
            }
        }).magnificPopup('open');*/
        });
}

function axilslickactivation2() { 

    var SlickCarousel = $('.single-product-thumb');


    if (SlickCarousel.length) {
        try {
            if (SlickCarousel.find('.product-small-thumb').hasClass('slick-initialized')) {
                SlickCarousel.find('.product-small-thumb').slick('unslick');
            }

            if (SlickCarousel.find('.product-large-thumbnail').hasClass('slick-initialized')) {
                SlickCarousel.find('.product-large-thumbnail').slick('unslick');
            }

        } catch (e) { }


        SlickCarousel.find('.product-large-thumbnail').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 800,
            draggable: false,
            
            asNavFor: '.product-small-thumb'

        });
        SlickCarousel.find('.product-small-thumb').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            vertical: true,
            
            speed: 800,
            asNavFor: '.product-large-thumbnail',
            responsive: [{
                breakpoint: 992,
                settings: {
                    vertical: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    slidesToShow: 4,
                }
            }
            ]


        });
    }
}


function headerCampaignRemove() {
    $('.remove-campaign').on('click', function() {
            var targetElem = $('.header-top-campaign');
            targetElem.slideUp(function() {
                $(this).remove();
            });
    });
}

function headerIconToggle() {

    var maskWrapper = $('<div / >').addClass('accountToggleMask');

    $('.my-account > a').on('click', function(e) {
        if (!$(this).hasClass('open')) {
            $(this).addClass('open').siblings().addClass('open');
            $(this).parent().append(maskWrapper);

        }else {
            $(this).removeClass('open').siblings().removeClass('open');
            $(this).parent().find('.accountToggleMask').remove();
        }

        $('.accountToggleMask').on('click', function(e) {
            $(this).removeClass('open').siblings().removeClass('open');
            $(this).parent().find('.accountToggleMask').remove();
        })

    })
}

 

function countdown() {
    if (typeof $.fn.countdown == 'function') {
        try {
            var day = 'Day',
                hour = 'Hour',
                minute = 'Minute',
                second = 'Second' ;

            $('.axilcoutdown').each(function () {
                var $CountdownSelector = $(this).find('.countdown');
                var eventCountdownTime = $CountdownSelector.data('time');
                $CountdownSelector.countdown(eventCountdownTime).on('update.countdown', function (event) {
                    $(this).html(event.strftime('' + '<div class="countdown-section"><div><div class="countdown-number">%D</div><div class="countdown-unit">' + day + '</div></div></div>' + '<div class="countdown-section"><div><div class="countdown-number">%H</div><div class="countdown-unit">' + hour + '</div></div></div>' + '<div class="countdown-section"><div><div class="countdown-number">%M</div><div class="countdown-unit">' + minute + '</div></div></div>' + '<div class="countdown-section"><div><div class="countdown-number">%S</div><div class="countdown-unit">' + second + '</div></div></div>'));
                }).on('finish.countdown', function (event) {
                    $(this).html(event.strftime(''));
                });
            });
            $('.axilcoutdown2').each(function () {
                var $CountdownSelector = $(this).find('.countdown');
                var eventCountdownTime = $CountdownSelector.data('time');
                $CountdownSelector.countdown(eventCountdownTime).on('update.countdown', function (event) {
                    $(this).html(event.strftime('' + '<div class="countdown-section"><div><div class="countdown-number">%D</div><div class="countdown-unit">' + day + '</div></div></div>' + '<div class="countdown-section"><div><div class="countdown-number">%H</div><div class="countdown-unit">' + hour + '</div></div></div>' + '<div class="countdown-section"><div><div class="countdown-number">%M</div><div class="countdown-unit">' + minute + '</div></div></div>' + '<div class="countdown-section"><div><div class="countdown-number">%S</div><div class="countdown-unit">' + second + '</div></div></div>'));
                }).on('finish.countdown', function (event) {
                    $(this).html(event.strftime(''));
                });
            });

        } catch (err) {
            console.log('Countdown : ' + err.message);
        }
    }
}


function slider_slick_activation_one() {

    var SlickCarousel = $('.main-slider-style-2');
    if (SlickCarousel.length) {
        try {
            if (SlickCarousel.find('.slider-activation-one').hasClass('slick-initialized')) {
                SlickCarousel.find('.slider-activation-one').slick('unslick');
            }
        } catch (e) { }

        SlickCarousel.find('.slider-activation-one').slick({
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,  
            focusOnSelect: false,
            speed: 400

        });
    } 
}


function readyActivation() {

    sal({
        threshold: 0.3,
        once: true
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
 
 

    $('.popular-product-activation').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
        
    });




}
function testimonialActivation() {

    var $slideStatus = $('.slick-slide-count');

    $('.testimonial-slick-activation-three').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $slideStatus.text(i + '/' + slick.slideCount);
    }); 
  
}
      
})(jQuery)