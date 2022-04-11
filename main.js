const grid = document.querySelector(".grid-container");
let click = false;

function setupSketchPad(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorChanger);
        grid.insertAdjacentElement('beforeend', square);
    }
}


setupSketchPad(16);


function colorChanger() {
    document.querySelector('body').addEventListener('mousedown', ()=> click = true)
    document.querySelector('body').addEventListener('mouseup', () => click = false )
    if (click === true) {
        this.style.backgroundColor = 'black';
    }
}

//check if mouse is clicked AND mouseover
// if true, start drawing

/*


document.querySelector('body').addEventListener('click', ()=>{
    //if click = true set to false
    //if click = false set to true
    click = !click;
})
*/