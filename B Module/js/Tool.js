class Tool {
    constructor(app) {
        this.app = app;
        this.path = []; //new Array
        this.selectPath = []; //new Array
        
        // this.toolNumber = 0;
        // this.canvasNumber = 0;

        this.line = new Line(this.app, this);
        this.rect = new Rect(this.app, this);
        this.text = new Text(this.app, this);
        
        this.toolDom = document.querySelectorAll("button"); 
        this.color = document.querySelector("#line_color").value;
        this.fontsize = document.querySelector("#font_size").value;
        this.strokeSize = document.querySelector("#line_width").value;
        this.mouseEvent();
    }

    mouseEvent() {
        this.toolDom.forEach(tool => {
            tool.addEventListener("click", ()=> {
                this.nowTool = tool.dataset.tool;
                this.setTool = this[this.nowTool];
            })
        });

        window.addEventListener("mousedown", e=> {
            if(!this.nowTool||e.which !== 1) return;
            e.path.forEach(el=> {
                console.log(this.setTool.mousedown());
                if(el.id === 'gray')
                    this.setTool.mousedown(e);
            })
        });

        window.addEventListener("mousemove", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.id === 'gray')
                    this.setTool.mousemove(e);
            })
        })

        window.addEventListener("mouseup", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.id === 'gray')
                    this.setTool.mouseup(e);
            })
        })

    }
  
    addCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.id = `tool_${toolNumber+=1}`; //툴 영역을 사용할 것이니
        this.canvas.classList.add('canvas');
        this.canvas.classList.add(`${this.canvasNumber}`);
        this.canvas.classList.add(`canvas_${canvasNumber++}`); //"canvas_${canvasNumber}"클래스를 요소에 추가 
        let style = this.canvas.style;
        style.width = 760 + 'px';
        style.height = 430 + 'px';
        this.
        this.style.zIndex = this.toolNumber;
        this.canvas.appendChild(this.canvas);
        console.log(this.canvas);
        // this..appendChild(canvas);
    }

    mousePoint(e){ 
        const {clientX, clientY} = e;
        let x = clientX - gray.offsetLeft;
        x = x < 0 ? 0 : TopCanvas.width < x ? TopCanvas.width : x;
        let y = clientY - gray.offsetTop;
        y = y < 0 ? 0 : TopCanvas.left < y ? TopCanvas.left : y;
        return {x: x, y: y};
      }

}