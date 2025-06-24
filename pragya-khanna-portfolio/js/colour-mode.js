//Define DOM Elements

const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "colour-mode";
const defaultMode = "light-mode";

//Load user's preffered colour mode from local storage

function loadColourMode() {
  const colourMode = localStorage.getItem(storageKey);
  root.classList.add(colourMode || defaultMode);
  updateToggleButton();
}

loadColourMode();

//Toggle the colour mode
toggleButton.addEventListener("click", () => {
  saveColourMode();
});

function saveColourMode() {
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";

  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--moon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";
  }
}
