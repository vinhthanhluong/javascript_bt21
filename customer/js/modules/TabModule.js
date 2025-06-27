export default function TabModule() {
    if ($('.tab').length) {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$('.tab-title');
        const panes = $$('.tab-content-box');

        if (tabs) {
            const tabActive = $('.tab-title.active');
            const line = $('.tab-link .tab-line');

            if (line) {
                line.style.left = tabActive.offsetLeft + 'px';
                line.style.width = tabActive.offsetWidth + 'px';
            }

            tabs.forEach((tab, index) => {
                const pane = panes[index];
                tab.onclick = function () {
                    $('.tab-title.active').classList.remove('active');
                    $('.tab-content-box.active').classList.remove('active');

                    line.style.left = this.offsetLeft + 'px';
                    line.style.width = this.offsetWidth + "px";

                    this.classList.add('active');
                    pane.classList.add('active');
                }
            })
        }
    }

    //class
    if ($('.c-tab')) {
        $(".c-tab__nav ul li").click(function () {
            var tab_id = $(this).attr("data-tab");

            $(".c-tab__nav ul li").removeClass("active");
            $(".c-tab__content").removeClass("active");

            $(this).addClass("active");
            $("." + tab_id).addClass("active");
        });
        // $(".c-tab__tutorial ul li").click(function () {
        //     var tab_id = $(this).attr("data-tab");

        //     $(".c-tab__tutorial ul li").removeClass("active");
        //     $(".c-tab__item").removeClass("active");

        //     $(this).addClass("active");
        //     $("." + tab_id).addClass("active");
        // });
    }


    //id 
    if ($('.tab-p')) {
        $(".tab-wrapper").each(function () {
            let tab = $(this);
            tab.find(".tab-link").first().addClass("current");
            let tabID = tab.find(".tab-link.current").attr("data-tab");
            tab.find(tabID).fadeIn().siblings().hide();
            $(tab).on("click", ".tab-link", function (e) {
                e.preventDefault();
                let tabID = $(this).attr("data-tab");
                $(this).addClass("current").siblings().removeClass("current");
                tab.find(tabID).fadeIn().siblings().hide();
            });
        });
    }

}