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
        this.trackNumber = 0;
        // this.classList = [] ;

        //영화
        this.nowTool;
        this.movieId = null;

        this.line = new Line(this.app, this);
        this.rect = new Rect(this.app, this);
        this.text = new Text(this.app, this);
        this.viewport = new Viewport(this.app, this);
        
        this.toolDom = document.querySelectorAll("button"); 
        // this.color = document.querySelector("#line_color").value;
        // this.fontsize = document.querySelector("#font_size").value;
        // this.strokeSize = document.querySelector("#line_width").value;
        this.gray = document.querySelector("#gray");
        this.topCanvas = document.querySelector('#canvas'); //상위
        this.topTrack = document.querySelector("#track");

        this.mouseEvent();
    }

    get color() { return document.querySelector("#line_color").value; }
    get fontSize() { return document.querySelector("#font_size").value; }
    get strokeSize() { return document.querySelector("#line_width").value;}

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
                if(el.id === 'gray') {
                    console.log(this.setTool);
                    this.setTool.mousedown(e);
                }
            })
        });

        window.addEventListener("mousemove", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.id === 'gray') {
                     this.setTool.mousemove(e); 
                }
                    
            })
        })

        window.addEventListener("mouseup", e=> {
            if(!this.nowTool||e.which!== 1) return;
            e.path.forEach(el=> {
                if(el.id === 'gray') { 
                    this.setTool.mouseup(e);
                }
            })
        })

    }
  
    addCanvas() {
        let canvas = document.createElement("canvas");
        canvas.id = `tool_${this.toolNumber+=1}`; //툴 영역을 사용할 것이니
        canvas.classList.add('canvas');
        canvas.classList.add(`${this.canvasNumber}`);
        canvas.width = 760;
        canvas.height = 430;
        canvas.classList.add(`canvas_${this.canvasNumber}`); //"canvas_${canvasNumber}"클래스를 요소에 추가 
        canvas.style.zIndex = this.toolNumber;
        
        this.nowMovie = document.querySelector(`#tool_${this.movieId}`);
        // this.nowMovie.appendChild(canvas);
        this.gray.appendChild(canvas); // this..appendChild(canvas);
        this.app.toolList.push(`tool_${this.toolNumber}`);
        // let style = document.querySelector("#tool_0");
        this.canvasNumber++;
    }

    addRect() {
        this.rect = document.createElement("div");
        this.rect.id = `tool_${this.toolNumber+=1}`;
        // Rect.ID = `tool_${this.rectNumber+=1}`;
        this.rect.classList.add('tool_rect');
        this.rect.classList.add(`rect_${this.rectNumber}`);
        
        this.style = this.rect.style;
        this.style.borderColor = this.color;
        this.style.left = this.sX + 'px';
        this.style.top = this.sY + 'px';
        // this.rectNumber++;
        this.style.zIndex = this.toolNumber;

        this.nowMovie = document.querySelector(`#tool_${this.movieId}`);
        this.nowMovie.appendChild(this.rect);
        this.app.toolList.push(`tool_${this.toolNumber}`);
        this.rectNumber++;

        // return this.style, this.sX, this.sY;
    }

    addText() {
        this.input = document.createElement("input");
    }

    mousePoint(e){ 
        let offsetTop = $(this.gray).offset().top;
        let offsetLeft = $(this.gray).offset().left;
        const {pageX, pageY} = e;
        // console.log(offsetTop,offsetLeft);
        let x = pageX - offsetLeft;
        // console.log(this.gray.offsetWidth);
        x = x < 0 ? 0 : this.gray.offsetWidth < x ? this.gray.offsetWidth : x;
        let y = pageY - offsetTop;
        y = y < 0 ? 0 : this.gray.offsetHeight  < y ? this.offsetHeight : y;
        // console.log(y);
        return {x: x, y: y};
      }
      


}