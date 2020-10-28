const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");;
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange");
const mode = document.getElementById('jsMode')
const saveBtn = document.getElementById('jsSave')

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE_W = 1200;
const CANVAS_SIZE_H = 800;

// canvas에도 (css말고 js도) 따로 사이즈를 줘야 한다. pixel로 그림이 그려지기때문이다.
canvas.width = CANVAS_SIZE_W;
canvas.height = CANVAS_SIZE_H;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE_W, CANVAS_SIZE_H)

ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;
// stop
function stopPaninting() {
    painting = false
}

//start
function startPainting() {
    painting = true
}

//마우스 좌표위치
function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;

    if (!painting) {
        ctx.beginPath()
        ctx.moveTo(x,y)
    } else {
        ctx.lineTo(x, y)
        ctx.stroke()
    }
}

function onMouseDown(e){
    painting = true  
}

// 색상변경
function handleColorClick(e){
    const color = e.target.style.backgroundColor
    ctx.strokeStyle = color
    ctx.fillStyle = color
}

// 펜굵기
function handleRangeChange(e){
    const size = e.target.value
    ctx.lineWidth = size 
    
}

// fill mode
function handleModeClick(e){
    if(filling === true){
        filling = false;
        mode.innerText= "Fill"
    } else {
        filling = true;
        mode.innerText= "Paint"
    }
}

function handleCanvasClick(){
    if(filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE_W, CANVAS_SIZE_H )
    } 
    
}

// save menu
function handleCM(e){
    e.preventDefault()
}

function handleSaveClick(e){
    const image = canvas.toDataURL();
    const link = document.createElement("a")
    link.href = image
    link.download =" PaintJS[🎨]"
    link.click()
    
    
}
// canvas
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPaninting);
    canvas.addEventListener("mouseleave", stopPaninting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM)
;}


// foreach로 각각 addEventListner을 작동 시킨다.
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

if(range){
    range.addEventListener("input", handleRangeChange)
}

// fill mode
if (mode) {
    mode.addEventListener("click", handleModeClick)
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick)
}