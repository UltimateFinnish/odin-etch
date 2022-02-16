let container = document.querySelector(".grid-container");
function createCells(size) {
    for (i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.addEventListener("mouseover", changeColor);
        container.appendChild(cell);
        // cell.addEventListener("mouseout", changeBack)
    }
}

createCells();

function changeColor(e) {
    e.target.style = "background-color: red";
}

let btn = document.querySelector(".reset");
btn.addEventListener("click", resetGrid);


function resetGrid(){
    let allTiles = document.querySelectorAll(".cell");
    allTiles.forEach(element => {
        element.removeAttribute("style");
    });
    let cont = document.querySelector(".grid-container");
    cont.setAttribute("style", "grid-template:repeat(2, 20px) / repeat(2, 20px");
    createCells(2);
};