class Viewport {
    constructor(app) {
        // this.newCanvas = document.createElement("canvas");
        this.app = app;
        this.tool = Tool;
        this.width = 760;
        this.height = 430;
        this.clipList = [];
       
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
               
            }); 
        });
        
    }

    render() {
        requestAnimationFrame(() => {
            this.render();
        });

        this.cTime.innerHTML = this.video.currentTime.parseTime();
        this.dTime.innerHTML = this.video.duration.parseTime();
    }

    playVideo() {
        this.video.play();
    }

    pauseVideo() { 
        this.video.pause();
    }
 }  
