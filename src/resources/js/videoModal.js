export default () => ({
    currentVideo: false,

    init() {
        Alpine.effect(() => {
            this.currentVideo = this.$store.videoModal.currentVideo;
        });
    },

    close() {
        this.$store.videoModal.close();
    },
});
