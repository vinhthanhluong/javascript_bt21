export default function ScrollTopModule() {

    if ($('.scroll-top').length) {
        $(".scroll-top").click(function () {
            $('html,body').animate({
                scrollTop: 0,
            }, 1000);
            return false;
        });

        let lastScrollTop = 0;
        $(window).scroll(function () {
            const st = $('html,body').scrollTop();
            //console.log(st);

            if (st <= 10) {
                $('.scroll-top').removeClass('--active');
                return;
            }

            if (st > lastScrollTop) {
                $('.scroll-top').removeClass('--active');
            } else {
                $('.scroll-top').addClass('--active');
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
    }

    // if ($('.scroll-top-progress').length) {
    //     $(".scroll-top-progress").click(function () {
    //         $('html,body').animate({
    //             scrollTop: 0,
    //         }, 1400);
    //         return false;
    //     });

        
    //     $(window).scroll(function () {
    //         const width = $('html,body').scrollTop();
    //         //console.log(st);

    //         if (width > 20) {
    //             $('.scroll-top-progress').addClass('--active');
    //         } else {
    //             $('.scroll-top-progress').removeClass('--active');
    //         }
           
    //     });


    //     (function(){
    //         const $w = $(window);
    //         const $circ = $('.animated-circle');
    //         const wh = $w.height();
    //         const h = $('.wrapper').height();
    //         const sHeight = h - wh;
    //         $w.on('scroll', function(){
    //             var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
    //             updateProgress(perc);
    //         });
    //         console.log(wh)
    //         function updateProgress(perc){
    //             var circle_offset = 126 * perc;
    //             $circ.css({
    //                 "stroke-dashoffset" : 126 - circle_offset
    //             });
                
    //         }
    //     }());
    // }

  
      






}