import Vimeo from "@vimeo/player";

export default (url) => ({
    player: null,

    init() {
        this.player = new Vimeo("videoModalVimeo", {
            url: url,
            width: 1920,
            loop: false,
            autoplay: true,
        });
    },
});
