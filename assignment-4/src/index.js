// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const colors = ["#4169e1", "#663399", "orange"];

function handleResize() {
  const width = window.innerWidth;

  if (width <= 500) {
    body.style.backgroundColor = colors[0];
  } else if (width <= 800) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", handleResize);
