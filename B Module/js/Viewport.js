class Viewport {
    constructor(app) {
        // this.newCanvas = document.createElement("canvas");
        this.app = app;
        this.width = 760;
        this.height = 430;
        this.clipList = [];
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.video = document.querySelector("video");
        this.cTime = document.querySelector(".n_time");
        this.dTime = document.querySelector(".n_time2");
        this.addEvent();

        requestAnimationFrame(() => {
            this.render();
        });
    }

    addEvent() {
        // DOM :: document object model
        document.querySelectorAll(".img img").forEach((img, i) => {
            img.addEventListener("click", (e) => {
                // img.dataset.video
                // `movie${i}.mp4`
                this.video.src = "./videos/" + e.target.dataset.video;
                // this.playVideo();
            });
        });

        
    }

    render() {
        // this.ctx.clearRect(0, 0, this.width, this.height);
        // this.toolList.forEach(x => {
        //     x.redraw();
        // });

        requestAnimationFrame(() => {
            this.render();
        });

        this.cTime.innerHTML = this.video.currentTime.parseTime();
        this.dTime.innerHTML = this.video.duration.parseTime();
        // this.dTime.innerHtml = d.timeFormat(340);
    }

    playVideo() {
        this.video.play();
    }

    pauseVideo() { 
        this.video.pause();
    }

 
 }  
