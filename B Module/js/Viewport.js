class Viewport {
    constructor(app) {
        // this.newCanvas = document.createElement("canvas");
        this.app = app;
        this.tool = Tool;
        this.width = 760;
        this.height = 430;
        this.clipList = [];
        this.movieList = [];
        this.lap = false;

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

    addClip() {
        this.moveList.forEach(movieList=> {
            if(movieList === this.tool.movieId) {
                this.lap = true;
            }
        })

        if(!this.lap) {
            this.movieList.push(this.tool.movieId);
            this.addTool();
            this.addTrack();

            this.timeTrack = document.querySelector("#t_view");
            this.timeTrack.getElementsByClassName.visibility = "visible";
        }
        this.lap = false;
    }

    addTool() {
        this.tool = document.createElement("div");
        this.tool.id = `tool_${this.tool.movieId}`;
        this.tool.classList.add('tool');
        topCanvas.appendChild(this.tool);
    }

    addTrack() {
        this.track = document.createElement("div");
        this.track.id = `track_${this.tool.movieId}`;
        this.track.classList.add('track');
        topTrack.prepend(this.track);
    }

    render() {
        requestAnimationFrame(() => {
            this.render();
        });
        
        //시간
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
