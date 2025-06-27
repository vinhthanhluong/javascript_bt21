// FUNCTION

// Hiệu ứng cho slide up
function slideUp(element, duration = 300) {
    element.style.transition = `height ${duration}ms ease`;
    element.style.height = element.scrollHeight + "px";
    requestAnimationFrame(() => {
        element.style.height = "0";
    });
    setTimeout(() => {
        element.style.display = "none";
        element.style.removeProperty("height");
        element.style.removeProperty("transition");
    }, duration);
}

// Hiệu ứng cho slide down
function slideDown(element, duration = 300) {
    element.style.removeProperty("display");
    let display = window.getComputedStyle(element).display;
    if (display === "none") element.style.display = "block";

    let height = element.scrollHeight;
    element.style.height = "0";
    element.style.transition = `height ${duration}ms ease`;
    requestAnimationFrame(() => {
        element.style.height = height + "px";
    });
    setTimeout(() => {
        element.style.removeProperty("height");
        element.style.removeProperty("transition");
    }, duration);
}


// Hiệu ứng slide toggle
function slideToggle(element, duration = 300) {
    const isHidden =
        getComputedStyle(element).display === "none" || element.style.height === "0px";
    if (isHidden) {
        slideDown(element, duration);
    } else {
        slideUp(element, duration);
    }
}

// END FUNCTION

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
    // MENU TOGGLE SP
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", function () {
        this.classList.toggle("--active");
            document.body.classList.toggle("open-nav");
            document.body.classList.toggle("no-scroll");
        });
    }

    // DROPDOWN MENU cho điện thoại
    const dropdownTriggers = document.querySelectorAll(".dropdown > p");
    if (document.querySelector(".header-menu")) {
        dropdownTriggers.forEach(function (trigger) {
            trigger.addEventListener("click", function () {
                if (window.innerWidth <= 750) {
                    this.classList.toggle("open");
                    const subMenu = this.nextElementSibling;
                    if (subMenu && subMenu.classList.contains("sub-menu")) {
                        slideToggle(subMenu, 300);
                    }
                }
            });
        });
    }

    // CHANGE TAB
    const tabButtons = document.querySelectorAll("[data-tab]");
    tabButtons.forEach(function (tab) {
        tab.addEventListener("click", function () {
            if (this.classList.contains("active")) return;
            // Lấy nhóm tab và chỉ mục của tab được nhấn
            const group = this.getAttribute("data-tab-group");
            const index = this.getAttribute("data-tab");
            // Xóa class active khỏi
            document.querySelectorAll(`[data-tab][data-tab-group="${group}"].active`).forEach(el => el.classList.remove("active"));
            this.classList.add("active");
            // Ẩn tất cả nội dung tab trong nhóm
            document.querySelectorAll(`[data-tab-content][data-tab-group="${group}"].active`).forEach(el => el.classList.remove("active"));
            // Tìm nội dung tương ứng với tab được chọn
            const contentToShow = document.querySelector(`[data-tab-content="${index}"][data-tab-group="${group}"]`);
            if (contentToShow) {
                contentToShow.classList.add("active");
            }
        });
    });
    // END CHANGE TAB

    // ACCORDION ancordion từng cái (mở cái này đóng cái kia)
    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            // Kiểm tra xem nút đã có class "open" chưa
            const accordionID = this.getAttribute("id");
            const accordionContent = document.querySelector(`[data-accordion-for="${accordionID}"]`);

            // Đóng các accordion khác
            accordionButtons.forEach(otherBtn => {
                if (otherBtn !== this) {
                    otherBtn.classList.remove("open");
                    const otherID = otherBtn.getAttribute("id");
                    const otherContent = document.querySelector(`[data-accordion-for="${otherID}"]`);
                    if (otherContent) slideUp(otherContent);
                }
            });

            // Mở hoặc đóng accordion hiện tại
            this.classList.toggle("open");
            if (accordionContent) {
                slideToggle(accordionContent);
            }
        });
    });
    // END ACCORDION

    // BUTTON SEARCH
    const icon = document.querySelector("#search__btn .icon");
    const search = document.querySelector("#search__btn");
    icon.onclick = function() {
        search.classList.toggle("active");
    }
    // END BUTTON SEARCH


    // BUTTON TOGGLE SIDEBAR
    const menuToggle = document.querySelector('.menu__toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar__close');
    menuToggle.onclick = function (e) {
        e.stopPropagation();
        document.body.classList.toggle('sidebar_active');
        sidebar.classList.toggle('active');
    };
    closeBtn.onclick = function () {
        document.body.classList.remove('sidebar_active');
        sidebar.classList.remove('active');
    };
    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            document.body.classList.remove('sidebar_active');
            sidebar.classList.remove('active');
        }
    });
    // END BUTTON TOGGLE SIDEBAR



    // PAGINATION RECENT ORDERS
    const rowsPerPage = 4;
    const rows = document.querySelectorAll(".recentOrders__list tbody tr");
    const pagination = document.getElementById("pagination");

    let currentPage = 1;
    const pageCount = Math.ceil(rows.length / rowsPerPage);

    function showPage(page) {
        currentPage = page;
        rows.forEach((row, index) => {
            row.style.display = (index >= (page - 1) * rowsPerPage && index < page * rowsPerPage)
                ? ""
                : "none";
        });
        updatePagination();
    }

    // function updatePagination() {
    //     pagination.innerHTML = "";
    //     for (let i = 1; i <= pageCount; i++) {
    //         const btn = document.createElement("button");
    //         btn.textContent = i;
    //         btn.onclick = () => showPage(i);
    //         pagination.appendChild(btn);
    //     }
    // }
    // Hiển thị trang đầu tiên
    // showPage(1);
    // END PAGINATION RECENT ORDERS

    // Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
});