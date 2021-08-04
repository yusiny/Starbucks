// 1. IFrame Player 코드 비동기적으로 로딩하기

// src 속성이 다음 링크인 script 태그 생성하는 변수 => tag
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

// document 내 script 태그의 가장 첫번째 태그를 찾아 그 앞에 tag 삽입
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. API 코드 다운로드 후 iframe 태그 삽입하기
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

// 3. 비디오가 준비되면 위 함수 부르기
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. 플레이어의 상태가 변화하면 이 함수 부르기
//  The function indicates that when playing a video (state=1),
//  the player should play for six seconds and then stop.4.
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
