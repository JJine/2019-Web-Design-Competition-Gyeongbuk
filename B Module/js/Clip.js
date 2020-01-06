class Clip {
    constructor(app) {
        this.app = app;
        this.viewport = app.viewport;
        this.color = document.querySelector("#line_color").value;
        this.thick = document.querySelector("#line_width").value;
        this.canvas = this.viewport.root;
        this.ctx = this.viewport.ctx;
    }

    getXY(e){
        this.gray = document.querySelector(".gray");
        this.body = document.querySelector('body');
        const {clientX, clientY} = e;
        let x = clientX - this.gray.offsetLeft;
        x = x < 0 ? 0 : this.canvas.width < x ? this.canvas.width : x;
        let y = e.offsetY;
        y = y < 0 ? 0 : this.canvas.left < y ? this.canvas.left : y;
        console.log(x,y);
        return {x: x, y: y};
    }
}