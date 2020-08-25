// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const title = document.querySelector(".content__title");
const range = document.querySelector(".content__input-range");
const input_guess = document.querySelector(".content__input-guess");
const btn_guess = document.querySelector(".content__btn-guess");
const descValue = document.querySelector(".content__desc-value");
const result = document.querySelector(".content__result");

let maxValue = 100;

function generateRandomValue() {
  const randomValue = Math.round(Math.random() * maxValue);
  return randomValue;
}

function compareValues(humanValue, machineValue) {
  return humanValue == machineValue ? "You won!" : "You lost!";
}

function handleRange(event) {
  maxValue = event.target.value;
  title.innerText = `Generate a number between 0 and ${maxValue}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const guessValue = input_guess.value;

  if (guessValue === "") {
    alert("값을 입력해 주세요!!");
    return;
  }

  const randomValue = generateRandomValue();

  descValue.innerText = `You chose: ${guessValue}, the machine chose: ${randomValue}`;
  result.innerText = compareValues(guessValue, randomValue);
}

range.addEventListener("input", handleRange);
btn_guess.addEventListener("click", handleSubmit);
