// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const COUNTRY = "country";

const selectCountry = document.querySelector(".select-country");

selectCountry.addEventListener("change", handleSelectCountry);

function handleSelectCountry(event) {
  const selectValue = event.target.value;

  if (selectValue === "empty") {
    return;
  }

  localStorage.setItem(COUNTRY, selectValue);
}

function loadCountry() {
  const loadedCountry = localStorage.getItem(COUNTRY);

  if (loadedCountry !== null) {
    // TODO : set value
    const selectTag = selectCountry.querySelector(
      `option[value=${loadedCountry}]`
    );
    selectTag.setAttribute("selected", null);
  }
}

function init() {
  loadCountry();
}

init();
