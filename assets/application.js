$(document).ready(function(){

    $('.cart-dropdown-btn').on('click', function() {
        $('.cart-dropdown').addClass('open');
    });

    $('.cart-close').on('click', function() {
        $('.cart-dropdown').removeClass('open');
    });

    $('form[action="/cart/add"]').on('submit', async function(e) {
        e.preventDefault();
        
        // await fetch("cart/add", {
        //     method: "post",
        //     body: new FormData(this),
        // });
        const res = await fetch("/?view=cart");
        const cart = await res.json();
        console.log(cart);
        // $('.cart-count').html(cart.item_count);
        // $('.cart-dropdown').addClass('open');
    })

});
