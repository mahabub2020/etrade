$(document).ready(function(){

    $(document).on('click', '.cart-dropdown-btn', function(e) {
        e.preventDefault();
        $('.cart-dropdown').addClass('open');
    });

    $(document).on('click', '.cart-close', function() {
        $('.cart-dropdown').removeClass('open');
    });

    $('form[action="/cart/add"]').on('submit', async function(e) {
        e.preventDefault();
        
        await fetch("cart/add", {
            method: "post",
            body: new FormData(this),
        });
        const res = await fetch("/cart.json");
        const cart = await res.json();
        $('.cart-count').html(cart.item_count);

        const cartDrawer = await fetch("/?section_id=mini-cart");
        const cartDrawerHTML = await cartDrawer.text();
        $('.cart-body-wrap').html(cartDrawerHTML);
        $('.cart-dropdown').addClass('open');
    });

    // Add to wishlist start
    let wishlist_key = 'wishlist';
    let delimiter = ',';
    $('.axil-add-to-wishlist').on('click', function(e) {
        e.preventDefault();
        productHandle = $(this).attr('data-product-handle');
        updateWishlist(productHandle, this);
        // renderWishlist();
    });

    var updateWishlist = function (handle, element) {
        var wishlist = getWishlist();
        var indexInWishlist = wishlist.indexOf(handle);

        // wishlist icon change
        if (indexInWishlist === -1) {
            wishlist.push(handle);
            $(element).find('.wishlist-icon').removeClass('far');
            $(element).find('.wishlist-icon').addClass('fas');
        }
        else {
            wishlist.splice(indexInWishlist, 1);
            $(element).find('.wishlist-icon').removeClass('fas');
            $(element).find('.wishlist-icon').addClass('far');
        }
        return setWishlist(wishlist);
    };

    var getWishlist = function () {
        var wishlist = localStorage.getItem(wishlist_key) || false;
        if (wishlist) return wishlist.split(delimiter);
        return [];
    };

    var setWishlist = function (array) {
        var wishlist = array.join(delimiter);
        if (array.length) localStorage.setItem(wishlist_key, wishlist);
        else localStorage.removeItem(wishlist_key);

        var event = new CustomEvent('shopify-wishlist:updated', {
            detail: { wishlist: array }
        });
        document.dispatchEvent(event);

        return wishlist;
    };
    // Add to wishlist end

    // Wishlist page update
    // var renderWishlist = async function() {
    //     var wishlist = getWishlist();
    //     const wishlistProducts = await fetch("/?section_id=wishlist-products");
    //     const wishlistProductsText = await wishlistProducts.text();
    //     const wishlistProductsHtml = $('<div>' + wishlistProductsText + '</div>');
    //     $('.wishlist-items-wrapper').empty();
    //     if(wishlist != '') {
    //         for(var i = 0; i < wishlist.length; i++) {
    //             var output = $(wishlistProductsHtml).find('#' + wishlist[i]).prop('outerHTML');
    //             $('.wishlist-items-wrapper').append(output);

    //             // wishlist icon change
    //             $('.wishlist a[data-product-handle="'+wishlist[i]+'"]').find('.wishlist-icon').removeClass('far');
    //             $('.wishlist a[data-product-handle="'+wishlist[i]+'"]').find('.wishlist-icon').addClass('fas');
    //         }

    //         $('.remove_from_wishlist').on('click', function(e) {
    //             e.preventDefault();
    //             productHandle = $(this).attr('data-product-handle');
    //             updateWishlist(productHandle);
    //             renderWishlist();
    //         });
    //     } else {
    //         var output = '<tr><td colspan="6" class="wishlist-empty">No products added to the wishlist</td></tr>';
    //         $('.wishlist-items-wrapper').append(output);
    //     }
        
    //     wishlistCount(wishlist.length);
    // }

    // renderWishlist();

    var wishlistCount = function (count) {
        if(count > 0) {
            $('.wishlist-icon-num').removeClass('d-none');
            $('.wishlist-icon-num').text(count);
        }
        else {
            $('.wishlist-icon-num').addClass('d-none');
            $('.wishlist-icon-num').text(count);
        }
    }

    // QuickView
    $('.quickview').on('click', async function(e) {
        e.preventDefault();
        var pId = $(this).data('product_id');
        const quickViewProducts = await fetch("/?section_id=quick-view-products");
        const quickViewProductsText = await quickViewProducts.text();
        const quickViewProductsHtml = $('<div>' + quickViewProductsText + '</div>');
        var output = $(quickViewProductsHtml).find('#ProductInfo-'+pId).html();
        $('#yith-quick-view-content .product').html(output);
        $('#yith-quick-view-modal').modal().show();
    });

    $('#yith-quick-view-close').on('click', function(e) {
        e.preventDefault();
        $('#yith-quick-view-modal').modal().hide();
        $('.modal-backdrop').hide();
    })

    // Cart item quantity change
    $('.quantity-plus').on('click', function() {
        $(this).parent().find('.input-text.qty').trigger('stepUp').trigger('change');
    });

    $('.quantity-minus').on('click', function() {
        $(this).parent().find('.input-text.qty').trigger('stepDown').trigger('change');
    });

    // Load more
    $(document).on('click', '.btn-load-more', function() {
        var $this =$(this),
        totalPages = parseInt($('[data-total-pages]').val()),
        currentPage = parseInt($('[data-current-page]').val());
        // $this.attr('disabled', true);
        // $this.find('[loader]').removeClass('hide');
        currentPage = currentPage+1;
        var nextUrl = $('[data-next-url]').val().replace(/page=[0-9]+/,'page='+currentPage);
        $('[data-current-page]').val(currentPage);
        $.ajax({
          url: nextUrl,
          type: 'GET',
          dataType: 'html',
          success: function(responseHTML){
            $('.axiltheme-archive-products').append($(responseHTML).find('.axiltheme-archive-products').html());
          },
          complete: function() {
            if(currentPage == totalPages) {
               $this.hide(); 
            } 
          }
        })
    });

    // Search modal open
    $('.axil-search').on('click', function(e) {
        e.preventDefault();
        $('body, .header-search-modal').addClass('open');
        $('#closeMask').addClass('closeMask');

        setTimeout(function () {
            $('#prod-search').focus();
        }, 200);
    });

    // Search modal close
    $('.searchbar-close, #closeMask').on('click', function() {
        $('body, .header-search-modal').removeClass('open');
        $('#closeMask').removeClass('closeMask');
    });

});
