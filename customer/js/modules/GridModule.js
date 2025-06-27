export default function GridModule(){
    if ($('.view-item').length) {
      
        $('body').on('click', '.view-item', function () {

            $('.view-item').not($(this)).removeClass('active');
            $(this).addClass('active');
            var data = $(".view-item.active").data('grid');
            //console.log(data);
            switch (data) {
                case 2:
                    $(".product-list > .columns").removeClass("columns-2 columns-3 columns-4 columns-6");
                    $(".product-list > .columns").addClass("columns-2");
                    console.log(2222);
                    break;
                case 3:
                    $(".product-list > .columns").removeClass("columns-2 columns-3 columns-4 columns-6");
                    $(".product-list > .columns").addClass("columns-3");
                    console.log(3333);
                    break;
    
                case 4:
                    $(".product-list > .columns").removeClass("columns-2 columns-3 columns-4 columns-6");
                    $(".product-list > .columns").addClass("columns-4");
                    console.log(444);
                    break;
                case 6:
                    $(".product-list > .columns").removeClass("columns-2 columns-3 columns-4 columns-6");
                    $(".product-list > .columns").addClass("columns-6");
                    console.log(666);
                    break;
    
            }

        //    console.log(123);
    
        });
    }

}