$(document).ready(function(){

    $('.cart-dropdown-btn').on('click', function() {
        $('.cart-dropdown').addClass('open');
    });

    $('.cart-close').on('click', function() {
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
        const cartDrawerHTML = await cartDrawer.html();
        console.log(cartDrawerHTML);
        $('.cart-dropdown').addClass('open');
    })

});
