// Constant value
const BOARD_SIZE = askBoardSize();

// Object
let playerArr = [(new Player(askUserName(), "O", "rgb(255,0,0)")), (new Player(askUserName(), "X", "rgb(0,0,255)"))];

// Global Value
let board = document.getElementById("board");
let turnCounter = document.getElementById("turnConuter");
let winnerName = document.getElementById("winnerName");
let i, j, turn = team = 0;
let boardArr = [];
for (i = 0; i < BOARD_SIZE; i++) {
    boardArr.push([]);
    for (j = 0; j < BOARD_SIZE; j++) {
        boardArr[i].push("");
        console.log(boardArr[i][j]);
    };
};

// Ask what board size does the user want
function askBoardSize() {
    let size = parseInt(prompt("Which is your favorable board size? (3 or 5)"));
    while (isNaN(size) || size != 3 && size != 5 || size == null) {
        alert("Invalid value! Please try again");
        size = parseInt(prompt("Please choose your favorable board size (only 3 or 5)"));
    };
    return size;
};

// Ask user what name they'd like to be called with
function askUserName() {
    let name = prompt("Please input player's name");
    while (name.length < 1 || name.length > 50 || name == null) {
        alert("Invalid name! Please try again");
        name = prompt("Please input player's name again");
    };
    return name;
};

// Counting turn
function turnCount() {
    turn++;
    if (turn %2 != 1) {
        team = 0;
        alert("It's team X turn!");
    } else {
        team = 1;
        alert("It's team O turn!");
    };
    turnCounter.innerHTML = "Turn(s) no." + turn;
};

// Display the game board
function displayBoard(size) {
    i = 0, j = 0;
    let row = col = 1;
    let grid = "<table border='1px solid white' height='400px' width='400px' cellspacing='0' cellpadding='10px' stye='font-size:30px' style='text-align:center'>";
    while (row <= size && i < boardArr.length) {
        grid += "<tr>";
        while (col <= size && j < boardArr[i].length) {
            if (boardArr[i][j] != "") {
                grid += "<td id='cell'><button id='cellBtn' disabled onclick='interactBoard(" + i + "," + j + ")'" + boardArr[i][j] + "</button></td>";
            } else {
                grid += "<td id='cell'><button id='cellBtn' onclick='interactBoard(" + i + "," + j + ")'>" + boardArr[i][j] + "</button></td>";
            };
            col++, j++;
        };
        grid += "</tr>";
        col = 1, j = 0, row++, i++;
    };
    grid += "</table>";
    board.innerHTML = grid;
};

// Execute these following functions when clicked
function interactBoard(x, y) {
    turnCount();
    drawOnBoard(x, y, team);
};
// 1. Draw the symbol on board
function drawOnBoard(x, y, team) {
    switch (playerArr[team]) {
        case 0:
            boardArr[x][y].splice(y, 1, "O");
            document.getElementById("player1").style.color = playerArr[team].color;
            displayBoard();
            break;
        case 1:
            boardArr[x][y].splice(y, 1, "X");
            document.getElementById("player1").style.color = playerArr[team].color;
            displayBoard();
            break;
    };
};

// Start the game
function startGame() {
    if (turn == 0) {
        displayBoard(BOARD_SIZE);
    } else {
        alert("The game is currently running");
    };
};

// Reset the game
function resetGame() {

};