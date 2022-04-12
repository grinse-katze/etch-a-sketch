const grid = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset')
const eraserButton = document.querySelector('.eraser');
const colorButton = document.querySelector('.color');

let click = false;
let tool = 'pencil';
let color = 'black';

function setupSketchPad(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');

        square.addEventListener('mouseover', useTool);
        square.addEventListener('mouseup', () => click = false );
        square.addEventListener('mousedown', (e) => {
            click = true;
            useTool(e);
        });

        grid.insertAdjacentElement('beforeend', square);
    }

    colorButton.addEventListener('click', () => tool = 'pencil');
    eraserButton.addEventListener('click', () => tool = 'eraser');
}

setupSketchPad(16)

function useTool(e) {
    if (click === true) {
        if (tool === 'pencil') {
            e.target.style.backgroundColor = color;
        } else if (tool === 'eraser') {
            e.target.style.backgroundColor = 'white';
        }
    }
}



resetButton.addEventListener('click', resetBoard)

function resetBoard(){
    //forEach div in grid, add white to whole grid
    let allSquares = grid.querySelectorAll("div");
    allSquares.forEach(eachDiv => eachDiv.style.backgroundColor = 'white');
}
