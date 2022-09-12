import "./css/index.css";

import videoModal from "./js/videoModal";
import store from "./js/store";

document.addEventListener("alpine:init", () => {
    window.Alpine.data("videoModal", videoModal);

    window.Alpine.store("videoModal", store);
});
