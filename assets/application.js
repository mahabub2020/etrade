$(document).ready(function(){

    $('.cart-dropdown-btn').on('click', function() {
        $('.cart-dropdown').addClass('open');
    });

    $('.cart-close').on('click', function() {
        console.log('clicked');
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

        if($(this).find('.wishlist-icon').hasClass('far')) {
            $(this).find('.wishlist-icon').removeClass('far');
            $(this).find('.wishlist-icon').addClass('fas');
        }
    });
    
    $('.remove_from_wishlist').on('click', function(e) {
        e.preventDefault();
        productHandle = $(this).attr('data-product-handle');
        updateWishlist(productHandle, this);
    });

    var updateWishlist = function (handle, element) {
        var wishlist = getWishlist();
        var indexInWishlist = wishlist.indexOf(handle);
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
    var renderWishlist = function() {
        var wishlist = getWishlist();
        console.log(wishlist);
        for(var i = 0; i < wishlist.length; i++) {
            console.log('wishlist: ' + wishlist[i]);
        }
    }

    renderWishlist();

    // QuickView
    $('.quickview').on('click', async function(e) {
        e.preventDefault();
        var pId = $(this).data('product_id');
        // console.log(pId);
        const quickViewProducts = await fetch("/?section_id=quick-view-products");
        const quickViewProductsText = await quickViewProducts.text();
        const quickViewProductsHtml = $('<div>' + quickViewProductsText + '</div>')
        var output = $(quickViewProductsHtml).find('#ProductInfo-'+pId).html();
        $('#yith-quick-view-content .product').html(output);
        $('#yith-quick-view-modal').modal('show');
    });

    // Cart item quantity change
    $('.quantity-plus').on('click', function() {
        $(this).parent().find('.input-text.qty').trigger('stepUp').trigger('change');
    });

    $('.quantity-minus').on('click', function() {
        $(this).parent().find('.input-text.qty').trigger('stepDown').trigger('change');
    });

    // Search modal open
    $('.axil-search').on('click', function() {
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

    // Product search ajax
    var recent_product = $('.recent-product');
    $(document).on('input', '#prod-search', async function () {
        if (this.value.length <= 0) {
            $('.search-results-body').html(recent_product);
        } else if(this.value.length >= 3) {
            var keyword = $('#prod-search').val();

            const searchResult = await fetch("/?section_id=ajax-search-result");
            const searchResultHTML = await searchResult.text();
            $('.search-results-body').html(searchResultHTML);
            var url = window.location.href;
            if(url.indexOf('?') == -1) {
                var newURL = url+"?keyword="+keyword;
            }else {
                if(url.indexOf('keyword') != -1) {
                    var newURL = url.replace(/(keyword=)[^\&]+/, '$1' + keyword);
                }else {
                    var newURL = url+"&keyword="+keyword;
                }
            }
            history.pushState({}, null, newURL);
        }
    });

});
