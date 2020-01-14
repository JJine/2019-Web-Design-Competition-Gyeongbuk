class Rect{
    // static ID = null; 
    constructor(app, tool){
        this.app = app;
        this.tool = tool;
        // this.cx = null;
        // this.cy = null;
        this.data = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.active = false;
    }

    mousedown(e){    
        this.active = true;
        if(e.which !== 1) return false;  
        const {x, y} = this.tool.mousePoint(e);
        this.sX = x; 
        this.sY = y; 

        // this.rect = document.createElement('div');
        // this.rect.id = `tool_${this.rectNumber += 1}`;
        // console.log(this.rectNumber);
        // Rect.ID = `tool_${this.rectNumber}`;
        // this.rect.classList.add('tool_square');
        // this.rect.classList.add(`square_${this.rectNumber}`);
        
        // let style = this.rect.style;
        // style.borderColor = this.tool.color;
        // console.log(this.tool.color);
        // style.left = this.sX + 'px';
        // style.top = this.sY + 'px';
     
        // style.zIndex = this.toolNumber;
        // this.tool.gray.appendChild(this.rect);
        // this.app.toolList.push(`tool_${this.toolNumber}`);   
        // this.rectNumber++;
        this.tool.addRect();
        // console.log(this.tool.addRect());
        // this.data.x = x;
        // this.data.y = y;
        // this.data.w = 1;
        // this.data.h = 1;

    }

    mousemove(e){
        if(e.which !== 1) return false;
        // let style = document.querySelector("#" + Rect.ID);
        // console.log(style);
        let style = this.tool.rect.style;
        console.log(this.tool.rect.style);
        const {x, y} = this.tool.mousePoint(e);
        if(this.active) {
            if(x < this.sX && y < this.sY)  {
                style.top = y + "px";
                style.width = this.sX - x + "px";
                style.height = this.sY - y + "px";
                style.left = x + "px"
            }

            else if(x > this.sX && y > this.sY){
                style.left = this.sX + "px";
                style.top = this.sY + "px";
                style.width = x - this.sX + "px";
                style.height = y - this.sY + "px";
              }

              else if(x < this.sX && y > this.startY){
                style.left = x + "px";
                style.top = this.sY + "px";
                style.width = this.sX - x + "px";
                style.height = y - this.sY + "px";
              }

              else if(x > this.sX && y < this.sY){
                style.left = this.sX + "px";
                style.top = y + "px";
                style.width = x - this.sX + "px";
                style.height = this.sY - y + "px";
              }
        }
    }

    mouseup(e){
        // this.active = true;
        if(this.active) {
            let style =this.tool.rect.style;
            console.log(this.tool.rect.color);
            style.backgroundColor = this.tool.color;
           
        }
        this.active = false;
    }

    // redraw(){
    //     this.tool.ctx.fillStyle = this.tool.color;
    //     this.tool.ctx.strokeStyle = this.tool.color;

    //     const {x, y, w, h} = this.data;
    //     if(this.active){
    //         this.tool.ctx.fillRect(x, y, w, h);
    //     }
    //     else {
    //         this.tool.ctx.strokeRect(x, y, w, h);
    //     }
    // }
}