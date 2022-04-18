let turnCounter = document.getElementById("turnCounter");
let winnerName = document.getElementById("winnerName");
let board = document.getElementById("board");
let boardArr = [];
let i, j, turn = 0, reset = 0, team, coord, preCoord;
let player1 = "", player2 = "";
let isChangeValue = false, isDelete = false, isWinning;
let limit = parseInt(prompt("Bạn muốn bàn cờ caro to cỡ bao nhiêu? (3-4-5)" + "\n" + "Khuyến khích chọn cỡ bàn cờ 5"));
while (isNaN(limit) || limit < 3 || limit > 5) {
    alert("Kích cỡ bàn cờ Caro không được nhỏ hơn 3 và lớn hơn 5");
    limit = parseInt(prompt("Bạn muốn bàn cờ caro to cỡ bao nhiêu? (3-4-5)" + "\n" + "Khuyến khích chọn cỡ bàn cờ 5"));
};
for (i = 0; i < limit; i++) {
    boardArr.push([]);
    for (j = 0; j < limit; j++) {
        boardArr[i].push(" ");
    };
};

function displayBoard() {
    i = 0, j = 0;
    let row = col = 1;
    let grid = "<table border='1px white' height='400px' width='400px' cellspacing='0' cellpadding='10px' stye='font-size:30px' style='text-align:center'>";
    while (row <= limit || i < boardArr.length) {
        grid = grid + "<tr>";
        while (col <= limit || j < boardArr[i].length) {
            grid = grid + "<td class='cell'>" + boardArr[i][j] + "</td>";
            col++;
            j++;
        };
        grid = grid + "</tr>";
        col = 1;
        row++;
        j = 0;
        i++;
    };
    grid = grid + "</table>";
    board.innerHTML = grid;
};

function askUsername() {
    player1 = prompt("Hãy nhập tên người chơi thứ nhất");
    while (player1.length == 0 || player1.length > 30) {
        alert("Tên người dùng không hợp lệ! Vui lòng nhập lại sau");
        player1 = prompt("Hãy nhập tên người chơi thứ nhất");
    };
    player2 = prompt("Hãy nhập tên người chơi thứ hai");
    while (player2.length == 0 || player2.length > 30 || player2 === player1) {
        alert("Tên người dùng không hợp lệ! Vui lòng nhập lại sau");
        player2 = prompt("Hãy nhập tên người chơi thứ nhất");
    };
    isWinning = false;
    playAudio();
};

function turnCount() {
    if (isWinning == true) {
        turnCounter.innerHTML = "Ván chơi đã kết thúc";
    } else {
        if (isChangeValue == true) {
            if (turn % 2 == 0) {
                alert("Tới lượt đội ✕");
                team = "O";
            } else {
                alert("Tới lượt đội 〇");
                team = "X";
            };
            turn++;
            turnCounter.innerHTML = "Số lượt hiện tại: " + turn;
            isChangeValue = false;
        };
        //checkWinning();
    };
};

function coordCal(coord) {
    if (isWinning == false) {
        i = parseInt((coord - 1) / limit);
        j = (coord - 1) % limit;
    };
};

function changeValue() {
    coord = parseInt(prompt("Vui lòng nhập tọa độ ô bạn muốn đánh dấu"));
    while (isNaN(coord) || coord < 1 || coord > Math.pow(limit, 2) || coord == null) {
        alert("Lưu ý! Hệ thống chỉ ghi nhận các tọa độ từ 1 đến " + Math.pow(limit, 2));
        coord = parseInt(prompt("Vui lòng nhập tọa độ bạn muốn đánh dấu"));
    };
    while (preCoord == coord) {
        alert("Tọa độ lượt tiếp theo không được trùng với ô đối thủ đã đánh dấu!");
        coord = parseInt(prompt("Vui lòng nhập tọa độ bạn muốn đánh dấu"));
    };
    isChangeValue = true;
    playAudio();
    turnCount();
    coordCal(coord);

    if (isWinning == true) {
        alert("Không thể thực thi lệnh! Ván chơi đã kết thúc");
    } else {
        switch (team) {
            case "O":
                boardArr[i].splice(j, 1, "O");
                displayBoard();
                preCoord = coord;
                break;
            case "X":
                boardArr[i].splice(j, 1, "X");
                displayBoard();
                preCoord = coord;
                break;
        };
    };
};

function deleteValue() {
    coord = parseInt(prompt("Vui lòng nhập tọa độ ô bạn muốn xóa"));
    while (isNaN(coord) || coord < 1 || coord > Math.pow(limit, 2) || coord == null) {
        alert("Lưu ý! Hệ thống chỉ ghi nhận các tọa độ từ 1 đến " + Math.pow(limit, 2));
        coord = parseInt(prompt("Vui lòng nhập tọa độ bạn muốn xóa"));
    };
    isDelete = true;
    playAudio();
    turnCount();
    coordCal(coord);

    if (isWinning == true) {
        alert("Không thể thực thi lệnh! Ván chơi đã kết thúc");
    } else {
        switch (team) {
            case "O":
                boardArr[i].splice(j, 1, " ");
                displayBoard();
                isDelete = false;
                break;
            case "X":
                boardArr[i].splice(j, 1, " ");
                displayBoard();
                isDelete = false;
                break;
        };
    };
};

function resetGame() {
    let askReset = confirm("Bạn có muốn chơi lại từ đầu?");
    if (askReset == true) {
        for (i = 0; i < boardArr.length; i++) {
            for (j = 0; j < boardArr[i].length; j++) {
                boardArr[i].splice(j, 1, " ");
            };
        };
        reset++;
        isWinning = false, isDelete = true;
        displayBoard();
        playAudio();
        turnCounter.innerHTML = "Số lượt hiện tại: 0 (chưa bắt đầu). Số lần đã reset: " + reset;
    };
};

function checkWinning() {
    rowcolCheck();
    leftCheck();
    rightCheck();
}

function rowcolCheck() {
    i = 0, j = 0;
    if (boardArr[i][j] == "O" || boardArr[i][j] == "X") {
        while (i < boardArr.length) {
            while (j < boardArr[i].length) {
                if (boardArr[i][j] === boardArr[i][j + 1]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            playAudio();
                            turnCount();
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            playAudio();
                            turnCount();
                            break;
                    };
                } else {
                    i++;
                };
                j++;
                break;
            };

            if (boardArr[i][j] !== "O" && boardArr[i][j] !== "X") {
                i++;
                j++;
            } else {
                if (boardArr[i][j] === boardArr[i + 1][j]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            playAudio();
                            turnCount();
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            playAudio();
                            turnCount();
                            break;
                    };
                } else {
                    j++;
                    break;
                };
                i++;
            };
        };
    };
};

function leftCheck() {
    i = 0, j = 0;
    while (i < boardArr.length) {
        while (j < boardArr[i].length) {
            if (boardArr[i][j] !== "O" && boardArr[i][j] !== "X") {
                i++;
                j++;
            } else {
                if (boardArr[i][j] == boardArr[i + 1][j + 1]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            playAudio();
                            turnCount();
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            playAudio();
                            turnCount();
                            break;
                    };
                } else {
                    i++;
                };
                j++;
            };
        };
    };
};

function rightCheck() {
    i = 0, j = boardArr[i].length - 1;
    while (i < boardArr.length) {
        while (j >= 0) {
            if (boardArr[i][j] !== "O" && boardArr[i][j] !== "X") {
                i++;
                j--;
            } else {
                if (boardArr[i][j] == boardArr[i + 1][j - 1]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            playAudio();
                            turnCount();
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            playAudio();
                            turnCount();
                            break;
                    };
                } else {
                    i++;
                };
                j--;
            };
        };
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