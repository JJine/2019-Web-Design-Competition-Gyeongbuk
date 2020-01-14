class Text{
    constructor(app, tool) {
        this.app = app;
        this.tool = tool;

        this.input = document.createElement("input");
        this.input.autofocus = true;

        let st = this.input.style;
        st.position = "absolute";
        st.color = this.tool.color;
        
        this.data = {
            x : 0,
            y : 0,
            text : ""
        };

        this.addEvent();
    }

    addEvent() {
        this.input.addEventListener("mousedown", e => {
            if(e.keyCode === 13) {
                this.data.text = this.input.value;
                this.input.remove();
            }
        });
    }

    mousedown(e) {
        const {x, y} = this.tool.mousePoint(e);
        this.data.x = x;
        this.data.y = y;

        this.tool.addRect();
        this.input.style.left = e.clientX + "px";
        this.input.style.top = e.clientY + "px";
        this.canvas.parentElement.append(this.input);
    }

    redraw() {
        const {text, x, y} = this.data;
        if(text !== "") {
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(text, x, y);
        }
    }
}