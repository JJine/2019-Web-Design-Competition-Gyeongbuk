class Rect extends Clip {
    constructor(app){
        super(app);

        this.cx = null;
        this.cy = null;

        this.data = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.active = false;
    }

    mousedown(e){
        if(e.which !== 1) return false;
        const {x, y} = this.getXY(e);

        this.cx = x;
        this.cy = y;

        this.data.x = x;
        this.data.y = y;
        this.data.w = 1;
        this.data.h = 1;
    }

    mousemove(e){
        if(e.which !== 1) return false;

        const {x, y} = this.getXY(e);

        this.data.w = x - this.cx;
        this.data.h = y - this.cy;
    }

    mouseup(e){
        this.active = true;
    }

    redraw(){
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;

        const {x, y, w, h} = this.data;
        if(this.active){
            this.ctx.fillRect(x, y, w, h);
        }
        else {
            this.ctx.strokeRect(x, y, w, h);
        }
    }
}