Number.prototype.timeFormat = function() {
    let h = "0" + Math.floor(this / 3600);
    h = h.substring(h.length - 2, h.length);
    let m = "0" + Math.floor(this % 3600 / 60);
    m = m.substring(m.length - 2, m.length);
    let s = "0" + Math.floor(this % 60);
    s = s.substring(s.length - 2, s.length);
    return `${h}:${m}:${s}`;
}


class App {
    constructor() {
        this.activeTool = "line";
        this.temp_clip = null;

        this.viewport = new Viewport(this);

        this.line = () => new Line(this);
        this.rect = () => new Rect(this);
        this.text = () => new Text(this);

        this.addEvent();
        this.download();
    }

    set active(tool) {
        this.activeTool = tool;
        if(document.querySelector(".tool.active")) document.querySelector(".tool.active").classList.remove("active");
        d
    }

    addEvent() {
        // document.querySelector("#free_curve").addEventListener("click", e => this.view.playTrack === null ? alert("비디오를 선택해주세요") : this.changestaus(e.taget, app.PAHT));
        // document.querySelector("#rectangle").addEventListener("click", e => this.view.playTrack === null ? alert ("비디오를 선택해주세요") : this.changestaus(e.taget, app.PAHT));
        // document.querySelector("#text").addEventListener("click", e => this.view.playTrack === null ? ));

        document.querySelectorAll(".left").forEach(x => {
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
            if(this.temp_clip === null && this.temp_clip.mousemove) {
                this.temp_clip.mousedown(e);
            }
        });
        
    }

    download() {
        
    }
}
window.addEventListener("load", ()=>{  
    let app = new App();
});

