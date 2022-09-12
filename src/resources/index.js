import "./css/index.css";

import videoModal from "./js/videoModal";
import youtubePlayer from "./js/youtubePlayer";
import store from "./js/store";

document.addEventListener("alpine:init", () => {
    window.Alpine.data("videoModal", videoModal);
    window.Alpine.data("youtubePlayer", youtubePlayer);

    window.Alpine.store("videoModal", store);
});
