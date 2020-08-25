// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const text = document.querySelector("h2");

const superEventHandler = {
  mouseEnter: function (event) {
    const target = event.target;
    target.style.color = colors[0];
    target.innerText = "The mouse is here!";
  },
  mouseLeave: function (event) {
    const target = event.target;
    target.style.color = colors[1];
    target.innerText = "The mouse is gone!";
  },
  resizeWindow: function (event) {
    text.style.color = colors[2];
    text.innerText = "You just resized!";
  },
  clickRight: function (event) {
    text.style.color = colors[4];
    text.innerText = "That was a right click!";
  },
};

function init() {
  text.addEventListener("mouseenter", superEventHandler.mouseEnter);
  text.addEventListener("mouseleave", superEventHandler.mouseLeave);
  window.addEventListener("resize", superEventHandler.resizeWindow);
  window.addEventListener("contextmenu", superEventHandler.clickRight);
}

init();
