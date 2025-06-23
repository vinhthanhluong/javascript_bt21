AOS.init({
  startEvent: "DOMContentLoaded",
  offset: 0,
  duration: 600,
  delay: "200",
  easing: "ease-in-sine",
  once: true,
  mirror: true,
  disable: function () {
    // return $(window).width() <= 768;
    return window.innerWidth <= 768;
  },
});

const pageLoading = document.querySelector("#page-loading");
if (pageLoading) {
  setTimeout(() => {
    pageLoading.style.cssText = `
        opacity: 0;
        visibility: hidden;
    `;
  }, 0);
}

// document.querySelector('.swiper-endow .swiper-slide').eq(1).classList.add('active')

// header
document.querySelector(".hamburger-btn").onclick = function () {
  this.classList.add("--active");
  document.querySelector(".header .header-menu").classList.add("--active");
};

document.querySelector(".overplay").onclick = function () {
  this.classList.add("--active");
  document.querySelector(".header .header-menu").classList.remove("--active");
  document.querySelector(".hamburger-btn").classList.remove("--active");
};

const activeHeader = () => {
  const sections = document.querySelectorAll(".landing");
  const header = document.querySelector(".header");
  const navLinks = header.querySelectorAll("a");
  const headerHeight = header.offsetHeight - 40;

  window.addEventListener("scroll", function () {
    const curPos = window.scrollY;

    sections.forEach((section) => {
      const top = section.offsetTop - headerHeight;
      const bottom = top + section.offsetHeight;

      if (curPos >= top && curPos <= bottom) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = header.querySelector(`a[href="#${section.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    });
  });
};
activeHeader();

window.addEventListener("scroll", function () {
  const st = document.documentElement.scrollTop || document.body.scrollTop;

  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  if (st > 20) {
    header.classList.add("--fix");
    main.style.marginTop = "100px";
  } else {
    header.classList.remove("--fix");
    main.style.marginTop = "0px";
  }
});

// Scroll To Top
const scrollToTop = () => {
  const scrollBtn = document.querySelector(".scroll-top");

  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return false;
  });

  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const st = document.documentElement.scrollTop || document.body.scrollTop;

    if (st <= 10) {
      scrollBtn.classList.remove("--active");
      return;
    }

    if (st > lastScrollTop) {
      scrollBtn.classList.remove("--active");
    } else {
      scrollBtn.classList.add("--active");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
};
scrollToTop();

// Faq
document.querySelectorAll(".question .ques-tt").forEach((item) => {
  item.onclick = function (e) {
    const parent = e.currentTarget.closest(".ques-item");
    const body = parent.querySelector(".ques-content");

    if (!parent.classList.contains("active")) {
      parent.classList.add("active");
      const height = body.scrollHeight + "px";
      body.style.height = "0px";

      setTimeout(() => {
        body.style.height = height;
      }, 0);
    } else {
      body.style.height = "0px";
      body.addEventListener(
        "transitionend",
        () => {
          parent.classList.remove("active");
        },
        {
          once: true,
        }
      );
    }
  };
});

document.querySelectorAll(".swiper-custom").forEach((el) => {
  const slider = el.querySelector(".swiper");
  const pagination = el.querySelector(".swiper-pagination");
  const prevBtn = el.querySelector(".swiper-button-prev");
  const nextBtn = el.querySelector(".swiper-button-next");

  //not slide
  const touchMove = el.querySelector(".notslide");
  if (touchMove) {
    var notSlide = false;
  } else {
    var notSlide = true;
  }

  //pagi dynamic
  const pagiDynamic = el.querySelector(".dynamic");
  if (pagiDynamic) {
    var dynamic = true;
  } else {
    var dynamic = false;
  }

  try {
    new Swiper(slider, {
      speed: 1200,
      slidesPerView: "auto",
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      loop: true,

      breakpoints: {
        320: {
          allowTouchMove: true,
          autoHeight: true,
          autoplay: {
            delay: 4000,
          },
        },

        577: {
          autoHeight: true,
        },

        992: {
          allowTouchMove: notSlide,
          autoHeight: false,
        },
      },

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
});

if (document.querySelector(".swiper-endow")) {
  const swiper = document.querySelector(".swiper-endow");
  const sliderContainer = swiper.querySelector(".swiper");
  const SliderPagination = swiper.querySelector(".swiper-pagination");
  const sliderPrevBtn = swiper.querySelector(".swiper-button-prev");
  const sliderNextBtn = swiper.querySelector(".swiper-button-next");
  try {
    const swiper = new Swiper(sliderContainer, {
      speed: 1000,
      loop: false,
      spaceBetween: 12,
      slidesPerView: 4,
      direction: "vertical",
      pagination: {
        el: SliderPagination,
        clickable: true,
      },
      allowTouchMove: false,
      navigation: {
        nextEl: sliderNextBtn,
        prevEl: sliderPrevBtn,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

const countDown = () => {
  const countdowns = document.querySelectorAll(".count-down");

  if (countdowns.length) {
    countdowns.forEach(function (countdownEl) {
      let itv;

      function countDown() {
        const day = countdownEl.querySelector(".day");
        const hours = countdownEl.querySelector(".hours");
        const minutes = countdownEl.querySelector(".minutes");
        const seconds = countdownEl.querySelector(".seconds");

        const endTimeString =
          countdownEl.getAttribute("data-end-time") || "05/25/2021";
        const endTime = new Date(endTimeString);
        const now = new Date();
        const restTime = endTime - now;

        if (restTime <= 0) {
          day.textContent = "00";
          hours.textContent = "00";
          minutes.textContent = "00";
          seconds.textContent = "00";
          clearInterval(itv);
          return;
        }

        const d = Math.floor(restTime / 86400000);
        const h = Math.floor((restTime / (1000 * 60 * 60)) % 24);
        const m = Math.floor((restTime / (1000 * 60)) % 60);
        const s = Math.floor((restTime / 1000) % 60);

        day.textContent = d;
        hours.textContent = String(h).padStart(2, "0");
        minutes.textContent = String(m).padStart(2, "0");
        seconds.textContent = String(s).padStart(2, "0");
      }

      countDown();
      itv = setInterval(countDown, 1000);
    });
  }
};
countDown();

