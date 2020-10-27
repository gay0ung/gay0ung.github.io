// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const numkey = document.querySelector(".numkey"),
  //num = numkey.querySelector(".num"),
  showMe = document.querySelector(".showing"),
  oprkey = document.querySelector(".oprkey"),
  //opr = oprkey.querySelector(".opr"),
  reset = document.querySelector(".rskey"),
  equal = document.querySelector(".eqkey");

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

showMe.dataset.preValue = "default";
showMe.dataset.forResult = "default";
//console.log(showMe.dataset.preValue);
//console.log(showMe.dataset.forResult);
//console.log(showMe.textContent);

function pushNum(event) {
  const numtext = event.target.textContent;
  if (showMe.dataset.preValue === "default" || showMe.dataset.again === "yes") {
    if (showMe.textContent === "0") {
      showMe.textContent = numtext;
    } else {
      showMe.textContent = showMe.textContent + numtext;
    }
  } else {
    showMe.dataset.again = "yes";
    showMe.textContent = numtext;
  }
}

function oprkeyFn(event) {
  if (showMe.dataset.preValue === "default") {
    showMe.dataset.preValue = showMe.textContent;
  }
  if (showMe.dataset.preValue !== "default" && showMe.dataset.again !== "yes") {
    switch (event.target.textContent) {
      case "+":
        showMe.dataset.opr = "+";
        //console.log("plus");
        break;
      case "-":
        showMe.dataset.opr = "-";
        //console.log("thats fucking cool minus");
        break;
      case "*":
        showMe.dataset.opr = "*";
        //console.log("SUPER MARIO UP");
        break;
      case "/":
        showMe.dataset.opr = "/";
        //console.log("dont divide me");
        break;
      default:
    }
  } else if (
    showMe.dataset.preValue !== "default" &&
    showMe.dataset.again === "yes"
  ) {
    const A = parseFloat(showMe.dataset.preValue),
      B = parseFloat(showMe.textContent);
    switch (event.target.textContent) {
      case "+":
        showMe.dataset.opr = "+";
        let result = add(A, B);
        showMe.textContent = result;
        //console.log("plus");
        break;
      case "-":
        showMe.dataset.opr = "-";
        result = sub(A, B);
        showMe.textContent = result;
        //console.log("thats fucking cool minus");
        break;
      case "*":
        showMe.dataset.opr = "*";
        result = mul(A, B);
        showMe.textContent = result;
        //console.log("SUPER MARIO UP");
        break;
      case "/":
        showMe.dataset.opr = "/";
        result = div(A, B);
        showMe.textContent = result;
        //console.log("dont divide me");
        break;
      default:
    }
    showMe.dataset.preValue = showMe.textContent;
    showMe.dataset.again = "";
  }
}

function showMeResult() {
  if (showMe.dataset.forResult === "default") {
    const A = parseFloat(showMe.dataset.preValue),
      B = parseFloat(showMe.textContent);
    switch (showMe.dataset.opr) {
      case "+":
        let result = add(A, B);
        showMe.textContent = result;
        break;
      case "-":
        result = sub(A, B);
        showMe.textContent = result;
        break;
      case "*":
        result = mul(A, B);
        showMe.textContent = result;
        break;
      case "/":
        result = div(A, B);
        showMe.textContent = result;
        break;
      default:
    }
    showMe.dataset.forResult = showMe.dataset.preValue;
  } else if (
    showMe.dataset.forResult !== "default" ||
    showMe.dataset.preValue !== "default"
  ) {
    const A = parseFloat(showMe.dataset.forResult),
      B = parseFloat(showMe.textContent);
    switch (showMe.dataset.opr) {
      case "+":
        let result = add(A, B);
        showMe.textContent = result;
        break;
      case "-":
        result = sub(A, B);
        showMe.textContent = result;
        break;
      case "*":
        result = mul(A, B);
        showMe.textContent = result;
        break;
      case "/":
        result = div(A, B);
        showMe.textContent = result;
        break;
      default:
    }
    showMe.dataset.preValue = showMe.textContent;
  }
}

function manInBlack(event) {
  showMe.dataset.preValue = "default";
  showMe.dataset.forResult = "default";
  showMe.dataset.opr = "";
  showMe.textContent = 0;
  showMe.dataset.again = "";
}

function test(event) {
  //console.log(event.target.textContent);
}
function init() {
  equal.addEventListener("click", showMeResult);
  reset.addEventListener("click", manInBlack);
  oprkey.addEventListener("click", oprkeyFn);
  numkey.addEventListener("click", pushNum);
  showMe.addEventListener("click", test);
}
init();
