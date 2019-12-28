function button1_click() {
//캔버스 객체와 컨텍스트 알아내고 초기화
    
var canvas, context, starX, starY, ctx, drawing = false; //context = information 객체의 현재 상태,  
canvas = document.getElementById("myCanvas"); //메소드로 캔버스 객체 찾기
   
    // if(canvas==null||canvas.getContext==null) return;
    ctx = canvas.getContext("2d"); //메소드로 그리기 컨텍스트 구함 
    // this.ctx.lineCap="round";
  
    canvas.onmousedown = function (e) {
        e.preventDefault();
        set_color();
        starX = canvasX(e.clientX);
        starY = canvasY(e.clientY);
        drawing = true; 
    }

    canvas.onmousemove = function (e) {
        if(drawing) {
            e.preventDefault();
            ctx.beginPath();
            ctx.moveTo(starX, starY);
            starX = canvasX(e.clientX);
            starY = canvasY(e.clientY);
            ctx.lineTo(starX, starY);
            ctx.stroke();
        }
    }

    canvas.onmouseup = function (e) {
        drawing = false;
    }
    
    function set_color(){
        let color = document.getElementById("line_color");
        line_color = color.options[color.selectedIndex].value;
        ctx.strokeStyle = line_color;
    }
    
//선 색상 변경 
var line_color = document.getElementById("line_color");
line_color.onchange = function (e) { 
    ctx.strokeStyle = line_color.value;
}

//선 굵기 변경
var line_width = document.getElementById("line_width");
line_width.onchange = function (e) {
    ctx.lineWidth = line_width.value;
}

//모든 삭제
var delete_all = document.getElementById("delete_all");
delete_all.onclick =  function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function canvasX(clientX) {
    var bound = canvas.getBoundingClientRect();
    var bw = 5;
    return(clientX-bound.left-bw)*(canvas.width/(bound.width-bw*2));
}

function canvasY(clientY) {
    var bound = canvas.getBoundingClientRect();
    var bw = 5;
    return(clientY-bound.top-bw)*(canvas.height/(bound.height-bw*2)); // y는 임의로 정하고 
}

/* offsetX와 clientX 의 차이는 clientX 메소드는 영역 내의 가로, 세로 좌표를 제공 즉, 클라이언트 영역이 화면 기준이 되고, offsetX 메소드는 박스 안에 있는 모서리 좌표가 0이 된다.*/

}

function button2_click() {
    var canvas = document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");

    var startX, startY, width, height;
    
    canvas.onmousedown = function (e) {
        // e.preventDefault();
        // set_color()
        startX = e.offsetX;
        startY = e.offsetY;
        
        console.log("x좌표 = "+ startX);
        console.log("y좌표 = "+ startY);
     }
    
    canvas.onmouseup = function (e) {
         width = e.offsetX - startX;
         height = e.offsetY - startY;
         
     ctx.rect(startX, startY, width, height);
     ctx.stroke();

     function set_color(){
        let color = document.getElementById("line_color");
        line_color = color.options[color.selectedIndex].value;
        ctx.strokeStyle = line_color;
    }
     
     var line_color = document.getElementById("line_color");
     line_color.onchange = function (e) { 
     ctx.strokeStyle = line_color.value;
     }
     ctx.fillStyle='gray';
     
    //  var message="test";
     
    //  ctx.fillText(message, startX, startY, width, height);

    
     console.log("가로(width) = " + width);
     console.log("세로(height) = " + height);
    }
}
