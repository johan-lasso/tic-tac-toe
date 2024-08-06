const startBtn = document.getElementById("start-btn");
const themeBtn = document.getElementById("theme-btn");
const board = document.getElementById("board");
const menu = document.getElementById("menu");

let currentPlayer = 'X';

startBtn.addEventListener("click", () => {
    menu.setAttribute("visible", "false"); 
    menu.addEventListener("animationend", () => {
        board.setAttribute("visible", "true");
        board.style.display = "flex ";

        menu.style.display = "none";
    });
});

