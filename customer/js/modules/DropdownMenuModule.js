export default function DropdownMenuModu() {
    // if ($('.dropdown .fa').length) {

    //     $('.dropdown .fa').click(function () {
           
    //        $(this).toggleClass('--show');
    //        
    //     });
        
    // }

    document.querySelectorAll('.header-list .dropdown').forEach(el => {
        const dropdown = el;
        const arrows = document.createElement("i");
        arrows.classList.add('fa', 'fa-angle-down');
        dropdown.querySelector('a').appendChild(arrows);
        arrows.onclick = function (a) {
            a.preventDefault();
            $(this).parent().next('.sub-menu').stop().slideToggle();
            $(this).stop().toggleClass('--show');
            $(this).closest('.dropdown').siblings().find('.sub-menu').stop().slideUp();
            $(this).closest('.dropdown').siblings().find('i').stop().removeClass('--show');
        }
    });

}