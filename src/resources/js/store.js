export default {
    isPlaying: false,

    init() {
        document.addEventListener("keydown", (event) => {
            if (!this.isPlaying) {
                return;
            }

            if (event.key === "Escape") {
                this.close();
            }
        });
    },

    play(video) {
        this.isPlaying = true;
    },

    close() {
        this.isPlaying = false;
    },
};
