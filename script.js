const keyboard = document.getElementById("keyboard");
const input = document.getElementById("textInput");

let isShift = false;
let isCaps = false;

const layout = [
  ["q","w","e","r","t","y","u","i","o","p"],
  ["a","s","d","f","g","h","j","k","l"],
  ["shift","z","x","c","v","b","n","m","backspace"],
  ["caps","space","enter"]
];

function renderKeyboard() {
  keyboard.innerHTML = "";

  layout.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    row.forEach(key => {
      const keyBtn = document.createElement("button");
      keyBtn.className = "key";

      if (key === "backspace") {
        keyBtn.textContent = "⌫";
        keyBtn.classList.add("wide");
      } 
      else if (key === "shift") {
        keyBtn.textContent = "Shift";
        keyBtn.classList.add("wide");
      } 
      else if (key === "caps") {
        keyBtn.textContent = "Caps";
        keyBtn.classList.add("wide");
      } 
      else if (key === "enter") {
        keyBtn.textContent = "Enter";
        keyBtn.classList.add("wide");
      } 
      else if (key === "space") {
        keyBtn.textContent = "Space";
        keyBtn.classList.add("extra-wide");
      } 
      else {
        keyBtn.textContent = getChar(key);
      }

      keyBtn.onclick = () => handleKeyPress(key);
      rowDiv.appendChild(keyBtn);
    });

    keyboard.appendChild(rowDiv);
  });
}

function getChar(key) {
  if (isShift ^ isCaps) {
    return key.toUpperCase();
  }
  return key.toLowerCase();
}

function handleKeyPress(key) {
  if (key === "backspace") {
    input.value = input.value.slice(0, -1);
  } 
  else if (key === "space") {
    input.value += " ";
  } 
  else if (key === "enter") {
    input.value += "\n";
  } 
  else if (key === "shift") {
    isShift = !isShift;
    renderKeyboard();
  } 
  else if (key === "caps") {
    isCaps = !isCaps;
    renderKeyboard();
  } 
  else {
    input.value += getChar(key);
    if (isShift) {
      isShift = false;
      renderKeyboard();
    }
  }
}

renderKeyboard();
