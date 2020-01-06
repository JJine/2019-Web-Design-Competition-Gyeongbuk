const X = 0;
const Y = 1;

class Line extends Clip {
    constructor(app) {
        super(app);

        this.select = false;
        this.history = [];
    }

    mousedown(e) {
        document.querySelector('h1').style.display = 'hidden';
    }

    mousemove(e) {
        if(e.which !== 1) return;
        const { x, y } = this.getXY(e);
        this.history.push([x, y]);
    }

    mouseup(e) {
        if(e.which !== 1) return false;
        this.app.unset();
    }

    redraw() {
        if(this.select) {
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = this.thick;

            this.ctx.beginPath();
            this.ctx.moveTo(this.history[0][X], this.history[0][Y]);
            this.history.forEach(x => {
                this.ctx.lineTo(x[0], x[1]);
            });
            this.ctx.stroke();
        }

        if(this.history.length > 0) {
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = this.thick;

            this.ctx.beginPath();
            this.ctx.moveTo(this.history[0][X], this.history[0][Y]);
            this.history.forEach(x => {
                this.ctx.lineTo(x[0], x[1]);
            });
            this.ctx.stroke();
        }
    }


}