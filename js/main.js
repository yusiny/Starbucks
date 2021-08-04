// HEADER의 검색창
// search 클래스의 요소 중 아무거나 클릭하면 input에 focus
const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

searchEl.addEventListener("click", () => {
  // input요소에 focus
  searchInputEl.focus();
});
// search 클래스의 input 요소 focus 시, placeholder 삽입
searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// HEADER의 배너 + TO TOP 아이콘
// #스크롤 시 배너 사라짐
// loadash로 화면 로딩 확인 갯수 제한 + gsap으로 애니메이션 효과

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector(".to-top");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("scroll!");
    if (window.scrollY > 500) {
      //뱃지 숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //TO-TOP 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //뱃지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //TO-TOP 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// 상단으로 이동
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0, //화면 위치 0px 지점으로
  });
});

// VISUAL의 이미지 fade-in
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// NOTICE의 notice-line 공지사항 세로 swiper
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// NOTICE의 promotion 이미지 가로 swiper
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: "swiper-pagination",
  },

  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});

// AWARDS의 가로 swiper
new Swiper(".awards .swiper-container", {
  slidesPerView: 5,
  spaceBetween: 5,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// NOTICE의 promotion 토글
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //true 숨김처리
    promotionEl.classList.add("hide");
  } else {
    //false 보임처리
    promotionEl.classList.remove("hide");
  }
});

// random() 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// YOUTUBE의 floating icons
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 0.5, 15);
floatingObject(".floating2", 1, 15);
floatingObject(".floating3", 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //내가 감시하고 있는 하나의 section
    triggerHook: 0.8, //뷰포트(0-1범위) 0.8 지점에서 감시함
  })
    .setClassToggle(spyEl, "show") //요소, 지정할 클래스 이름
    .addTo(new ScrollMagic.Controller()); //컨트롤러에 내용을 할당
});

// FOOTER this-year
const yearEl = document.querySelector(".this-year");
yearEl.textContent = new Date().getFullYear();
