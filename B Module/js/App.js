Number.prototype.timeFormat = function() {
    let h = "0" + Math.floor(this / 3600);
    h = h.substring(h.length - 2, h.length);
    let m = "0" + Math.floor(this % 3600 / 60);
    m = m.substring(m.length - 2, m.length);
    let s = "0" + Math.floor(this % 60);
    s = s.substring(s.length - 2, s.length);
    let msec = (this - int).toFixed(2).substr(2);
    return `${h}:${m}:${s}:${msec}`;
}


class App {
    static PATH = 0;
    static RECT = 1;
    static TEXT = 2;
    static SELECT = 3;
    constructor() {
        this.activeTool = "line";
        this.temp_clip = null;

        this.viewport = new Viewport(this);

        this.line = () => new Line(this);
        this.rect = () => new Rect(this);
        this.text = () => new Text(this);
        this.status = null;
        this.contents = document.querySelector("#contents");
        this.track = document.querySelector("#track");
        this.addEvent();
        this.download();
    }

    set active(tool) {
        this.activeTool = tool;
        if(document.querySelector(".tool.active")) document.querySelector(".tool.active").classList.remove("active");
        document.querySelector(`.tool[data-name='${tool}']`).classList.add("active");
    }

    addEvent() {

        document.querySelectorAll(".tool").forEach(x => {
            x.addEventListener("click", e => {
                this.active = e.target.dataset.name;
            });
        }); 

        window.addEventListener("mousedown", e => {
            if(this.temp_clip === null && e.target !== this.viewport.root) return;
            this.temp_clip = this[this.activeTool]();
            this.viewport.clipList.push(this.temp_clip);

            if(this.temp_clip.mousedown) {
                this.temp_clip.mousedown(e);
            }
        });

        window.addEventListener("mousemove", e => {
            if(this.temp_clip !== null && this.temp_clip.mousemove) {
                this.temp_clip.mousemove(e);
            }
        });

        window.addEventListener("mouseup", e => {
            if(this.temp_clip !== null && this.temp_clip.mouseup) {
                this.temp_clip.mouseup(e);
            }
        });
        
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

