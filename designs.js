// Select color input element
const color = document.getElementById('color_picker');

// Select size input element
const sizePickerForm = document.getElementById('size_picker');

// Create variables to hold height and width
let gridHeight;
let gridWidth;

// When the user chooses a grid size and clicks submit, do this
sizePickerForm.addEventListener('submit', e => {
    e.preventDefault();
    gridHeight = document.getElementById('input_height').value;
    gridWidth = document.getElementById('input_width').value;
    makeGrid();
});

// Select canvas element
const pixelCanvas = document.getElementById('pixel_canvas');

// Make a grid/table to hold the cells that you can color by clicking on them
function makeGrid() {
    let tableCell = "<tbody>";
    for(let i = 0; i < gridHeight; i++){
        tableCell += "<tr>";
        let j = 0;
        while(j < gridWidth){
            tableCell += "<td></td>";
            j++;
        }
        tableCell += "</tr>";
    }
    tableCell += "</tbody>";
    pixelCanvas.innerHTML = tableCell;
}

// When the user clicks a cell, color it
pixelCanvas.addEventListener('click', e => {
    if(e.target.tagName == 'TD'){
        e.target.style.backgroundColor = color.value;
    }
});
