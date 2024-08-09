let currentPlayer = 'X';

const grid = ["","","","","","","","",""];

const startBtn = document.getElementById("start-btn");
const themeBtn = document.getElementById("theme-btn");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

const board = document.getElementById("board");
const menu = document.getElementById("menu");
const theme = document.getElementById("theme");

const cells = document.querySelectorAll(".cell");
const player = document.getElementById("current-player");

function transition(button, outElement, inElement) {
    button.addEventListener("click", () => {
        outElement.setAttribute("visible", "false");

        outElement.addEventListener("animationend", () => {
            inElement.setAttribute("visible", "true");
            inElement.style.display = "flex ";
    
            outElement.style.display = "none";
        });
    });
}

darkBtn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "dark");
});

lightBtn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "light");
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

startGame();

transition(startBtn, menu, board);
transition(themeBtn, menu, theme);