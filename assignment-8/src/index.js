// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const KEYLISTPENDING = "PENDING";
const KEYLISTFINISHED = "FINISHED";

let listPending = [];
let listFinished = [];

const formAddTask = document.querySelector(".form-add-task");
const inputAddTask = document.querySelector("input");
const ulListPending = document.querySelector(".content__list-pending-items");
const ulListFinished = document.querySelector(".content__list-finished-items");

/////////////////////////
// Handle Function
////////////////////////

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = inputAddTask.value;
  const objKeyValue = generateItem(inputValue, "pending");

  if (inputValue === "") {
    return;
  }
  listPending.push(objKeyValue);
  saveToLocalStorage(KEYLISTPENDING, listPending);
  drawItem(objKeyValue, "pending");

  inputAddTask.value = null;
}

function handleDelBtn(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const infoLi = li.id.split("-");

  li.remove();

  if (infoLi[0] === "pending") {
    listPending = listPending.filter(
      (item) => item.id !== parseInt(infoLi[1], 10)
    );
    saveToLocalStorage(KEYLISTPENDING, listPending);
  } else if (infoLi[0] === "finished") {
    listFinished = listFinished.filter(
      (item) => item.id !== parseInt(infoLi[1], 10)
    );
    saveToLocalStorage(KEYLISTFINISHED, listFinished);
  }
}

function handleDoneBtn(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const infoLi = li.id.split("-");
  const text = li.querySelector("span").innerText;

  li.remove();
  listPending = listPending.filter(
    (item) => item.id !== parseInt(infoLi[1], 10)
  );
  saveToLocalStorage(KEYLISTPENDING, listPending);

  const objKeyValue = generateItem(text, "finished");
  listFinished.push(objKeyValue);
  saveToLocalStorage(KEYLISTFINISHED, listFinished);
  drawItem(objKeyValue, "finished");
}

function handleRedoBtn(event) {
  const btn = event.target;
  const li = btn.parentNode;

  const infoLi = li.id.split("-");
  const text = li.querySelector("span").innerText;

  li.remove();
  listFinished = listFinished.filter(
    (item) => item.id !== parseInt(infoLi[1], 10)
  );
  saveToLocalStorage(KEYLISTFINISHED, listFinished);

  const objKeyValue = generateItem(text, "pending");
  listPending.push(objKeyValue);
  saveToLocalStorage(KEYLISTPENDING, listPending);
  drawItem(objKeyValue, "pending");
}

/////////////////////////
// UTIL
/////////////////////////

function generateItem(text, type) {
  let listItem = [];
  let lastId = -1;

  if (type === "pending") {
    listItem = listPending;
  } else if (type === "finished") {
    listItem = listFinished;
  }

  if (listItem.length > 0) {
    lastId = listItem[listItem.length - 1].id;
  } else {
    lastId = -1;
  }

  const objKeyValue = {
    id: lastId + 1,
    text: text,
  };

  return objKeyValue;
}

function drawItem(item, type) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");

  span.innerText = item.text;
  btn1.innerText = "❌";
  btn1.addEventListener("click", handleDelBtn);

  if (type === "pending") {
    btn2.innerText = "✅";
    btn2.addEventListener("click", handleDoneBtn);
  } else if (type === "finished") {
    btn2.innerText = "↩️";
    btn2.addEventListener("click", handleRedoBtn);
  }

  li.appendChild(span);
  li.appendChild(btn1);
  li.appendChild(btn2);
  li.id = type + "-" + item.id;

  if (type === "pending") {
    ulListPending.appendChild(li);
  } else if (type === "finished") {
    ulListFinished.appendChild(li);
  }
}

function drawItems(items, type) {
  if (items !== null) {
    for (let i = 0; i < items.length; i++) {
      drawItem(items[i], type);
    }
  }
}

/////////////////////////
// UTIL LOCALSTORAGE
/////////////////////////

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocalStorage(key) {
  const listItems = localStorage.getItem(key);

  if (listItems !== null) {
    const parsedListItems = JSON.parse(listItems);
    return parsedListItems;
  } else {
    return [];
  }
}

function init() {
  listPending = loadFromLocalStorage(KEYLISTPENDING);
  listFinished = loadFromLocalStorage(KEYLISTFINISHED);

  drawItems(listPending, "pending");
  drawItems(listFinished, "finished");
}

formAddTask.addEventListener("submit", handleSubmit);

init();
