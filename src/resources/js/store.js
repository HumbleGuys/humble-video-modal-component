export default {
    currentVideo: false,

    init() {
        document.addEventListener("keydown", (event) => {
            if (!this.currentVideo) {
                return;
            }

            if (event.key === "Escape") {
                this.close();
            }
        });
    },

    play(video) {
        this.currentVideo = video;
    },

    close() {
        this.currentVideo = false;
    },
};
