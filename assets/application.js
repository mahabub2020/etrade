$(document).ready(function(){

    $('.cart-dropdown-btn').on('click', function() {
        $('.cart-dropdown').addClass('open');
    });

    $('.cart-close').on('click', function() {
        $('.cart-dropdown').removeClass('open');
    });

    $('form[action="/cart/add"]').on('submit', async function(e) {
        e.preventDefault();
        
        fetch("cart/add", {
            method: "post",
            body: new FormData(this),
        });
        const res = fetch("/cart.json");
        const cart = res.json();
        $('.cart-count').html(cart.item_count);
    })

});
