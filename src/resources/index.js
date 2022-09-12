import "./css/index.css";

import videoModal from "./js/videoModal";

document.addEventListener("alpine:init", () => {
    window.Alpine.data("videoModal", videoModal);
});
