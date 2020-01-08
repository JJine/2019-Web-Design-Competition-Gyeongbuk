class Tool {
    constructor(app) {
        this.app = app;
        this.viewport = app.viewport;
        this.color = document.querySelector("#line_color").value;
        this.thick = document.querySelector("#line_width").value;
        // this.canvas = document.querySelector("#myCanvas");
        // this.ctx = this.canvas.getContext("2d");
        // this.canvasX();
        // this.canvasY();
        // this.canvas = this.viewport.root;
        // this.ctx = this.viewport.ctx;
    }

    // addEvent() {

    // }

    // canvasX(clientX) {
    //     let bw = 5;
    //     let bound = this.canvas.getBoundingClientRect();
    //     return(clientX - bound.left-bw)*(this.canvas.width/(bound.width-bw*2));
    // }
  
    // canvasY(clientY) {
    //     let bound = this.canvas.getBoundingClientRect();
    //     let bw = 5;
    //     return(clientY-bound.top-bw)*(this.canvas.height/(bound.height-bw*2));
    // }

    getXY(e){
        this.gray = document.querySelector(".gray");
        this.body = document.querySelector('body');
       
           const {clientX, clientY} = e;
        let x = clientX - this.canvas.offsetLeft;
        x = x < 0 ? 0 : this.canvas.width < x ? this.canvas.width : x;
        let y = clientY - this.canvas.offsetTop;
        y = y < 0 ? 0 : this.canvas.left < y ? this.canvas.left : y;
        return {x: x, y: y};
    }
}