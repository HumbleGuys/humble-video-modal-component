const i = () => ({
  isOpen: !1,
  init() {
    console.log("init");
  }
});
document.addEventListener("alpine:init", () => {
  window.Alpine.data("videoModal", i);
});
