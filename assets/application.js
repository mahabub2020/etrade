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
        $('.cart-dropdown').addClass('open');
        const sidecart = await fetch("/?view=cart");
        if (sidecart.status === 200) {
            console.log("ok");
            console.log(sidecart);
          } else {
            console.log("error");
          }
        // console.log(sidecart.json());
        // $.ajax({
        //     url: "/?view=cart",
        //     type: 'POST',
        //     success: function success(data) {
        //         console.log(data);
        //     }
        // });
    })

});
