let currentPlayer = 'X';

const grid = ["","","","","","","","",""];

const startBtn = document.getElementById("start-btn");
const themeBtn = document.getElementById("theme-btn");
const board = document.getElementById("board");
const menu = document.getElementById("menu");
const cells = document.querySelectorAll(".cell");
const player = document.getElementById("current-player");

startBtn.addEventListener("click", () => {
    menu.setAttribute("visible", "false"); 

    // When the popout animation ends the board appears
    menu.addEventListener("animationend", () => {
        board.setAttribute("visible", "true");
        board.style.display = "flex ";

        menu.style.display = "none";
    });

    startGame();
});

function startGame() {
    cells.forEach(cell => cell.addEventListener("click", fillCell)); // fillCell callback

    player.textContent = currentPlayer;
}

function fillCell() {
    const desiredIndex = this.getAttribute("data-index");

    // If the cell is not empty do nothing
    if(grid[desiredIndex] != "") {
        return;
    }

    updateCell(this, desiredIndex)

    currentPlayer = (currentPlayer === 'X')? 'O' : 'X';

    player.textContent = currentPlayer;
}  

function updateCell(cell, cellIndex) {
    grid[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
}   