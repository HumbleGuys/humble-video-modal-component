export default () => ({
    isOpen: false,

    init() {
        Alpine.effect(() => {
            this.isOpen = this.$store.videoModal.isPlaying;
        });
    },

    close() {
        this.$store.videoModal.close();
    },
});
