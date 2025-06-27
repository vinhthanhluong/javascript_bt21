export default function CartBagModule() {
    // popup-big
    // $('.header-cart').on('click', function () {
    //     $('.cart-popup').css('right', 0);
    //     $('body').addClass('modal-open');
    // });

    // $('.cart-popup .btn-close , .bg-cart').on('click', function () {
    //     $('.cart-popup').css('right', "-100%");
    //     $('body').removeClass('modal-open');
    // });

    //popup-small
    if ($('.header-cart')) {

        const $cart = $('.header-cart');
        $(document).mouseup(function (e) { 
            // nếu click vàp mục tiêu k phải là vùng chứa và cũng k phải là con của vùng chứa
            if (!$cart.is(e.target) &&  $cart.has(e.target).length === 0) {
                $cart.removeClass('active');
            }
        });

        $('.cart-btn').on('click', function () {
           $cart.toggleClass('active');
        });
    }

}