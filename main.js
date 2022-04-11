
const grid = document.querySelector(".grid-container");

function setupSketchPad(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorChanger);
        square.addEventListener('mousedown', colorChanger);
        grid.insertAdjacentElement('beforeend', square);
    }
}


setupSketchPad(16);

function colorChanger(e) {
    if (e.type == 'mouseover'){
        this.style.backgroundColor = 'black';
    }
}

