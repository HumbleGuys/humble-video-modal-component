export default () => ({
    currentVideo: false,
    videoType: null,

    init() {
        Alpine.effect(() => {
            const video = this.$store.videoModal.currentVideo;

            if (!video) {
                this.videoType = null;
            } else if (video.includes("youtu")) {
                this.videoType = "youtube";
            }

            this.currentVideo = this.$store.videoModal.currentVideo;
        });
    },

    close() {
        this.$store.videoModal.close();
    },
});
