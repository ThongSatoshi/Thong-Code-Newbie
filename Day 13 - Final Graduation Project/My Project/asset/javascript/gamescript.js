// Constant value
const BOARD_SIZE = askBoardSize();

// Object
let playerArr = [(new Player(askUserName(), "O", "rgb(255,0,0)")), (new Player(askUserName(), "X", "rgb(0,0,255)"))];

// Global Value
let board = document.getElementById("board");
let turnCounter = document.getElementById("turnCounter");
let winnerName = document.getElementById("winnerName");
let i, j, count, turn = 0, team, isWinning = false;
let boardArr = [];
for (i = 0; i < BOARD_SIZE; i++) {
    boardArr.push([]);
    for (j = 0; j < BOARD_SIZE; j++) {
        boardArr[i].push("");
        // console.log(boardArr[i][j]);
    };
};
let cellNumArr = [];
for (i = 1; i <= Math.pow(BOARD_SIZE, 2); i++) {
    let str = "";
    str += "cellNo" + i;
    cellNumArr.push(str);
    // console.log(cellNumArr[i - 1]);
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

// Display the game board
function displayBoard(size) {
    i = j = n = 0;
    let row = col = 1;
    let grid = "<table border='1px solid white' height='400px' width='400px' cellspacing='0' cellpadding='10px' stye='font-size:30px' style='text-align:center'>";
    while (row <= size || i < boardArr.length) {
        grid += "<tr>";
        while (col <= size || j < boardArr[i].length) {
            if (boardArr[i][j] != "") {
                grid += "<td id='cell'><button class='cellBtn' id='cellNo" + cellNumArr[n] + "' disabled>" + boardArr[i][j] + "</button></td>";
            } else {
                grid += "<td id='cell'><button class='cellBtn' id='cellNo" + cellNumArr[n] + "' onclick='interactBoard(" + i + "," + j + ")'>" + boardArr[i][j] + "</button></td>";
            };
            col++, j++, n++;
        };
        grid += "</tr>";
        col = 1, j = 0, row++, i++;
    };
    grid += "</table>";
    board.innerHTML = grid;
};

// 1. Counting turn
function turnCount() {
    if (turn % 2 == 0) {
        team = 0;
        turnCounter.innerHTML = "Turn(s) no." + turn + ". Next is team " + playerArr[team + 1].symbol + "'s turn!";
    } else {
        team = 1;
        turnCounter.innerHTML = "Turn(s) no." + turn + ". Next is team " + playerArr[team - 1].symbol + "'s turn!";
    };
    turn++;
};

// 2. Draw the symbol on board
function drawOnBoard(x, y, team) {
    switch (team) {
        case 0:
            boardArr[x].splice(y, 1, playerArr[team].symbol);
            // document.getElementById("cellNo" + cellNumArr[x] + "'").style.color = playerArr[team].color;
            displayBoard(BOARD_SIZE);
            console.log(x, y, team, playerArr[team].color);
            break;
        case 1:
            boardArr[x].splice(y, 1, playerArr[team].symbol);
            // document.getElementById("cellNo" + cellNumArr[x] + "'").style.color = playerArr[team].color;
            displayBoard(BOARD_SIZE);
            console.log(x, y, team, playerArr[team].color);
            break;
    };
};

// 3. Checking who won the game
function checkWinner() {
    let count = 0;
    rowCheck(), colCheck();

    //Check horizontally
    function rowCheck() {
        for (i = 0; i <= BOARD_SIZE - 1; i++) {
            if (count == BOARD_SIZE) {
                isWinning = true;
                return winnerName.innerHTML = "Congratulation! Player '" + playerArr[team].name + "', in the team of " + playerArr[team].symbol + " has won the game!!";
            } else {
                for (j = 0; j <= BOARD_SIZE - 1; j++) {
                    if (boardArr[i][j] == boardArr[i][j + 1] && boardArr[i][j] != "") {
                        count++;
                    };
                };
            };
        };
    };

    //Check vertically
    function colCheck() {
        for (i = 0; i < BOARD_SIZE - 1; i++) {
            if (count == BOARD_SIZE) {
                isWinning = true;
                return winnerName.innerHTML = "Congratulation! Player '" + playerArr[team].name + "', in the team of " + playerArr[team].symbol + " has won the game!!";
            } else {
                for (j = 0; j < BOARD_SIZE - 1; j++) {
                    if (boardArr[i][j] == boardArr[i + 1][j] && boardArr[i][j] != "") {
                        count++;
                    };
                };
            };
        };
    };
};

// Execute these following statements (from 1 to ) when clicked
function interactBoard(x, y) {
    turnCount();
    drawOnBoard(x, y, team);
    checkWinner();

    if (isWinning == true) {
        setTimeout(function () {
            shutDownGame();
        }, 0);
        return;
    };

    if (turn >= Math.pow(BOARD_SIZE, 2)) {
        setTimeout(function () {
            return winnerName.innerHTML = "Congratulation, it's a draw match! Wanna duel once more time?";
        }, 0);
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

// Shut down the game
// function shutDownGame() {
//     if (isWinning == true) {
//         for (i = 0; i < BOARD_SIZE; i++) {
//             let str = "";
//             str += "cellNo" + cellNumArr[i];
//             document.getElementById(str).disabled = true;
//         };
//     };
// };

// Reset the game
function resetGame() {

};