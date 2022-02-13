function createCells(size) {
    let container = document.querySelector(".container");
    for (i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.addEventListener("mouseover", changeColor);
        container.appendChild(cell);
    }
}

createCells(16);

function changeColor(e) {
    e.target.style = "background-color: red";
}