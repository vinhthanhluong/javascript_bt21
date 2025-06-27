export default function ScrollTopModule() {

    if ($('.header').length) {
      
        $(window).scroll(function () {
            const pod = $('html,body').scrollTop();
            //console.log(pod);

            if (pod > 20) {
                $('.header').addClass('--fix');
                $('.main').css("margin-top", "100px");
            } else {
                $('.header').removeClass('--fix');
                $('.main').css("margin-top", "0");
            }
         
        });
    }





}