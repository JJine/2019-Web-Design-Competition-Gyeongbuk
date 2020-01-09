class Line extends Tool {
    constructor() {
        this.tool = tool;
        this.app = app;
    }

    mousedown(e) {
        this.tool.path = [];
        this.tool.addCanvas();
        this.tool.canvas = document.querySelector()
    }

    mousemove(e) {
        this.savaPoint(e);
        this.draw();
    }

    draw() {
        this.tool.
    }

    savePoint(e){
        const { x, y } = this.tool.mousePoint(e);
        this.tool.path.push({x: x, y: y, c: this.tool.canvasNum, w: this.tool.strokeSize, color: this.tool.color});
    }

}
