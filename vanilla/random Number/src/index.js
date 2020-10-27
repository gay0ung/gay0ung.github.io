// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const view = document.querySelector('.js-view'),
    rangeForm = document.querySelector('#js-range-form'),
    inputR = rangeForm.querySelector('#rangeInput');

const status = document.querySelector('#js-num-form'),
    inputN = status.querySelector('#numInput'),
    playBtn = status.querySelector('#playBtn'),
    userVScom = document.querySelector('.playing'),
    result = document.querySelector('.result')


function handlerRangeInput(e){
  let value = e.target.value
  view.innerHTML = `Generate a number between 0 and ${value}`;
}

function handlerPlayBtn(e) {
  e.preventDefault();

  let maxNum = inputR.valueAsNumber
  let choseNum = inputN.valueAsNumber

  if (isNaN(choseNum)) {
    alert('숫자를 입력해 주세요!')
  } else if (choseNum > maxNum){
    userVScom.className = "warn"
    userVScom.innerHTML = `0 ~ ${maxNum} 사이의 숫자를 입력하세요.`
    inputN.valueAsNumber = NaN;
    result.style.display ="none";
  }else {
    let randValue = Math.floor(Math.random() * maxNum);

    userVScom.className = ""
    userVScom.innerHTML = `You Chose: ${choseNum}, the machine chose: ${randValue}`;

    if (choseNum !== randValue) {
      result.classList.remove("won");
      result.style.display = "block";
      result.innerHTML = "You lost 😰" 
    } else {
      result.classList.add("won");
      result.style.display = "block";
      result.innerHTML = "You Won 🎉"
    }
  }
}

function init(){
  inputR.addEventListener('input', handlerRangeInput);
  playBtn.addEventListener('click', handlerPlayBtn);
}

init()