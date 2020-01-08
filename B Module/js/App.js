Number.prototype.parseTime = function(){
    let int = parseInt(this);
    let msec = (this - int).toFixed(2).substr(2);

    let hour = parseInt(int / 3600);
    let min = parseInt((int % 3600) / 60);
    let sec = int % 60;

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return `${hour}:${min}:${sec}:${msec}`;
}


class App {
    static PATH = 0;
    static RECT = 1;
    static TEXT = 2;
    static SELECT = 3;

    constructor() {
        this.activeTool = "line";
        this.temp_clip = 1;
        this.tool = new Tool(this);
        this.viewport = new Viewport(this);

        // this.line = () => new Line(this);
        // this.rect = () => new Rect(this);
        // this.text = () => new Text(this);
        // this.status = null;
        // this.contents = document.querySelector("#contents");
        // this.track = document.querySelector("#track");
        // this.addEvent();
        this.download();
    }

    set active(tool) {
        this.activeTool = tool;
        if(document.querySelector(".tool.active")) document.querySelector(".tool.active").classList.remove("active");
        document.querySelector(`.tool[data-name='${tool}']`).classList.add("active");
    }

    addCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 760;
        this.canvas.height = 430;
        this.canvas.id = `tool_${this.toolNumber+=1}`;
        this.canvas.classList.add(`canvas_${this.canvasNumber++}`);
    }

    addEvent() {
        //document.querySelector("#path-btn").addEventListener("click", e => this.viewport.playTrack !== null ? alert("비디오를 선택해 주세요!") : this.changeStatus(e.target, App.PATH));
        //내꺼
        document.querySelector("#path-btn").addEventListener("click", (e)=> {
            // console.log(e);
            if(document.querySelector("video").getAttribute("src") == null) {alert("비디오를 선택해주세요!"); return false;} this.changeStatus(e.target,App.PATH);
        });
        
        document.querySelector("#rect-btn").addEventListener("click", (e)=> {
            if(document.querySelector("video").getAttribute("src") == null) {alert("비디오를 선택해주세요!"); return false;} this.changeStatus(e.target, App.RECT);
        });

        document.querySelector("#text-btn").addEventListener("click", (e)=> {
            if(document.querySelector("video").getAttribute("src") == null) {alert("비디오를 선택해주세요!"); return false;} this.changeStatus(e.target, App.TEXT);
        });

        document.querySelector("#select-btn").addEventListener("click", (e)=> {
            if(document.querySelector("video").getAttribute("src") == null) {alert("비디오를 선택해주세요!"); return false;} this.changeStatus(e.target, App.SELECT);
        });

        document.querySelector("#play-btn").addEventListener("click", ()=> {
            if(document.querySelector("video").getAttribute("src") == null) {alert("비디오를 선택해주세요!"); return false;} this.viewport.playVideo()
        });

        document.querySelector("#stop-btn").addEventListener("click", ()=> {
            if(document.querySelector("video").getAttribute("src") == null) {alert("비디오를 선택해주세요!"); return false;} this.viewport.pauseVideo()
        });

        document.querySelector("#down-btn").addEventListener("click", ()=> {
            if(document.querySelector("video").getAttribute("src") == null) {alert("비디오를 선택해주세요!"); return false;} this.download();
        });


        document.querySelectorAll(".tool").forEach(x => {
            x.addEventListener("click", e => {
                this.active = e.target.dataset.name;
                console.log(e);
            });
        }); 
    }

    changeStatus(target, status){
        this.status = status;

        const exist = document.querySelector(".left .tool.active");
        if(exist) exist.classList.remove("active");

        target.classList.add("active");
    }

    unset() {
        this.temp_clip = null;
    }

    download() {
        
    }

    
}
// window.addEventListener("load", ()=>{  
//     let app = new App();
// });

window.onload = () => {
    const app = new App();
    app.addEvent();
}

