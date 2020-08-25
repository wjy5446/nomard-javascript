// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const divDisplay = document.querySelector(".display");
const btns = document.querySelectorAll("button");

let displayNum = 0;
let resultNum = 0;
let preOP = "+";

function handleBtn(event) {
  const classList = event.target.classList;
  const value = event.target.value;

  if (classList.contains("btn-reset")) {
    resetResultNum();
    displayResultNum(displayNum);
  } else if (classList.contains("btn-op-equal")) {
    processEqualBtn();
  } else if (classList.contains("btn-number")) {
    processNumBtn(parseInt(value, 10));
  } else if (classList.contains("btn-operator")) {
    processOpBtn(value);
  }
}

function resetResultNum() {
  resultNum = 0;
  displayNum = 0;
  preOP = "+";
}

function processEqualBtn() {
  processOpBtn("+");
  resetResultNum();
}

function processNumBtn(number) {
  displayNum = displayNum === 0 ? number : displayNum * 10 + number;
  displayResultNum(displayNum);
}

function processOpBtn(op) {
  if (preOP === "+") {
    resultNum = resultNum + displayNum;
  } else if (preOP === "-") {
    resultNum = resultNum - displayNum;
  } else if (preOP === "*") {
    resultNum = resultNum * displayNum;
  } else if (preOP === "/") {
    if (displayNum === 0) {
      resetResultNum();
      return;
    }

    resultNum = resultNum / displayNum;
  }
  preOP = op;
  displayNum = 0;
  displayResultNum(resultNum);
}

function displayResultNum(number) {
  divDisplay.innerText = number;
}

function init() {
  resetResultNum();
  displayResultNum(displayNum);
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleBtn);
}

init();
