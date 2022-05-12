let turnCounter = document.getElementById("turnCounter");
let winnerName = document.getElementById("winnerName");
let board = document.getElementById("board"); let boardArr = [];
let i, j, count, turn = 0, reset = 0, team, limit;
let isChangeValue, isDelete, isWinning;
let player1Name = "", player2Name = "";
let emptyValue = "";
function setFalse() {
    return isChangeValue = isDelete = isWinning = false;
};

function askUsername() {
    player1Name = prompt("Please input player 1's name");
    while (player1Name.length == 0 || player1Name.length > 30) {
        alert("Invalid username! Please try again");
        player1Name = prompt("Please input player 1's name again");
    };
    player2Name = prompt("Please input player 2's name");
    while (player2Name.length == 0 || player2Name.length > 30 || player2Name === player1Name) {
        alert("Invalid username! Please try again");
        player2Name = prompt("Please input player 2's name again");
    };
    isWinning = false;
    playAudio();
};

function askBoardLimit() {
    limit = parseInt(prompt("Which is your favorable board size? (3-4-5)" + "\n" + "5 is the recommended size for our game"));
    while (isNaN(limit) || limit < 3 || limit > 5) {
        alert("Only size in the range from 3 to 5 are allowed! Please try again");
        limit = parseInt(prompt("Which is your favorable board size? (3-4-5)" + "\n" + "5 is the recommended size for our game"));
    };
    return limit;
};

function turnCount() {
    if (isWinning == true) {
        turnCounter.innerHTML = "The game is already over! Please click 'Reset Game' to play again";
    } else {
        if (isChangeValue == true) {
            if (turn % 2 == 0) {
                alert("It's ✕ team turn");
                team = "O";
                document.getElementById("player1").style.color = "rgb(255,0,0)";
            } else {
                alert("It's 〇 team turn");
                team = "X";
                document.getElementById("player1").style.color = "rgb(0,0,255)";
            };
            turn++;
            turnCounter.innerHTML = turn + " turn(s) left";
            isChangeValue = false;
        };
    };
};

let playBoard, player1, player2;

function startGame() {
    playBoard = new Board(limit);
    player1 = new Player(player1Name, "O");
    player2 = new Player(player2Name, "X");
    player1.setBoard(playBoard);
    player2.setBoard(playBoard);
    playBoard.displayBoard();
    turnCount();
};

function resetGame() {
    let askReset = confirm("Do you want to reset the whole game?");
    if (askReset == true) {
        playBoard.getBoardArr();
        for (i = 0; i < limit; i++) {
            boardArr.push([]);
            for (j = 0; j < limit; j++) {
                boardArr[i].push(emptyValue);
            };
        };
        playBoard.displayBoard();
        reset++;
        isWinning = false, isDelete = true;
        playBoard.displayBoard();
        playAudio();
        turnCounter.innerHTML = "0 turn(s) left. The game haven't started yet, reset attempt(s): " + reset;
    };
};

function playAudio() {
    sound1 = document.getElementById("sound1");
    sound2 = document.getElementById("sound2");
    sound3 = document.getElementById("sound3");
    sound4 = document.getElementById("sound4");

    if (isWinning == false) {
        sound1.volume = 0.25;
        sound1.loop = !isWinning;
        sound1.play();
    };
    if (isChangeValue == true) {
        sound2.volume = 1;
        sound2.play();
    } else if (isDelete == true) {
        sound3.volume = 1;
        sound3.play();
    } else if (isWinning == true) {
        sound4.volume = 1;
        sound4.play();
    };
};