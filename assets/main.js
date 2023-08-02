(function (window, document, $, undefined) {
    'use strict';
    var axilInit = {
        i: function (e) {
            axilInit.s();
            axilInit.methods();
        },

        s: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html'),
                this._subscribePopUp = $('.subscribe-popup')
 
          

        },
        methods: function (e) {
            axilInit.w();
            axilInit.headerCampaignRemove();
            axilInit.axilHover();
            axilInit.axilBackToTop();           
            axilInit.loadSubscribePopup();
            axilInit.magnificPopupActivation();    
            axilInit.magnificPopupActivation2();    
            axilInit.list_button_popup();    
            axilInit._initAskAQuestionName();    
            axilInit.trendPost();       
            axilInit.cursorAnimate();
            axilInit.onhoverAnimated();
            axilInit.searchClick();
            axilInit._clickDoc();
            axilInit.preloaderInit();
            axilInit.sidebarToggleList();     
            axilInit.sideOffcanvasToggle('.mobile-nav-toggler', '.header-main-nav', '.sidebar-close');
            axilInit.sideOffcanvasToggle('.department-side-menu', '.department-nav-menu', '.sidebar-close');
            axilInit.sideOffcanvasToggle('.filter-toggle', '.axil-shop-sidebar', '.sidebar-close');
            axilInit.sideOffcanvasToggle('.axil-search', '#header-search-modal', '.card-close');
            axilInit.sideOffcanvasToggle('.popup-close, .closeMask', "#offer-popup-modal", '.sidebar-close');
            axilInit.headerIconToggle();
            axilInit.wishlist_icon();
            axilInit.minimize_icon();
            axilInit.headerIconToggleSelect();
        },
        w: function (e) {
            this._window.on('load', axilInit.l).on('scroll', axilInit.scrl).on('resize', axilInit.res)
        },
        scrl: function () {

        },

        headerIconToggleSelect: function() {
            $('.axil-shop-top ul.axil-price-filter').each(function(){
            var list=$(this),
                select=$(document.createElement('select')).insertBefore($(this).hide()).change(
                    function()
                    { 
                        $(this).val()
                    });

            $('>li a', this).each(function(){

              var option=$(document.createElement('option'))
               .appendTo(select)
               .val(this.href)
               .html($(this).html());
              if($(this).attr('class') === 'selected2'){
                option.attr('selected','selected');
              }

            });
            list.remove();
            });
        },


        headerIconToggle: function() {

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
        },

      headerCampaignRemove: function() {
           $('.remove-campaign').on('click', function() {
                var targetElem = $('.header-top-campaign');
                targetElem.slideUp(function() {
                    $(this).remove();
                });
           });
        },
  

    pagereload: function () { 
       
        $('.menu-item-2516').click(function() {
            location.reload();
        });

   },

    sideOffcanvasToggle: function(selectbtn, openElement, closeButton) {

            $('body').on('click', selectbtn, function(e) {
                e.preventDefault();
                
                var $this = $(this),
                    wrapp = $this.parents('body'),
                    wrapMask = $('<div / >').addClass('closeMask'),
                    cartDropdown = $(openElement);

                if (!(cartDropdown).hasClass('open')) {
                    wrapp.addClass('open');
                    cartDropdown.addClass('open');
                    cartDropdown.parent().append(wrapMask);
                    wrapp.css({
                        'overflow': 'hidden'

                    });

                    setTimeout(function () {
                        $('div.card-header div.input-group input#prod-search').trigger('focus');
                        document.getElementById('prod-search').focus();
                    }, 200);

                } else {
                    removeSideMenu();
                }

                function removeSideMenu() {
                    wrapp.removeAttr('style');
                    wrapp.removeClass('open').find('.closeMask').remove();
                    cartDropdown.removeClass('open');
                }

                $('.closeMask').on('click', function() {
                    removeSideMenu();
                });
                $(closeButton).on('click', function() {
                    removeSideMenu();
                });



            });
        },

        sidebarToggleList: function sidebarToggleList(e) {
        // sidebar dropdwon
        $(".toggle-list > .title").click(function(e) {
            var target = $(this).parent().children(".shop-submenu");
            var target2 = $(this).parent();
            $(target).slideToggle();
            $(target2).toggleClass("active");
        }); 

            $(".toggle-btn").click(function(e) {

                var target = $(this).parent().siblings(".toggle-open");
                var target2 = $(this).parent();
                $(target).slideToggle();
                $(target2).toggleClass("active");
            }); 

            // Mobile Sidemenu Class Add
            function resizeClassAdd() {
                if (window.matchMedia('(max-width: 1199px)').matches) {
                    $('.department-title').addClass('department-side-menu');
                    $('.department-megamenu').addClass('megamenu-mobile-toggle');
                    
                } else {
                    $('.department-title').removeClass('department-side-menu');
                    $('.department-megamenu').removeClass('megamenu-mobile-toggle').removeAttr('style');
                }
                
                if (window.matchMedia('(max-width: 991px)').matches) {
                    $('body').addClass('mobile-menu-start');
                    
                } else {
                    $('body').removeClass('mobile-menu-start');
                }
            }

            $('.menu-item-has-children > a').on('click', function(e) {
                e.preventDefault();
                var targetParent = $(this).parents('.header-main-nav');
                var target = $(this).siblings('.axil-submenu');

                if (targetParent.hasClass('open')) {
                    $(target).slideToggle(400);
                    $(this).parent('.menu-item-has-children').toggleClass('open');
                }

            });

            $('.megamenu-wrapper > .nav-link').on('click', function(e) {

                var $this = $(this),
                targetElm = $this.siblings('.megamenu-mobile-toggle');
                targetElm.slideToggle(400);
            });

            if ($('body').hasClass('mobile-menu-start')) {
                $('.mainmenu-nav').append('<button class="mobile-close-btn mobile-nav-toggler"><i class="fas fa-times"></i></button>');
            }  
            
            $(window).resize(function() {
                resizeClassAdd();
            });
            resizeClassAdd();
        },

    minimize_icon: function () {        
        $('.minimize').on('click', function (e) {            
            var h = $(this).parents(".widget-title");
            var c = h.next('.axil-shop-widget-content');
            var p = h.parent();
            c.slideToggle();
            p.toggleClass('closed');
            e.preventDefault();
        });
    },



    wishlist_icon : () => {
              // Wishlist
        $(document).on('click', '.axil-wishlist-icon', function () {

                if ($(this).hasClass('axil-add-to-wishlist') && typeof yith_wcwl_l10n != "undefined") {

                    var $obj = $(this),
                        productId = $obj.data('product-id'),
                        afterTitle = $obj.data('title-after');
                    var data = {
                        'action': 'etrade_add_to_wishlist',
                        'context': 'frontend',
                        'nonce': $obj.data('nonce'),
                        'add_to_wishlist': productId
                    };

                    $.ajax({
                        url: yith_wcwl_l10n.ajax_url,
                        type: 'POST',
                        data: data,
                        beforeSend: function beforeSend() {
                            $obj.find('.wishlist-icon').hide();
                            $obj.addClass('ajaxloading');
                        },
                        success: function success(data) {
                            if (data['result'] != 'error') {
                                $obj.removeClass('ajaxloading');
                                $obj.find('.wishlist-icon').removeClass('fa fa-heart').addClass('fas fa-heart').show();
                                $obj.removeClass('axil-add-to-wishlist').addClass('axil-remove-from-wishlist');
                                $obj.find('span').html(afterTitle);
                                let wishObj = $('.wishlist-icon-num');
                                let count = parseInt(wishObj.text());
                                count = isNaN(count) ? 0 : count;
                                count += 1;
                                if (count > 0) {
                                    wishObj.addClass('wishlist-icon-style');
                                }
                                wishObj.html(count);
                            } else {
                                console.log(data['message']);
                            }
                        }
                    });

                    return false;
                }
            });
 
                $(document).on('click', '.remove_from_wishlist', function (event) {
                    let wishObj = $('.wishlist-icon-num');
                    let count = parseInt(wishObj.text());
                    count = isNaN(count) ? 0 : count;
                    count -= 1;
                    

                    setTimeout(function () {
                        if (count < 1) {
                            wishObj.removeClass('wishlist-icon-style');
                            wishObj.html('');
                        } else {
                            wishObj.html(count);    
                        }
                    }, 1000);

                });

        },

    /* Quantity change */
     quantity_change: function () {
   
        $(document).on('click', '.quantity .input-group-btn .quantity-btn',function(){
            var $input = $(this).closest('.quantity').find('.input-text');

            if ( $(this).hasClass('quantity-plus') ) {
                $input.trigger('stepUp').trigger('change');
            }

            if ( $(this).hasClass('quantity-minus') ) {
                $input.trigger('stepDown').trigger('change');
            }
        });
    },

    /* Product slider navigation height */
    slider_nav: function () {
  
        $('.axilueproduct-slider').each(function() {
            var $target = $(this).find('.owl-custom-nav .owl-nav button.owl-prev, .owl-custom-nav .owl-nav button.owl-next'),
            $img = $(this).find('.axilue-thumb-wrapper').first();

            if ($img.length) {
                var height = $img.outerHeight();
                height = height/2 - 24;
                $target.css('top', height + 'px');
            }
        });
    },

        slick_carousel: function () {
            if (typeof $.fn.slick == 'function') {
                $(".axil-slick-slider").each(function() {
                    $(this).slick({
                        rtl: etradeObj.rtl
                    });
                });
                $(document).on('afterLoadMore afterInfinityScroll', function() {
                    $(".product_loaded .wooc-slick-slider").each(function() {
                        $(this).slick({
                            rtl: etradeObj.rtl
                        });
                    });
                    $(".product_loaded").removeClass('product_loaded');
                });
            }
        },

        stickHeader: function () {
            axilInit._window.scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header-sticky').addClass('sticky');
                    $('body').addClass('header-sticky-now');
                }else{
                    $('.header-sticky').removeClass('sticky');
                    $('body').removeClass('header-sticky-now');
                }
            })
        },


        mobileMenuShow: function () {
            $('.hamburger-menu').on('click', function (e) {
                e.preventDefault();
                axilInit._body.addClass('popup-mobile-menu-show'),
                    axilInit._html.css({
                        overflow: 'hidden'
                    });
            });
        },


        mobileMenuNew: function (e) {
            $('.mobile-close').on('click', function (e) {
                e.preventDefault();
                axilInit._body.removeClass('popup-mobile-menu-show'),
                    axilInit._html.css({
                        overflow: ''
                    });
                $('.has-children > a').removeClass('open').siblings('.submenu').slideUp('400');
            })
            $('.popup-mobilemenu-area').on('click', function (e) {
                e.target === this && axilInit._body.removeClass('popup-mobile-menu-show'),
                    axilInit._html.css({
                        overflow: ''
                    });
            })
            var screenWidth = axilInit._window.width();
            if (screenWidth < 1200) {
                $('.has-children > a').on('click', function (e) {
                    e.preventDefault();
                    $(this).siblings('.submenu').slideToggle('400');
                    $(this).toggleClass('open').siblings('.submenu').toggleClass('active');
                })
            }
        },

        preloaderInit: function(){
            axilInit._window.on('load', function () {
                $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
                });
            });
        },


        searchClick:function (e) {
            var screenWidth = axilInit._window.width();
            if (screenWidth < 576) {
                $('.axil-search .search-button').on('click', function (e) {
                    e.preventDefault();
                    $(this).toggleClass('open').siblings('.form-control').slideToggle().toggleClass('active');
                })
            }
        },

        cursorAnimate: function () {
            var myCursor = jQuery('.mouse-cursor');
            if (myCursor.length) {
                if ($('body')) {
                    const e = document.querySelector('.cursor-inner'),
                        t = document.querySelector('.cursor-outer');
                    let n, i = 0,
                        o = !1;
                    window.onmousemove = function (s) {
                        o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                    }, $('body').on("mouseenter", "a, .cursor-pointer", function () {
                        e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
                    }), $('body').on("mouseleave", "a, .cursor-pointer", function () {
                        $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover'))
                    }), e.style.visibility = "visible", t.style.visibility = "visible"
                }
            }
        },

        onhoverAnimated: function () {
            var cerchio = document.querySelectorAll('.cerchio');
            cerchio.forEach(function (elem) {
                $(document).on('mousemove touch', function (e) {
                    magnetize(elem, e);
                });
            })
            function magnetize(el, e) {
                var mX = e.pageX,
                    mY = e.pageY;
                const item = $(el);
                const customDist = item.data('dist') * 5 || 60;
                const centerX = item.offset().left + (item.width() / 2);
                const centerY = item.offset().top + (item.height() / 2);
                var deltaX = Math.floor((centerX - mX)) * -0.45;
                var deltaY = Math.floor((centerY - mY)) * -0.45;
                var distance = calculateDistance(item, mX, mY);
                if (distance < customDist) {
                    TweenMax.to(item, 0.5, {
                        y: deltaY,
                        x: deltaX,
                        scale: 1.05
                    });
                    item.addClass('magnet');
                } else {
                    TweenMax.to(item, 0.6, {
                        y: 0,
                        x: 0,
                        scale: 1
                    });
                    item.removeClass('magnet');
                }
            }

            function calculateDistance(elem, mouseX, mouseY) {
                return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
            }
            /*- MOUSE STICKY -*/
            function lerp(a, b, n) {
                return (1 - n) * a + n * b
            }
        },

        loadSubscribePopup: function () {
            setTimeout(function () {
                axilInit._subscribePopUp.addClass('show-popup');
            }, 3000);
        },

        mobileMenuShow: function () {
            $('.hamburger-menu').on('click', function (e) {
                e.preventDefault();
                axilInit._body.addClass('popup-mobile-menu-show'),
                    axilInit._html.css({
                        overflow: 'hidden'
                    });
            });
        },

        mobileMenuHide: function () {
            $('.mobile-close').on('click', function (e) {
                e.preventDefault();
                axilInit._body.removeClass('popup-mobile-menu-show'),
                    axilInit._html.css({
                        overflow: ''
                    });
                $('.popup-mobilemenu-area .menu-item-has-children a').removeClass('open').siblings('.axil-submenu').slideUp('400');   

            })
            $('.popup-mobilemenu-area').on('click', function (e) {
                e.target === this && axilInit._body.removeClass('popup-mobile-menu-show'),
                    axilInit._html.css({
                        overflow: ''
                    });
            })
        },

        mobileMenu: function (e) {
            var screenWidth = axilInit._window.width();
            if (screenWidth < 1200) {
                $('.popup-mobilemenu-area .menu-item-has-children a').on('click', function (e) {
                    $(this).siblings('.axil-submenu').slideToggle('400');
                    $(this).toggleClass('open').siblings('.axil-submenu').toggleClass('active')
                })
            }
        },

        axilHover: function () {
            $('.content-direction-column, .post-listview-visible-color').mouseenter(function () {
                var self = this;
                $(self).removeClass('axil-control');
                setTimeout(function () {
                    $('.content-direction-column.is-active, .post-listview-visible-color .post-list-view.is-active').removeClass('is-active').addClass('axil-control');
                    $(self).removeClass('axil-control').addClass('is-active');
                }, 0);
            });
        },

        trendPost: function () {
            $(window).resize(function () {

            });
            //do something
            var width = axilInit._window.width();
            if (width > 991) {
                $('.trend-post').mouseenter(function () {
                    var self = this;
                    $(self).removeClass('axil-control');
                    setTimeout(function () {
                        $('.trend-post.is-active').removeClass('is-active').addClass('axil-control');
                        $(self).removeClass('axil-control').addClass('is-active');
                    }, 0);

                });
            }
        },

        megamenuHover: function () {
            $('.vertical-nav-menu li.vertical-nav-item').hover(function () {
                $('.axil-vertical-inner').hide();
                $('.vertical-nav-menu li.vertical-nav-item').removeClass('active');
                $(this).addClass('active');
                var selected_tab = $(this).find('a').attr("href");
                $(selected_tab).stop().fadeIn();
                return false;
            });
        },

        axilBackToTop: function () {
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
        },

        magnificPopupActivation: function() {
          $(document).on('click', 'a.popup-zoom', function (event) {

            event.preventDefault();
                let images = [];
                $('.single-product-thumbnail .slick-track .slick-slide').each(function() { // the containers for all your galleries
                    images.push({
                        src: $(this).find('img').attr('src'),
                        type: 'image'
                    });
                });

                $(this).magnificPopup({
                    items: images, // the selector for gallery item
                    type: 'image',
                    gallery: {
                      enabled:true
                    }
                }).magnificPopup('open');
                
            });
        },

        magnificPopupActivation2: function() {
          $(document).on('click', 'a.popup-zoom-single', function (event) { 
            event.preventDefault();
                let images = [];
                $('.single-product-3 .zoom-gallery').each(function() { // the containers for all your galleries
                    images.push({
                        src: $(this).find('img').attr('src'),
                        type: 'image'
                    });
                });

                $(this).magnificPopup({
                    items: images, // the selector for gallery item
                    type: 'image',
                    gallery: {
                      enabled:true
                    }
                }).magnificPopup('open');
                
            });




        }, 

     _initAskAQuestionName: function() { 
        let question = $('.popup-aska-question');
        if (question.find('.product_name').length === 0) return;
        question.find('.product_name').val(question.find('.product-info .name').text());
      },
          
       list_button_popup: function() {
      
        if (!$('.popup-button-open').length) return;
        $('.popup-button-open').magnificPopup({
          type: 'inline',
          fixedContentPos: 'hidden',
          fixedBgPos: true,
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'popup-button-mfp-zoom-in model-mfp-max-width'
        });
      },
        
        _clickDoc: function (e) {
            var subscribePopupHide;
            subscribePopupHide = function (e) {
                if (!$('.subscribe-popup-inner, .subscribe-popup-inner *:not(.close-popup, .close-popup i, .newsletter-content .close-button)').is(e.target)) {
                    axilInit._subscribePopUp.fadeOut("300");
                }
            };
            axilInit._document
                .on('click', '.close-popup', subscribePopupHide)
                .on('click', subscribePopupHide)
        }
    }
    axilInit.i();

   

})(window, document, jQuery);
