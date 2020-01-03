class Viewport {
    constructor(app) {
        this.app = app;
        this.width = 760;
        this.height = 430;
        this.clipList = [];
        this.root = document.querySelector("#myCanvas");
        this.ctx = this.root.getContext("2d");
        this.addEvent();

        requestAnimationFrame(() => {
            this.render();
        });
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.clipList.forEach(x => {
            x.redraw();
        })

        requestAnimationFrame(() => {
            this.render();
        })
    }
    addEvent() {

    }
}