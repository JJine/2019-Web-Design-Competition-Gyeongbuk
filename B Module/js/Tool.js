class Tool {
    constructor(app) {
        this.app = app;
        this.path = []; //new Array
        this.selectPath = []; //new Array
        
        this.toolNumber = 0;
        this.canvasNumber = 0;
        this.rectNumber = 0;
        this.textNumber = 0;
        this.selectNumber = 0;
        this.classList = [];

        this.line = new Line(this.app, this);
        this.rect = new Rect(this.app, this);
        this.text = new Text(this.app, this);
        
        this.toolDom = document.querySelectorAll("button"); 
        this.color = document.querySelector("#line_color").value;
        this.fontsize = document.querySelector("#font_size").value;
        this.strokeSize = document.querySelector("#line_width").value;
        this.gray = document.querySelector(".gray");
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
                if(el.classList[0] === 'gray')
                    this.setTool.mousedown(e);
            })
        });

        window.addEventListener("mousemove", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.classList[0] === 'gray')
                    this.setTool.mousemove(e);
            })
        })

        window.addEventListener("mouseup", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.classList[0] === 'gray')
                    this.setTool.mouseup(e);
            })
        })

    }
  
    addCanvas() {
        let canvas = document.createElement("canvas");
        canvas.id = `tool_${this.toolNumber+=1}`; //툴 영역을 사용할 것이니
        canvas.classList.add('canvas');
        canvas.classList.add(`${this.canvasNumber}`);
        canvas.classList.add(`canvas_${this.canvasNumber++}`); //"canvas_${canvasNumber}"클래스를 요소에 추가 
        let style = canvas.style;
        style.width = 760 + 'px';
        style.height = 430 + 'px';
        style.zIndex = this.toolNumber;
        this.gray.appendChild(canvas); // this..appendChild(canvas);
    }

    mousePoint(e){ 
        console.log(e);
        const {clientX, clientY} = e;
        let x = clientX - this.gray.offsetLeft;
        x = x < 0 ? 0 : this.app.topCanvas.width < x ? this.app.topCanvas.width : x;
        console.log(this.topCanvas);
        let y = clientY - this.gray.offsetTop;
        y = y < 0 ? 0 : this.app.topCanvas.left < y ? this.app.topCanvas.left : y;
        return {x: x, y: y};
      }

}