const grid = document.querySelector(".grid-container");
let click = false;

function setupSketchPad(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', checkMouse);
        square.addEventListener('mouseup', () => click = false );
        square.addEventListener('mousedown', (e) => {
            click = true;
            checkMouse(e);
        });
        grid.insertAdjacentElement('beforeend', square);
    }
}

setupSketchPad(16);

function checkMouse(e) {
    if (click === true) {
        e.target.style.backgroundColor = 'black';
    }
}
