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
    player1Name = prompt("Hãy nhập tên người chơi thứ nhất");
    while (player1Name.length == 0 || player1Name.length > 30) {
        alert("Tên người dùng không hợp lệ! Vui lòng nhập lại sau");
        player1Name = prompt("Hãy nhập tên người chơi thứ nhất");
    };
    player2Name = prompt("Hãy nhập tên người chơi thứ hai");
    while (player2Name.length == 0 || player2Name.length > 30 || player2Name === player1Name) {
        alert("Tên người dùng không hợp lệ! Vui lòng nhập lại sau");
        player2Name = prompt("Hãy nhập tên người chơi thứ nhất");
    };
    isWinning = false;
    playAudio();
};

function askBoardLimit() {
    limit = parseInt(prompt("Bạn muốn bàn cờ caro to cỡ bao nhiêu? (3-4-5)" + "\n" + "Khuyến khích chọn cỡ bàn cờ 5"));
    while (isNaN(limit) || limit < 3 || limit > 5) {
        alert("Kích cỡ bàn cờ Caro không được nhỏ hơn 3 và lớn hơn 5");
        limit = parseInt(prompt("Bạn muốn bàn cờ caro to cỡ bao nhiêu? (3-4-5)" + "\n" + "Khuyến khích chọn cỡ bàn cờ 5"));
    };
    return limit;
};

function turnCount() {
    if (isWinning == true) {
        turnCounter.innerHTML = "Ván chơi đã kết thúc";
    } else {
        if (isChangeValue == true) {
            if (turn % 2 == 0) {
                alert("Tới lượt đội ✕");
                team = "O";
                document.getElementById("player1").style.color = "rgb(255,0,0)";
            } else {
                alert("Tới lượt đội 〇");
                team = "X";
                document.getElementById("player1").style.color = "rgb(0,0,255)";
            };
            turn++;
            turnCounter.innerHTML = "Số lượt hiện tại: " + turn;
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
    let askReset = confirm("Bạn có muốn chơi lại từ đầu?");
    if (askReset == true) {
        playBoard.getBoardArr();
        for (i = 0; i < playBoard.getBoardSize(); i++) {
            for (j = 0; j < boardArr[i].length; j++) {
                [i].splice(j, 1, " ");
            };
        };
        reset++;
        isWinning = false, isDelete = true;
        playBoard.displayBoard();
        playAudio();
        turnCounter.innerHTML = "Số lượt hiện tại: 0 (chưa bắt đầu). Số lần đã reset: " + reset;
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