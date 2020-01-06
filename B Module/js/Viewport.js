class Viewport {
    constructor(app) {
        this.app = app;
        this.width = 760;
        this.height = 430;
        this.clipList = [];
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.video = document.querySelector("video");
        // this.videoTime = document.querySelector("#")
        requestAnimationFrame(() => {
            this.render();
        });
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.clipList.forEach(x => {
            x.redraw();
        })

        requestAnimationFrame(() => {
            this.render();
        })
    }

    play() {
        if(!this.video.paused) {
            this.video.play();
        }
    }

    stop() { 
        this.video.pause();
    }

   
}