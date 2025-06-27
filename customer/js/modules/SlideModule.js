export default function SlideModule() {
    document.querySelectorAll('.swiper-custom').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');

        //not slide
        const touchMove = el.querySelector('.notslide');
        if (touchMove) {
            var notSlide = false;
        } else {
            var notSlide = true;
        }

        //pagi dynamic
        const pagiDynamic = el.querySelector('.dynamic');
        if (pagiDynamic) {
            var dynamic = true;
        } else {
            var dynamic = false;
        }

        //loop
        const slideLoop = el.querySelector('.not-loop');
        if (slideLoop) {
            var loops = false;
        } else {
            var loops = true;
        }

        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
               
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                loop: loops,

                breakpoints: {
                    320: {
                        // spaceBetween: 50
                        allowTouchMove: true,
                        // autoHeight: true,
                        autoHeight: true,
                    },

                    577:{
                        autoHeight: false,
                    },


                  
                    1200: {
                       
                        allowTouchMove: notSlide,
                        autoHeight: false,
                    },
                },

                // autoplay: {
                //     delay: 4000,
                // },

                pagination: {
                    el: pagination,
                    clickable: true,
                    dynamicBullets: dynamic,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
            });
        } catch (err) {
            console.log(err);
        }
    })


    if (document.querySelector('.swiper-endow')) {
        const swiper = document.querySelector('.swiper-endow');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: false,
                spaceBetween: 12,
                slidesPerView: 4,
                // autoplay: {
                //     delay: 4000,
                // },
                direction: 'vertical',
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },
                allowTouchMove: false,
                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })

            // swiper.slideTo(1);
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-ben')) {
        const swiper = document.querySelector('.swiper-ben');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                // spaceBetween: 12,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // direction: 'vertical',
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                    // dynamicBullets: true,
                },
                // allowTouchMove: false,
                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })

            // swiper.slideTo(1);
        }
        catch (err) {
            console.log(err)
        }
    }
}