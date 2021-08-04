# CSS

<br/>

# 🔥 skill

## container 내부 요소 가운데 배치

: 자식 요소를 부모 요소 기준으로 배치하고 싶을 경우 position 이용

```css
/*부모 요소*/
.parent {
  position: relative;
}

/*자식요소*/
.children {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

- 자식 요소에 absolute 적용 후 기준이 될 부모 요소에 relative 속성 부여
- 자식 요소에 너비, 높이 지정 ⇒ margin auto 이용

- top, bottom, left, right로 붙을 위치 결정
  <br/><br/>

## 비율 조정하기

- (부모) container (자식) item이 필요함
- `height: auto`는 최대한 줄어드려고 하는 속성
- `width: 100%` 부모 요소의 width를 100% 사용
- `padding-top: 50%` 는 부모 요소의 width를 바탕으로 50%만큼 top에서 떨어진다(padding)

⇒ 이걸로 **도형의 가로 길이**를 정해두고, **비율을 설정**할 수 있다!

> 유튜브의 비율 = 16:9 = 100%:56.25%

<br/>

## 버튼 hover 시 뒤집기

- `transform: rotateY()` 이용하여 요소 뒤집기
- `transition` 으로 자연스러운 애니메이션
- `perspective` 속성 부여하기
- `backface-visibility: hidden` 으로 뒤집어진 요소는 안 보이게

```css
.reserve-store .inner .medal {
  width: 334px;
  height: 334px;

  perspective: 600px;
}
.reserve-store .inner .medal .front,
.reserve-store .inner .medal .back {
  width: 334px;
  height: 334px;

  position: absolute;
  backface-visibility: hidden;
}
.reserve-store .inner .medal .front {
  transform: rotateY(0deg);
  transition: 1s;
}
.reserve-store .inner .medal:hover .front {
  transform: rotateY(180deg);
}
.reserve-store .inner .medal .back {
  position: relative;
  transform: rotateY(-180deg);
  transition: 1s;
}
.reserve-store .inner .medal:hover .back {
  transform: rotateY(0deg);
}
.reserve-store .inner .medal .back .btn {
  position: absolute;
  top: 240px;
  left: 0;
  right: 0;
  margin: auto;
}
```

<br/>

# 🌍 library

## css-reset

- 기본 css 제거
- `css-reset cdn`

[https://www.jsdelivr.com/package/npm/reset-css](https://www.jsdelivr.com/package/npm/reset-css)

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
/>
```

<br/>

## google webfonts

- 구글 웹폰트 적용
- `google webfonts cdn`

[https://fonts.google.com/](https://fonts.google.com/)

😈 서버 로딩 속도가 느리므로, 파일을 다운받아서 사용하는 것 권장

<br/>

## google material icons

- 기본적인 아이콘 제공
- `google material icons cdn`

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

```html
<div class="material-icons">face</div>
```

> 📌 material icons 종류\_
>
> - search
> - add_circle
> - upload

> 📌 material icons에 **CSS 적용**하기\_
>
> - 이미지 크기 `font-size`
> - 중앙 정렬 `display: flex` `justify-items: center` `align-items: center`

<br/><br/>

# JavaScript

<br/>

# 🔥 skill

## body 전에 main.js 불러오기

- 파일 연결 시, `defer` 속성 부여

```html
<script defer src="/js/main.js"></script>
```

<br/>

## DOM의 요소 가져오기

- `querySelector(), querySelectorAll()`
- 클래스, 아이디, 태그를 넣어 요소를 가져온다
  > 📌 _`querySelectorAll()`로 가져오는 Elements들이 반환되는 형태는?_  
  > : 일치하는 DOM의 element 리스트를 나타내는 정적 NodeList로 반환
  >
  > > - 배열과 유사 배열
  > >   <br/>

## DOM에 이벤트 발생시키기

- `addEventListener('이벤트','실행시킬 함수')`
  > 📌 _이벤트의 종류_
  >
  > - click
  > - focus
  >   <br/>

## HTML의 속성(Attribute) 추가하기

- `setAttribute('속성', '내용')`
  <br/>

## DOM에 class 추가, 삭제하기

- `classList`
- `add(), remove()`

```jsx
// class 추가하기
thisEl.classList.add("클래스2");
//class 삭제하기
thisEl.classList.remove("클래스2");
```

<br/>

## 토글 구현하기

- 로직: isHide의 boolean 값을 변경하며 클래스를 추가, 삭제 ⇒ CSS에서 구현

```jsx
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
```

```css
.notice .promotion {
  height: 693px;
  transition: height 0.4s;
}
.notice .promotion.hide {
  height: 0;
}
```

<br/>

## 날짜 자동으로 넣어주기

- javascript의 Date를 이용하여 현재 날짜-년도를 받아와서 넣어주기

```jsx
const thisYear = document.querySelctor(".this-year");
thisYear.textContent = new Date().getFullYear();
```

- `textContent`
- `new Date()`
- `getFullYear()`

<br/><br/>

# 🌍 library

## loadash

- 화면 스크롤 확인 횟수 제한
- `loadash cdn`

[https://cdnjs.com/libraries/lodash.js](https://cdnjs.com/libraries/lodash.js)

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
  integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

<br/>

## gsap

- 애니메이션 효과
- `gsap cdn`

[https://cdnjs.com/libraries/gsap](https://cdnjs.com/libraries/gsap)

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"
  integrity="sha512-UxP+UhJaGRWuMG2YC6LPWYpFQnsSgnor0VUF3BHdD83PS/pOpN+FYbZmrYN+ISX8jnvgVUciqP/fILOXDjZSwg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

- 화면 스크롤 기능 💛 [gsap.to](http://gsap.to) 옵션에 scrollTo 속성 부여하면 toTop 버튼 구현 가능

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollToPlugin.min.js"
  integrity="sha512-1OG9UO4krPizjtz/c9iDbjCqtXznBYdJeD4ccPaYfJHzC6F1qoQ3P1bgQ3J8lgCoK5qGVCqsY4+/RKjLDzITVQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

<br/>

## swiper

- 슬라이드 swipe 애니메이션 실행
- `swiper cdn`

[https://swiperjs.com/get-started](https://swiperjs.com/get-started)

```html
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```

> 📌html에 넣어야 하는 기본 구조

```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"></div>
    <div class="swiper-slide"></div>
    <div class="swiper-slide"></div>
  </div>
</div>
```

> 📌추가적으로 사용 가능한 기능

- pagination

  ```html
  <div class="swiper-pagination"></div>
  ```

- navigation

  ```html
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  ```

- scorllbar

  ```html
  <div class="swiper-scrollbar"></div>
  ```

<br/>

## Youtube Iframe Player API

- Iframe Player API를 이용해 동영상 출력 + JavaScript로 플레이어 제어
- `youtube iframe api`

[https://developers.google.com/youtube/iframe_api_reference?hl=ko](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

<br/>

## ScrollMagic

- 요소의 화면 scroll을 감시하며 클래스를 주면 CSS에서 이미지가 delay되어 나타나게 함
- `scrollmagic cdn`

[https://cdnjs.com/libraries/ScrollMagic](https://cdnjs.com/libraries/ScrollMagic)

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
  integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

- scroll spy를 심어서 화면을 스크롤함에 따라 **요소가 순서대로 나타나게 함**

<br/>
<br/>

# 핵심 기술!

### 🔥 우측 fixed badges 숨기기

```jsx
const badgeEl = document.querySelctor('header .badges');

window.addEventListener(
	'scroll',
	_.throttle(()=>{
		if(window.scrollY > 500) {
			//뱃지 숨기기
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none",
			}
		} else {
				//뱃지 보이기
				gsap.to(badgeEl, 0.6 ,{
					opacity: 1,
					display: "block",
				}
		}
	}, 300)
)
```

- `_.throttle(실행할 함수, 실행할 시간)` 함수를 일정 시간마다 실행
- `gsap.to(요소, 지속시간, 옵션)` 요소에 옵션을 지속시간동안 적용

---

### 🔥 VISUAL 이미지 순차적으로 fade-in

```jsx
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index)=>{
	gsap.to(fadeEl, 1, {
		delay: (index+1) * 0.7,
		opacity: 1,
	}
})
```

```css
.visual .fade-in {
  opacity: 0;
}
```

- `forEach(콜백함수)`

> _forEach 콜백함수의 argument가 정의되는 방식은?_  
> => callback 함수의 매개변수 형태는 **지정**되어 있음  
> **(element, index, array),thisArg** 순으로 element 제외 나머지는 optional

---

### 🔥 floating icons

```jsx
function floatingObject(selector, delay, size){
	gsap.to(
		selector,
		random(1.5, 2.5),
		{
			y: size,
			repeat: -1,
			yoyo: true,
			ease: Power1.easeInOut,
			delay: random(0, delay),
		}
	);
}

floatingObject(".floating1', 1, 15);
floatingObject(".floating2', 0.5, 15);
floatingObject(".floating3', 1.5, 20);
```

- `y: size` y축으로 size만큼 이동
- `repeat: -1` 무한반복 (-1)
- `yoyo` 재생된 애니메이션을 뒤로(자연스럽게 연결)
- `ease: Power1.easeInOut`
  > - random() 함수

```jsx
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
```

---

<br/>

### 🔥 PROMOTION 가로 swiper

```jsx
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});
```

- `slidesPerView` 한번에 보여줄 슬라이드 개수
- `spaceBetween` 슬라이드 사이 여백
- `centeredSlides: true` 1번 슬라이드가 가운데 보이기 (.swiper-slide-active)
- `loop`
- `autoplay: {delay: 5000}` (기본값) 3000_3초

---

<br/>

### 🔥 iframe player API로 영상 삽입

> youtube.js 파일

1. IFrame Player 코드 비동기적으로 로딩하기

```jsx
// src 속성이 다음 링크인 script 태그 생성하는 변수 => tag
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

// document 내 script 태그의 가장 첫번째 태그를 찾아 그 앞에 tag 삽입
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
```

1. API 코드 다운로드 후 iframe 태그 삽입하기

```jsx
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: (e) => {
        e.target.mute();
      },
    },
  });
}
```

- `Player('아이디값', {옵션})` 아이디가 일치하는 요소에 옵션을 실행
- _옵션의 종류_
  - `videoId` 실행할 영상의 id
  - `playerVars: {옵션}` \*옵션: `autoplay` `loop` `playlist` 반복재생할 영상 id
  - `events: {}` `onReady`

2. 비디오가 준비되면 위 함수 부르기

```jsx
function onPlayerReady(event) {
  event.target.playVideo();
}
```

3. 플레이어의 상태가 변화하면 이 함수 부르기

```jsx
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
```

---

<br/>

### 🔥 화면 스크롤에 따라 요소 순차적 fade in

> javascript

```jsx
//spy 요소들을 심는다
const spyEls = document.querySelectorAll("section.scroll-spy");
//forEach 함수를 이용하여 각 요소들에 다음 함수를 실행한다
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //내가 감시하고 있는 section(scroll-spy)
    triggerHook: 0.8, //뷰포트(0-1 범위) 0.8 지점에서 감시
  })
    .setClassToggle(spyEl, "show") //요소, 지정할 클래스 이름
    .addTo(new ScrollMagic.Controller()); //컨트롤러에 내용을 할당
});
```

- `new ScrollMagic`
- `Scene({*})` \*에는

  - `triggerElement` 감시하는 요소
  - `triggerHook` 감시 지점

- `setClassToggle(요소, 지정할 클래스 이름)` 요소에 클래스 이름 지정

- `addTo()` ()에게 내용을 할당

⇒ **메소드 체이닝**을 통해 감시하는 요소가 감시지점에 도달하면 .show라는 클래스를 지정해 준다!

⇒ `new ScrollMagic.Scene({}).setClassToggle(,).addTo();`

> CSS

```CSS
/*back-to-position 기본 설정*/
.back-to-position{
	opacity: 0;
	transition: 1s;
}
.back-to-position.to-left{
	transform: translateX(-150px);
}
.back-to-position.to-right{
	transform: translateX(150px);
}

/*spy로 잡힌 요소들=class가 .show인 요소들에 애니메이션 추가*/
.show .back-to-position {
  opacity: 1;
  transform: translateX(0);
}
.show .back-to-position.delay-0 {
  transition-delay: 0;
}
.show .back-to-position.delay-1 {
  transition-delay: 0.3;
}
.show .back-to-position.delay-2 {
  transition-delay: 0.6;
}
.show .back-to-position.delay-3 {
  transition-delay: 0.9;
}
```
