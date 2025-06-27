export default function FileActiveModule() {
  

    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    $('.ques-tt').on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).next('.ques-content').slideToggle();
    });

    
    $('.swiper-endow .swiper-slide').on('click', function () {
       
        $(this).addClass("active").siblings().removeClass("active");

        console.log( $(this).eq(1).addClass('active'))
    });

    $('.swiper-endow .swiper-slide').eq(1).addClass('active');
}