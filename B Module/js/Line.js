class Line{
    constructor(app, tool) {
        this.app = app;
        this.tool = tool;
    }

    mousedown(e) {
        console.log(e);
        this.tool.path = [];
        this.tool.addCanvas(e);
        this.tool.canvas = document.querySelector(`#tool_${this.tool.toolNumber}`);
        this.tool.ctx = this.tool.canvas.getContext("2d");

        this.savePoint(e);
        this.draw();
 
    }

    mousemove(e) {
        this.savaPoint(e);
        this.draw();
        console.log(e);
    }

    mouseup() {
        this.tool.selectPath.push(this.tool.path);
        this.tool.ctx.closePath();
   }

    draw() {
        this.tool.ctx.beginPath();
        this.tool.ctx.lineCap = "round";

        if(this.tool.path.length > 0){
            for(let i = 0; i < this.tool.path.length; i++){
                this.tool.ctx.strokeStyle = this.tool.path[i].color;
                this.tool.ctx.lineWidth = this.tool.path[i].w;
                if(i != 0)
                    this.tool.ctx.moveTo(this.tool.path[i-1].x, this.tool.path[i-1].y);
                else    
                    this.tool.ctx.moveTo(this.tool.path[i].x, this.tool.path[i].y);
                this.tool.ctx.lineTo(this.tool.path[i].x, this.tool.path[i].y);
            }
        } 
        this.tool.ctx.stroke();
    }

    savePoint(e){
        console.log(e);
        const { x, y } = this.tool.mousePoint(e);
        this.tool.path.push({x: x, y: y, c: this.tool.canvasNumber, w: this.tool.strokeSize, color: this.tool.color});
    }

}
