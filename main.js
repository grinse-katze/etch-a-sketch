const grid = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
const eraserButton = document.querySelector(".eraser");
const colorPicker = document.querySelector("#colorPicker");
const sizeSlider = document.querySelector("#sizeSlider");
const rainbowButton = document.querySelector(".rainbow-button");

let click = false;
let tool = "pencil";
let color = "black";

function setupSketchPad(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    grid.insertAdjacentElement("beforeend", square);

    square.addEventListener("mouseover", useTool);
    square.addEventListener("mouseup", () => (click = false));
    square.addEventListener("mousedown", (e) => {
      click = true;
      useTool(e);
    });
  }
}

function resetBoard() {
  //forEach div in grid, remove all, then set new/current size value to grid
  grid.querySelectorAll("div").forEach((eachDiv) => eachDiv.remove());
  setupSketchPad(sizeSlider.value);
}

function useTool(e) {
  if (click === true) {
    if (tool === "pencil") {
      e.target.style.backgroundColor = color;
    } else if (tool === "eraser") {
      e.target.style.backgroundColor = "white";
    } else if (tool === "rainbow") {
      let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = randColor;
    }
  }
}

colorPicker.addEventListener("input", () => (color = colorPicker.value));
colorPicker.addEventListener("click", () => (tool = "pencil"));
eraserButton.addEventListener("click", () => (tool = "eraser"));
rainbowButton.addEventListener("click", () => (tool = "rainbow"));
resetButton.addEventListener("click", resetBoard);
sizeSlider.addEventListener("click", resetBoard);

setupSketchPad(sizeSlider.value);
