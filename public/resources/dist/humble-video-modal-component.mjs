const d = () => ({
  currentVideo: !1,
  videoType: null,
  init() {
    Alpine.effect(() => {
      const e = this.$store.videoModal.currentVideo;
      e ? e.includes("youtu") && (this.videoType = "youtube") : this.videoType = null, this.currentVideo = this.$store.videoModal.currentVideo;
    });
  },
  close() {
    this.$store.videoModal.close();
  }
}), n = (e) => ({
  player: null,
  videoId: null,
  init() {
    this.videoId = this.getVideoId(e), window.onYouTubeIframeAPIReady ? this.initPlayer() : this.createPlayer();
  },
  createPlayer() {
    const t = document.createElement("script");
    t.src = "https://www.youtube.com/iframe_api";
    const i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(t, i), window.onYouTubeIframeAPIReady = () => {
      this.initPlayer();
    };
  },
  initPlayer() {
    if (window.YT === void 0 || !window.YT) {
      window.onYouTubeIframeAPIReady = null, this.createPlayer();
      return;
    }
    this.player = new window.YT.Player("videoModalYoutube", {
      height: 1080,
      width: 1920,
      videoId: this.videoId,
      playerVars: {
        playsinline: 1
      },
      events: {
        onReady: this.onPlayerReady
      }
    });
  },
  getVideoId(t) {
    const i = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, o = t.match(i);
    return o && o[7].length == 11 ? o[7] : !1;
  },
  onPlayerReady(t) {
    t.target.playVideo();
  },
  stopVideo() {
    this.player.stopVideo();
  }
}), r = {
  currentVideo: !1,
  init() {
    document.addEventListener("keydown", (e) => {
      !this.currentVideo || e.key === "Escape" && this.close();
    });
  },
  play(e) {
    this.currentVideo = e;
  },
  close() {
    this.currentVideo = !1;
  }
};
document.addEventListener("alpine:init", () => {
  window.Alpine.data("videoModal", d), window.Alpine.data("youtubePlayer", n), window.Alpine.store("videoModal", r);
});
