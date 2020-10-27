const resultElem = document.querySelector('.result');
const calcObj = {
  operator: undefined,
  operandX: undefined,
  operandY: undefined,
  isDisplayClear: false,
  isResultClear: false,
};

const isNumber = input => {
  return Number.isInteger(parseInt(input)) || input === '.';
};

const reset = () => {
  resultElem.innerText = 0;
  calcObj.operandX = undefined;
  calcObj.operandY = undefined;
  calcObj.operator = undefined;
  calcObj.isDisplayClear = false;
  calcObj.isResultClear = false;
};

const reverse = () => {
  resultElem.innerText *= -1;
};

const clickNumbers = number => {
  if (calcObj.isDisplayClear) {
    resultElem.innerText = number !== '.' ? '' : '0.';
    calcObj.operandY = undefined;
    calcObj.isDisplayClear = false;
  } else if (calcObj.isResultClear) {
    resultElem.innerText = number !== '.' ? '' : '0.';
    calcObj.operandY = undefined;
    calcObj.operator = undefined;
    calcObj.isResultClear = false;
  }

  if (number !== '.' && resultElem.innerText === '0') {
    resultElem.innerText = number;
  } else if (!(number === '.' && resultElem.innerText.indexOf('.') !== -1)) {
    resultElem.innerText += number;
  }
};

const add = (x, y) => {
  resultElem.innerText = parseFloat(x) + parseFloat(y);
};

const subtract = (x, y) => {
  resultElem.innerText = x - y;
};

const multiply = (x, y) => {
  resultElem.innerText = x * y;
};

const divide = (x, y) => {
  const value = x / parseFloat(y);
  resultElem.innerText = Math.round(value * 1e12) / 1e12;
};

const getPercent = () => {
  divide(resultElem.innerText, 100);
};

const calculate = () => {
  switch (calcObj.operator) {
    case '÷':
      divide(calcObj.operandX, calcObj.operandY);
      break;
    case '×':
      multiply(calcObj.operandX, calcObj.operandY);
      break;
    case '-':
      subtract(calcObj.operandX, calcObj.operandY);
      break;
    case '+':
      add(calcObj.operandX, calcObj.operandY);
      break;
  }
};

const handleCalculator = (event) => {
  const input = event.target.innerText;
  if (isNumber(input)) {
    clickNumbers(input);
  } else {
    switch (input) {
      case 'C':
        reset();
        break;
      case '±':
        reverse();
        break;
      case '%':
        getPercent();
        break;
      case '÷':
      case '×':
      case '-':
      case '+':
        if (!calcObj.isResultClear && !calcObj.isDisplayClear && calcObj.operandX !== undefined && calcObj.operandY !== undefined) {
          calculate();
        }
        calcObj.operandX = parseFloat(resultElem.innerText);
        calcObj.operator = input;
        calcObj.isDisplayClear = true;
        calcObj.isResultClear = false;
        break;
      case '=':
        if (calcObj.operator === undefined) {
          calcObj.operandX = undefined;
        } else if (calcObj.operandY === undefined) {
          calcObj.operandY = parseFloat(resultElem.innerText);
        }
        if (calcObj.operandX !== undefined && calcObj.operator !== undefined) {
          calculate();
          calcObj.isResultClear = true;
          calcObj.operandX = parseFloat(resultElem.innerText);
        }
        break;
    }
  }
};