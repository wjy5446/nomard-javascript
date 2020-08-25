import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const DAY_MILLISEC = 86400000;
const HOUR_MILLISEC = 3600000;
const MIN_MILLISEC = 60000;
const SEC_MILLISEC = 1000;

const timeHTML = document.querySelector(".remain-time");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");

  const xmasMillSec = xmasDay.getTime();
  const nowMillSec = Date.now();

  return { from: xmasMillSec, to: nowMillSec };
}

function diffTime(from, to) {
  return from - to;
}

function countdownFromXmas() {
  const timeInfo = getTime();
  const intervalTime = diffTime(timeInfo["from"], timeInfo["to"]);

  const day = Math.floor(intervalTime / DAY_MILLISEC);
  let remainMillSec = intervalTime - day * DAY_MILLISEC;

  const hour = Math.floor(remainMillSec / HOUR_MILLISEC);
  remainMillSec = remainMillSec - hour * HOUR_MILLISEC;

  const min = Math.floor(remainMillSec / MIN_MILLISEC);
  remainMillSec = remainMillSec - min * MIN_MILLISEC;

  const sec = Math.floor(remainMillSec / SEC_MILLISEC);

  timeHTML.innerText = `${day < 10 ? `0${day}` : day}d ${
    hour < 10 ? `0${hour}` : hour
  }h ${min < 10 ? `0${min}` : min}m ${sec < 10 ? `0${sec}` : sec}s`;
}

function init() {
  countdownFromXmas();
  setInterval(countdownFromXmas, 1000);
}

init();
