class Tool {
    constructor(app) {
        this.app = app;
        this.path = []; //new Array
        this.selectPath = []; //new Array
        this.selectNum = 0; 
        
        this.line = new Line(this);
        this.rect = new Rect(this);
        this.text = new Text(this);
        this.select = new Select(this);

        this.toolDom = document.querySelector("button"); 
        this.color = document.querySelector("#line_color");
        this.fontsize = document.querySelector("#font_size");
        this.strokeSize = document.querySelector("#line_width");
        this.mouseEvent();
    }

    mouseEvent() {
        this.toolDom.forEach(tool => {
            tool.addEventListener("click", ()=> {
                this.nowTool = tool.dataset.tool;
                this.setTool = this.[this.nowTool];
            })
        });

        window.addEventListener("mousedown", e=> {
            if(!this.nowTool||e.which !== 1) return;
            e.path.forEach(el=> {
                if(el.id === 'screen')
                    this.setTool.mousedown(e);
            })
        });

        window.addEventListener("mousemove", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.id === 'screen')
                    this.setTool.mousemove(e);
            })
        })

        window.addEventListener("mouseup", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.id === 'screen')
                    this.setTool.mouseup(e);
            })
        })

    }

    addCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 760;
        this.canvas.height = 430;
        this.canvas.id = `tool_${this.toolNum+=1}`;
        this.canvas.classList.add(`canvas_${this.canvasNum}`);
        this.canvas.classList.add('canvas');
        this.canvas.classList.add(`${this.canvasNum}`);
        this.canvas.style.zIndex = this.app.toolNum;

        this.nowMovie = document.querySelector(`#tool_${this.movieId}`); 
        this.nowMovie.appendChild(this.canvas);   
        this.toolList.push(`tool_${this.toolNum}`);
        this.canvasNum++;
        // this..appendChild(canvas);
    }

    mousePoint(e){ 
        const {clientX, clientY} = e;
        let x = clientX - screen.offsetLeft;
        x = x < 0 ? 0 : parCanvas.width < x ? parCanvas.width : x;
        let y = clientY - screen.offsetTop;
        y = y < 0 ? 0 : parCanvas.left < y ? parCanvas.left : y;
        return {x: x, y: y};
      }

}