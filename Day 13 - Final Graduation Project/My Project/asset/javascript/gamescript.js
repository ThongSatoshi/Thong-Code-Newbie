// Constant value
const BOARD_SIZE = askBoardSize();

// Object
let playerArr = [(new Player(askUserName(), "X", "rgb(255,0,0)")), (new Player(askUserName(), "O", "rgb(0,0,255)"))];

// Global Value
let board = document.getElementById("board")
let turnCounter = document.getElementById("turnCounter");
let winnerName = document.getElementById("winnerName");
let i, j, count, turn = 1, team, isWinning = false;
let boardArr = [];
for (i = 0; i < BOARD_SIZE; i++) {
    boardArr.push([]);
    for (j = 0; j < BOARD_SIZE; j++) {
        boardArr[i].push("");
        // console.log(boardArr[i][j]);
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

// Display the game board
function displayBoard(size) {
    i = j = 0;
    let row = col = 1;
    let grid = "<table id='myBoard' height='400px' width='400px' cellspacing='0' cellpadding='10px'>";
    while (row <= size || i < boardArr.length) {
        grid += "<tr>";
        while (col <= size || j < boardArr[i].length) {
            if (boardArr[i][j] != "") {
                grid += "<td id='cell'><button class='cellBtn' id='cellNo" + i + "-" + j + "' disabled>" + boardArr[i][j] + "</button></td>";
            } else {
                grid += "<td id='cell'><button class='cellBtn' id='cellNo" + i + "-" + j + "' onclick='interactBoard(" + i + "," + j + ")'>" + boardArr[i][j] + "</button></td>";
            };
            col++, j++;
        };
        grid += "</tr>";
        col = 1, j = 0, row++, i++;
    };
    grid += "</table>";
    board.innerHTML = grid;
};

// 1. Counting turn
function turnCount() {
    if (isWinning == false && turn % 2 != 0) {
        team = 1;
        turnCounter.innerHTML = "Turn(s) no." + turn + ". Next is team " + playerArr[team - 1].symbol + "'s turn!";
        turn++;
    } else if (isWinning == false && turn % 2 == 0) {
        team = 0;
        turnCounter.innerHTML = "Turn(s) no." + turn + ". Next is team " + playerArr[team + 1].symbol + "'s turn!";
        turn++;
    };
};

// 2. Draw the symbol on board
function drawOnBoard(x, y, team) {
    switch (team) {
        case 0:
            boardArr[x].splice(y, 1, playerArr[team].symbol);
            document.getElementById("cellNo" + x + "-" + y).style.color = playerArr[team].color;
            displayBoard(BOARD_SIZE);
            playAudio("click");
            console.log(x, y, team, playerArr[team].color);
            break;
        case 1:
            boardArr[x].splice(y, 1, playerArr[team].symbol);
            document.getElementById("cellNo" + x + "-" + y).style.color = playerArr[team].color;
            displayBoard(BOARD_SIZE);
            playAudio("click");
            console.log(x, y, team, playerArr[team].color);
            break;
    };
};

// 3. Checking who won the game
function checkWinner() {
    rowCheck(), colCheck(), leftSideCheck(), rightSideCheck();

    //Check horizontally
    function rowCheck() {
        for (i = 0; i < BOARD_SIZE; i++) {
            let count = 0;
            for (j = 0; j < BOARD_SIZE - 1; j++) {
                if (boardArr[i][j] == boardArr[i][j + 1] && boardArr[i][j] != "") {
                    count++;
                };
            };
            if (count == BOARD_SIZE - 1) {
                isWinning = true;
                playAudio("congrat");
                return winnerName.innerHTML = "Congratulation! Player '" + playerArr[team].name + "', in the team of " + playerArr[team].symbol + " has won the game!!";
            }
        };
    };

    //Check vertically
    function colCheck() {
        for (i = 0; i < BOARD_SIZE; i++) {
            let count = 0;
            for (j = 0; j < BOARD_SIZE - 1; j++) {
                if (boardArr[j][i] == boardArr[j + 1][i] && boardArr[j][i] != "") {
                    count++;
                };
            };
            if (count == BOARD_SIZE - 1) {
                isWinning = true;
                playAudio("congrat");
                return winnerName.innerHTML = "Congratulation! Player '" + playerArr[team].name + "', in the team of " + playerArr[team].symbol + " has won the game!!";
            }
        };
    };

    // Check diagonally from left to right
    function leftSideCheck() {
        let count = 0;
        for (i = 0; i < BOARD_SIZE - 1; i++) {
            if (boardArr[i][i] == boardArr[i + 1][i + 1] && boardArr[i][i] != "") {
                count++;
            };
            if (count == BOARD_SIZE - 1) {
                isWinning = true;
                playAudio("congrat");
                return winnerName.innerHTML = "Congratulation! Player '" + playerArr[team].name + "', in the team of " + playerArr[team].symbol + " has won the game!!";
            }
        };
    };

    // Check diagonally from right to left
    function rightSideCheck() {
        let count = 0;
        for (i = 0; i < BOARD_SIZE - 1; i++) {
            if (boardArr[BOARD_SIZE - i - 1][i] == boardArr[BOARD_SIZE - i - 2][i + 1] && boardArr[BOARD_SIZE - i - 1][i] != "") {
                count++;
            };
            if (count == BOARD_SIZE - 1) {
                isWinning = true;
                playAudio("congrat");
                return winnerName.innerHTML = "Congratulation! Player '" + playerArr[team].name + "', in the team of " + playerArr[team].symbol + " has won the game!!";
            }
        };
    };
};

// Execute these following statements (from 1 to 3) when clicked
function interactBoard(x, y) {
    turnCount();
    drawOnBoard(x, y, team);
    checkWinner();

    if (isWinning == true) {
        shutDownGame();
    };

    if (turn >= Math.pow(BOARD_SIZE, 2)) {
        setTimeout(function () {
            return winnerName.innerHTML = "Congratulation, it's a draw match! Wanna duel once more time?";
        }, 0);
    };
};

// Start the game
function startGame() {
    if (turn == 1) {
        displayBoard(BOARD_SIZE);
        for (i = 0; i < BOARD_SIZE; i++) {
            for (j = 0; j < BOARD_SIZE; j++) {
                document.getElementById("cellNo" + i + "-" + j).disabled = false;
            };
        };
        playAudio("startGame");
    } else if (turn != 1) {
        alert("The game is currently running");
    };
};

// Shut down the game
function shutDownGame() {
    for (i = 0; i < BOARD_SIZE; i++) {
        for (j = 0; j < BOARD_SIZE; j++) {
            document.getElementById("cellNo" + i + "-" + j).disabled = true;
        };
    };
};

// Reset the game
function resetGame() {
    let reset = 0, isReset = confirm("Do you want to reset the game?");
    if (isReset == true) {
        for (i = 0; i < BOARD_SIZE; i++) {
            for (j = 0; j < BOARD_SIZE; j++) {
                boardArr[i].splice(j, 1, " ");
            };
        };
        isWinning = false, turn = 1;
        reset++;
        displayBoard();
        playAudio("erase");
        let brandNew = confirm("Do you want to create a brand new game and start all over?");
        if (brandNew == true) {
            location.reload();
        } else {
            startGame();
        };
        turnCounter.innerHTML = "0 turn(s) left. The game has been reset " + reset + " time(s)";
        winnerName.innerHTML = "O first, X second. The champion is: ???";
    };
};

// Play SFX/BGM
function playAudio(track) {
    sound1 = document.getElementById("sound1");
    sound2 = document.getElementById("sound2");
    sound3 = document.getElementById("sound3");
    sound4 = document.getElementById("sound4");

    switch (track) {
        case "startGame":
            sound1.volume = 0.5;
            sound1.currentTime = 0;
            sound1.loop = !isWinning;
            sound4.pause();
            sound1.play();
            break;
        case "click":
            sound2.volume = 1;
            sound2.currentTime = 0;
            sound2.play();
            break;
        case "erase":
            sound3.volume = 1;
            sound3.currentTime = 0;
            sound1.pause();
            sound4.pause();
            sound3.play();
            break;
        case "congrat":
            sound4.volume = 1;
            sound4.currentTime = 0;
            sound1.pause();
            sound4.loop = isWinning;
            sound4.play();
            break;
    };
};