export default function QtyCartModule() {
   
        var incrementQty;
        var decrementQty;
        var plusBtn = $('.cart-qty-plus');
        var minusBtn = $('.cart-qty-minus');
        var incrementQty = plusBtn.click(function () {
            var $n = $(this).parent(".cart-qty").find(".qty");
            $n.val(Number($n.val()) + 1); 
        });

        var decrementQty = minusBtn.click(function () {
            var $n = $(this).parent('.cart-qty').find(".qty");
            // $n.val(Number($n.val()) - 1);
            var QtyVal = Number($n.val());
            if (QtyVal > 0) {
                $n.val(QtyVal - 1);
            }
        })
   

}