export default function SearchModule() {

    //không cho scroll
    function preventDefault(e) {
        e.preventDefault();
    }

    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch (e) { }

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    //


    $('.header-search .header-search-icon').click(function () {
        $('.search-mobile').addClass('--active');
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile

    });

    $('.search-mobile-close').click(function () {
        $('.search-mobile').removeClass('--active');
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
    });

    
    if ($('.search-desktop')) {

        const $search = $('.search-desktop');

        $(document).mouseup(function (e) { 
            if (!$search.is(e.target) // nếu click vàp mục tiêu k phải là vùng chứa
                && $search.has(e.target).length === 0)// và cũng k phải là con của vùng chứa
                { 
                $search.removeClass('active');
            }
        });

        $('.search-title').on('click', function () {
            $search.toggleClass('active');
        });
    }




}