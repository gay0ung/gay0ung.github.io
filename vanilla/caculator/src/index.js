// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const numBox = document.querySelector('.cal-number'),
    number = document.querySelector('.number'),
    calIng = document.querySelector('.calIng'),
    numBtn = document.querySelectorAll('.number-box > div > button');

const symBox = document.querySelector('.cal-symbol'),
    symbolBtn = document.querySelectorAll('.cal-symbol > button');


// 두자리 이상의 숫자를 넣어줘야 한다.
function addNumber(num) {
  if(num !== "=" && num !== "C"){
    calIng.innerText = calIng.innerText + num;
  } else if (num === "=") {
    calculate(calIng.innerText)
  } 
  if (num === "C"){
    reset()
  }
}

function onlyNumber(NUM){
  if (NUM !== "=" && NUM !== "cal-symbol" ){
    number.innerHTML = number.innerHTML + NUM;
  } else if (NUM === "cal-symbol") {
    number.innerHTML = ""
  }

}

function calculate(NUMBER){
  let result = eval(NUMBER);
  number.innerText = result;
  calIng.innerText = ""
}

function reset(){
  number.innerText = ""
  calIng.innerText = ""
}

// event handler
function addEvent(BTN){
  for (let i = 0; i < BTN.length; i++){
    if (BTN[i].parentNode.className === "cal-symbol"){
      BTN[i].addEventListener("click", symbolHandler);
    } else {
      BTN[i].addEventListener("click", numberHandler)
    }
  }
}

function numberHandler(e){
  let btnNum = e.target.innerText
  addNumber(btnNum);
  onlyNumber(btnNum);
}

function symbolHandler(e){
  const btnSymbol = e.target.innerText;
  const symParent = e.target.parentNode.className
  addNumber(btnSymbol);
  console.log();
  onlyNumber(symParent);
}

function init(){
  numBox.addEventListener("mouseenter", ()=>{
    addEvent(numBtn)
  })
  symBox.addEventListener("mouseenter", () =>{
    addEvent(symbolBtn)
  })
}

init()