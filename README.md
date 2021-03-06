๐ netlify ์ด์ฉ &nbsp;
<a href="https://focused-bhaskara-53d63a.netlify.app/"><img src="https://img.shields.io/badge/netlify-00C7B7?style=flat-round&logo=Netlify&logoColor=white&link=https://focused-bhaskara-53d63a.netlify.app/"/></a>
<br/><br/>

# CSS

## ๐ฅ skill

## container ๋ด๋ถ ์์ ๊ฐ์ด๋ฐ ๋ฐฐ์น

: ์์ ์์๋ฅผ ๋ถ๋ชจ ์์ ๊ธฐ์ค์ผ๋ก ๋ฐฐ์นํ๊ณ  ์ถ์ ๊ฒฝ์ฐ position ์ด์ฉ

```css
/*๋ถ๋ชจ ์์*/
.parent {
  position: relative;
}

/*์์์์*/
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

- ์์ ์์์ absolute ์ ์ฉ ํ ๊ธฐ์ค์ด ๋  ๋ถ๋ชจ ์์์ relative ์์ฑ ๋ถ์ฌ
- ์์ ์์์ ๋๋น, ๋์ด ์ง์  โ margin auto ์ด์ฉ

- top, bottom, left, right๋ก ๋ถ์ ์์น ๊ฒฐ์ 
  <br/><br/>

## ๋น์จ ์กฐ์ ํ๊ธฐ

- (๋ถ๋ชจ) container (์์) item์ด ํ์ํจ
- `height: auto`๋ ์ต๋ํ ์ค์ด๋๋ ค๊ณ  ํ๋ ์์ฑ
- `width: 100%` ๋ถ๋ชจ ์์์ width๋ฅผ 100% ์ฌ์ฉ
- `padding-top: 50%` ๋ ๋ถ๋ชจ ์์์ width๋ฅผ ๋ฐํ์ผ๋ก 50%๋งํผ top์์ ๋จ์ด์ง๋ค(padding)

โ ์ด๊ฑธ๋ก **๋ํ์ ๊ฐ๋ก ๊ธธ์ด**๋ฅผ ์ ํด๋๊ณ , **๋น์จ์ ์ค์ **ํ  ์ ์๋ค!

> ์ ํ๋ธ์ ๋น์จ = 16:9 = 100%:56.25%

<br/>

## ๋ฒํผ hover ์ ๋ค์ง๊ธฐ

- `transform: rotateY()` ์ด์ฉํ์ฌ ์์ ๋ค์ง๊ธฐ
- `transition` ์ผ๋ก ์์ฐ์ค๋ฌ์ด ์ ๋๋ฉ์ด์
- `perspective` ์์ฑ ๋ถ์ฌํ๊ธฐ
- `backface-visibility: hidden` ์ผ๋ก ๋ค์ง์ด์ง ์์๋ ์ ๋ณด์ด๊ฒ

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

## ๐ library

## css-reset

- ๊ธฐ๋ณธ css ์ ๊ฑฐ
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

- ๊ตฌ๊ธ ์นํฐํธ ์ ์ฉ
- `google webfonts cdn`

[https://fonts.google.com/](https://fonts.google.com/)

๐ ์๋ฒ ๋ก๋ฉ ์๋๊ฐ ๋๋ฆฌ๋ฏ๋ก, ํ์ผ์ ๋ค์ด๋ฐ์์ ์ฌ์ฉํ๋ ๊ฒ ๊ถ์ฅ

<br/>

## google material icons

- ๊ธฐ๋ณธ์ ์ธ ์์ด์ฝ ์ ๊ณต
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

> ๐ material icons ์ข๋ฅ\_
>
> - search
> - add_circle
> - upload

> ๐ material icons์ **CSS ์ ์ฉ**ํ๊ธฐ\_
>
> - ์ด๋ฏธ์ง ํฌ๊ธฐ `font-size`
> - ์ค์ ์ ๋ ฌ `display: flex` `justify-items: center` `align-items: center`

<br/><br/>

# JavaScript

<br/>

## ๐ฅ skill

## body ์ ์ main.js ๋ถ๋ฌ์ค๊ธฐ

- ํ์ผ ์ฐ๊ฒฐ ์, `defer` ์์ฑ ๋ถ์ฌ

```html
<script defer src="/js/main.js"></script>
```

<br/>

## DOM์ ์์ ๊ฐ์ ธ์ค๊ธฐ

- `querySelector(), querySelectorAll()`
- ํด๋์ค, ์์ด๋, ํ๊ทธ๋ฅผ ๋ฃ์ด ์์๋ฅผ ๊ฐ์ ธ์จ๋ค
  > ๐ _`querySelectorAll()`๋ก ๊ฐ์ ธ์ค๋ Elements๋ค์ด ๋ฐํ๋๋ ํํ๋?_  
  > : ์ผ์นํ๋ DOM์ element ๋ฆฌ์คํธ๋ฅผ ๋ํ๋ด๋ ์ ์  NodeList๋ก ๋ฐํ
  >
  > > - ๋ฐฐ์ด๊ณผ ์ ์ฌ ๋ฐฐ์ด
  > >   <br/>

## DOM์ ์ด๋ฒคํธ ๋ฐ์์ํค๊ธฐ

- `addEventListener('์ด๋ฒคํธ','์คํ์ํฌ ํจ์')`
  > ๐ _์ด๋ฒคํธ์ ์ข๋ฅ_
  >
  > - click
  > - focus
  >   <br/>

## HTML์ ์์ฑ(Attribute) ์ถ๊ฐํ๊ธฐ

- `setAttribute('์์ฑ', '๋ด์ฉ')`
  <br/>

## DOM์ class ์ถ๊ฐ, ์ญ์ ํ๊ธฐ

- `classList`
- `add(), remove()`

```jsx
// class ์ถ๊ฐํ๊ธฐ
thisEl.classList.add("ํด๋์ค2");
//class ์ญ์ ํ๊ธฐ
thisEl.classList.remove("ํด๋์ค2");
```

<br/>

## ํ ๊ธ ๊ตฌํํ๊ธฐ

- ๋ก์ง: isHide์ boolean ๊ฐ์ ๋ณ๊ฒฝํ๋ฉฐ ํด๋์ค๋ฅผ ์ถ๊ฐ, ์ญ์  โ CSS์์ ๊ตฌํ

```jsx
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //true ์จ๊น์ฒ๋ฆฌ
    promotionEl.classList.add("hide");
  } else {
    //false ๋ณด์์ฒ๋ฆฌ
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

## ๋ ์ง ์๋์ผ๋ก ๋ฃ์ด์ฃผ๊ธฐ

- javascript์ Date๋ฅผ ์ด์ฉํ์ฌ ํ์ฌ ๋ ์ง-๋๋๋ฅผ ๋ฐ์์์ ๋ฃ์ด์ฃผ๊ธฐ

```jsx
const thisYear = document.querySelctor(".this-year");
thisYear.textContent = new Date().getFullYear();
```

- `textContent`
- `new Date()`
- `getFullYear()`

<br/><br/>

## ๐ library

## loadash

- ํ๋ฉด ์คํฌ๋กค ํ์ธ ํ์ ์ ํ
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

- ์ ๋๋ฉ์ด์ ํจ๊ณผ
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

- ํ๋ฉด ์คํฌ๋กค ๊ธฐ๋ฅ ๐ [gsap.to](http://gsap.to) ์ต์์ scrollTo ์์ฑ ๋ถ์ฌํ๋ฉด toTop ๋ฒํผ ๊ตฌํ ๊ฐ๋ฅ

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

- ์ฌ๋ผ์ด๋ swipe ์ ๋๋ฉ์ด์ ์คํ
- `swiper cdn`

[https://swiperjs.com/get-started](https://swiperjs.com/get-started)

```html
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```

> ๐html์ ๋ฃ์ด์ผ ํ๋ ๊ธฐ๋ณธ ๊ตฌ์กฐ

```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"></div>
    <div class="swiper-slide"></div>
    <div class="swiper-slide"></div>
  </div>
</div>
```

> ๐์ถ๊ฐ์ ์ผ๋ก ์ฌ์ฉ ๊ฐ๋ฅํ ๊ธฐ๋ฅ

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

- Iframe Player API๋ฅผ ์ด์ฉํด ๋์์ ์ถ๋ ฅ + JavaScript๋ก ํ๋ ์ด์ด ์ ์ด
- `youtube iframe api`

[https://developers.google.com/youtube/iframe_api_reference?hl=ko](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

<br/>

## ScrollMagic

- ์์์ ํ๋ฉด scroll์ ๊ฐ์ํ๋ฉฐ ํด๋์ค๋ฅผ ์ฃผ๋ฉด CSS์์ ์ด๋ฏธ์ง๊ฐ delay๋์ด ๋ํ๋๊ฒ ํจ
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

- scroll spy๋ฅผ ์ฌ์ด์ ํ๋ฉด์ ์คํฌ๋กคํจ์ ๋ฐ๋ผ **์์๊ฐ ์์๋๋ก ๋ํ๋๊ฒ ํจ**

<br/>
<br/>

# ํต์ฌ ๊ธฐ์ !

### ๐ฅ ์ฐ์ธก fixed badges ์จ๊ธฐ๊ธฐ

```jsx
const badgeEl = document.querySelctor('header .badges');

window.addEventListener(
	'scroll',
	_.throttle(()=>{
		if(window.scrollY > 500) {
			//๋ฑ์ง ์จ๊ธฐ๊ธฐ
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none",
			}
		} else {
				//๋ฑ์ง ๋ณด์ด๊ธฐ
				gsap.to(badgeEl, 0.6 ,{
					opacity: 1,
					display: "block",
				}
		}
	}, 300)
)
```

- `_.throttle(์คํํ  ํจ์, ์คํํ  ์๊ฐ)` ํจ์๋ฅผ ์ผ์  ์๊ฐ๋ง๋ค ์คํ
- `gsap.to(์์, ์ง์์๊ฐ, ์ต์)` ์์์ ์ต์์ ์ง์์๊ฐ๋์ ์ ์ฉ

---

### ๐ฅ VISUAL ์ด๋ฏธ์ง ์์ฐจ์ ์ผ๋ก fade-in

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

- `forEach(์ฝ๋ฐฑํจ์)`

> _forEach ์ฝ๋ฐฑํจ์์ argument๊ฐ ์ ์๋๋ ๋ฐฉ์์?_  
> => callback ํจ์์ ๋งค๊ฐ๋ณ์ ํํ๋ **์ง์ **๋์ด ์์  
> **(element, index, array),thisArg** ์์ผ๋ก element ์ ์ธ ๋๋จธ์ง๋ optional

---

### ๐ฅ floating icons

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

- `y: size` y์ถ์ผ๋ก size๋งํผ ์ด๋
- `repeat: -1` ๋ฌดํ๋ฐ๋ณต (-1)
- `yoyo` ์ฌ์๋ ์ ๋๋ฉ์ด์์ ๋ค๋ก(์์ฐ์ค๋ฝ๊ฒ ์ฐ๊ฒฐ)
- `ease: Power1.easeInOut`
  > - random() ํจ์

```jsx
// ๋ฒ์ ๋๋ค ํจ์(์์์  2์๋ฆฌ๊น์ง)
function random(min, max) {
  // `.toFixed()`๋ฅผ ํตํด ๋ฐํ๋ ๋ฌธ์ ๋ฐ์ดํฐ๋ฅผ,
  // `parseFloat()`์ ํตํด ์์์ ์ ๊ฐ์ง๋ ์ซ์ ๋ฐ์ดํฐ๋ก ๋ณํ
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
```

---

<br/>

### ๐ฅ PROMOTION ๊ฐ๋ก swiper

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

- `slidesPerView` ํ๋ฒ์ ๋ณด์ฌ์ค ์ฌ๋ผ์ด๋ ๊ฐ์
- `spaceBetween` ์ฌ๋ผ์ด๋ ์ฌ์ด ์ฌ๋ฐฑ
- `centeredSlides: true` 1๋ฒ ์ฌ๋ผ์ด๋๊ฐ ๊ฐ์ด๋ฐ ๋ณด์ด๊ธฐ (.swiper-slide-active)
- `loop`
- `autoplay: {delay: 5000}` (๊ธฐ๋ณธ๊ฐ) 3000_3์ด

---

<br/>

### ๐ฅ iframe player API๋ก ์์ ์ฝ์

> youtube.js ํ์ผ

1. IFrame Player ์ฝ๋ ๋น๋๊ธฐ์ ์ผ๋ก ๋ก๋ฉํ๊ธฐ

```jsx
// src ์์ฑ์ด ๋ค์ ๋งํฌ์ธ script ํ๊ทธ ์์ฑํ๋ ๋ณ์ => tag
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

// document ๋ด script ํ๊ทธ์ ๊ฐ์ฅ ์ฒซ๋ฒ์งธ ํ๊ทธ๋ฅผ ์ฐพ์ ๊ทธ ์์ tag ์ฝ์
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
```

1. API ์ฝ๋ ๋ค์ด๋ก๋ ํ iframe ํ๊ทธ ์ฝ์ํ๊ธฐ

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

- `Player('์์ด๋๊ฐ', {์ต์})` ์์ด๋๊ฐ ์ผ์นํ๋ ์์์ ์ต์์ ์คํ
- _์ต์์ ์ข๋ฅ_
  - `videoId` ์คํํ  ์์์ id
  - `playerVars: {์ต์}` \*์ต์: `autoplay` `loop` `playlist` ๋ฐ๋ณต์ฌ์ํ  ์์ id
  - `events: {}` `onReady`

2. ๋น๋์ค๊ฐย ์ค๋น๋๋ฉดย ์ย ํจ์ย ๋ถ๋ฅด๊ธฐ

```jsx
function onPlayerReady(event) {
  event.target.playVideo();
}
```

3. ํ๋ ์ด์ด์ ์ํ๊ฐ ๋ณํํ๋ฉด ์ด ํจ์ ๋ถ๋ฅด๊ธฐ

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

### ๐ฅ ํ๋ฉด ์คํฌ๋กค์ ๋ฐ๋ผ ์์ ์์ฐจ์  fade in

> javascript

```jsx
//spy ์์๋ค์ ์ฌ๋๋ค
const spyEls = document.querySelectorAll("section.scroll-spy");
//forEach ํจ์๋ฅผ ์ด์ฉํ์ฌ ๊ฐ ์์๋ค์ ๋ค์ ํจ์๋ฅผ ์คํํ๋ค
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //๋ด๊ฐ ๊ฐ์ํ๊ณ  ์๋ section(scroll-spy)
    triggerHook: 0.8, //๋ทฐํฌํธ(0-1 ๋ฒ์) 0.8 ์ง์ ์์ ๊ฐ์
  })
    .setClassToggle(spyEl, "show") //์์, ์ง์ ํ  ํด๋์ค ์ด๋ฆ
    .addTo(new ScrollMagic.Controller()); //์ปจํธ๋กค๋ฌ์ ๋ด์ฉ์ ํ ๋น
});
```

- `new ScrollMagic`
- `Scene({*})` \*์๋

  - `triggerElement` ๊ฐ์ํ๋ ์์
  - `triggerHook` ๊ฐ์ ์ง์ 

- `setClassToggle(์์, ์ง์ ํ  ํด๋์ค ์ด๋ฆ)` ์์์ ํด๋์ค ์ด๋ฆ ์ง์ 

- `addTo()` ()์๊ฒ ๋ด์ฉ์ ํ ๋น

โ **๋ฉ์๋ ์ฒด์ด๋**์ ํตํด ๊ฐ์ํ๋ ์์๊ฐ ๊ฐ์์ง์ ์ ๋๋ฌํ๋ฉด .show๋ผ๋ ํด๋์ค๋ฅผ ์ง์ ํด ์ค๋ค!

โ `new ScrollMagic.Scene({}).setClassToggle(,).addTo();`

> CSS

```CSS
/*back-to-position ๊ธฐ๋ณธ ์ค์ */
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

/*spy๋ก ์กํ ์์๋ค=class๊ฐ .show์ธ ์์๋ค์ ์ ๋๋ฉ์ด์ ์ถ๊ฐ*/
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
