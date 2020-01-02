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



    addEvent() {
        // document.querySelector("#free_curve").addEventListener("click", e => this.view.playTrack === null ? alert("비디오를 선택해주세요") : this.changestaus(e.taget, app.PAHT));
        // document.querySelector("#rectangle").addEventListener("click", e => this.view.playTrack === null ? alert ("비디오를 선택해주세요") : this.changestaus(e.taget, app.PAHT));
        // document.querySelector("#text").addEventListener("click", e => this.view.playTrack === null ? ));

        document.querySelectorAll(".left").forEach(x => {

        }) 

    }

    download() {
        
    }
}
window.addEventListener("load", ()=>{  
    let app = new App();
});

