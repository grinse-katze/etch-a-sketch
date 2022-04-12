const grid = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset');
const eraserButton = document.querySelector('.eraser');
const colorPicker = document.querySelector('#colorPicker');
const sizeSlider = document.querySelector('#sizeSlider');

let click = false;
let tool = 'pencil';
let color = 'black';


function setupSketchPad(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        grid.insertAdjacentElement('beforeend', square);
        
        square.addEventListener('mouseover', useTool);
        square.addEventListener('mouseup', () => click = false );
        square.addEventListener('mousedown', (e) => {
            click = true;
            useTool(e);
        });
    }

    colorPicker.addEventListener('click', () => tool = 'pencil');
    eraserButton.addEventListener('click', () => tool = 'eraser');
    colorPicker.addEventListener("input", () => color = colorPicker.value);
    resetButton.addEventListener('click', () => resetBoard());

}

function SetGridSize(){
    //forEach div in grid, remove all, then set new value to grid
    grid.querySelectorAll("div").forEach(eachDiv => eachDiv.remove());
    setupSketchPad(sizeSlider.value);
}

function resetBoard() {
    //forEach div in grid, add white to whole grid
    let allSquares = grid.querySelectorAll("div");
    allSquares.forEach(eachDiv => eachDiv.style.backgroundColor = 'white');
}


function useTool(e) {
    if (click === true) {
        if (tool === 'pencil') {
            e.target.style.backgroundColor = color;
        } else if (tool === 'eraser') {
            e.target.style.backgroundColor = 'white';
        }
    }
}

sizeSlider.addEventListener('click', SetGridSize);
setupSketchPad(sizeSlider.value);
