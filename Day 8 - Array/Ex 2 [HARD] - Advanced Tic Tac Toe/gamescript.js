let turnCounter = document.getElementById("turnCounter");
let winnerName = document.getElementById("winnerName");
let board = document.getElementById("board");
let boardArr = [];
let i, j, turn = 0, team, coord;
let player1 = "", player2 = "";
let isChangeValue = false, isWinning = false;
let limit = parseInt(prompt("Bạn muốn bàn cờ caro to cỡ bao nhiêu? (3-4-5)"));
while (isNaN(limit) || limit < 3 || limit > 5) {
    alert("Kích cỡ bàn cờ Caro không được nhỏ hơn 3 và lớn hơn 5");
    limit = parseInt(prompt("Bạn muốn bàn cờ caro to cỡ bao nhiêu? (3-4-5)"));
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
    let grid = "<table border='1px' height='400px' width='400px' cellspacing='0' cellpadding='10px' stye='font-size:30px' style='text-align:center'>";
    while (row <= limit || i < boardArr.length) {
        grid = grid + "<tr>";
        while (col <= limit || j < boardArr[i].length) {
            grid = grid + "<td>" + boardArr[i][j] + "</td>";
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
    while (player2.length == 0 || player2.length > 30) {
        alert("Tên người dùng không hợp lệ! Vui lòng nhập lại sau");
        player2 = prompt("Hãy nhập tên người chơi thứ nhất");
    };
};

function turnCount() {
    if (isWinning == true) {
        turnCounter.innerHTML = "Ván chơi đã kết thúc";
    } else {
        if (isChangeValue == true) {
            if (turn % 2 == 0) {
                team = "O";
            } else {
                team = "X";
            };
            turn++;
            turnCounter.innerHTML = "Số lượt hiện tại: " + turn;
            isChangeValue = false;
        };
        // rowcolCheck();
        // diagonalCheck();
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
    isChangeValue = true;
    turnCount();
    coordCal(coord);

    if (isWinning == true) {
        alert("Không thể thực thi lệnh! Ván chơi đã kết thúc");
    } else {
        switch (team) {
            case "O":
                boardArr[i].splice(j, 1, "O");
                displayBoard();
                break;
            case "X":
                boardArr[i].splice(j, 1, "X");
                displayBoard();
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
    turnCount();
    coordCal();

    if (isWinning == true) {
        alert("Không thể thực thi lệnh! Ván chơi đã kết thúc");
    } else {
        switch (team) {
            case "O":
                boardArr[i].splice(j, 1, " ");
                displayBoard();
                break;
            case "X":
                boardArr[i].splice(j, 1, " ");
                displayBoard();
                break;
        };
    };
};

function rowcolCheck() {
    for (i = 0; i < boardArr.length;) {
        for (j = 0; j < boardArr[i].length;) {
            if (boardArr[i][j] === "O" || boardArr[i][j] === "X") {
                if (boardArr[i][j] === boardArr[i][j + 1]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            break;
                    };
                } else {
                    i++;
                };
                j++;
            } else {
                i++;
                j++;
            };

            if (boardArr[i][j] === "O" || boardArr[i][j] === "X") {
                if (board[i][j] === boardArr[i + 1][j]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            break;
                    };
                } else {
                    j++;
                };
                i++;
            } else {
                i++;
                j++;
            };
        };
    };
};

function diagonalCheck() {
    for (i = 0; i < boardArr.length;) {
        for (j = 0; j < boardArr[i].length;) {
            if (boardArr[i][j] === "O" || boardArr[i][j] === "X") {
                if (boardArr[i][j] == boardArr[i + 1][j + 1]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            break;
                    };
                } else {
                    i++;
                };
                j++;
            } else {
                i++;
                j++;
            };
        };
    };

    for (i = 0; i < boardArr.length;) {
        for (j = boardArr[i].length - 1; j >= 0;) {
            if (boardArr[i][j] === "O" || boardArr[i][j] === "X") {
                if (boardArr[i][j] == boardArr[i + 1][j - 1]) {
                    switch (boardArr[i][j]) {
                        case "O":
                            isWinning = true;
                            alert("Chúc mừng " + player1 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player1;
                            break;
                        case "X":
                            isWinning = true;
                            alert("Chúc mừng " + player2 + " đã thắng cuộc!!");
                            winnerName.innerHTML = "〇 đi trước, ✕ đi sau. Người chiến thắng là: " + player2;
                            break;
                    };
                } else {
                    i++;
                };
                j--;
            } else {
                i++;
                j--;
            };
        };
    };
};