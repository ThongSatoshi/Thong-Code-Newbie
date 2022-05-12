class Board {
    constructor(size) {
        this.size = size;
        this.boardArr = [];
        for (i = 0; i < limit; i++) {
            boardArr.push([]);
            for (j = 0; j < limit; j++) {
                boardArr[i].push(emptyValue);
            };
        };
    };

    getBoardSize() {
        return this.size;
    };

    getBoardArr() {
        return this.boardArr;
    };

    // Kiểm tra xem ai thắng - Check who is the winner?
    checkWinner() {
        for (let i = 0; i < this.size - 4; i++) {
            for (let j = 0; j < this.size - 4; j++) {
                for (let count = 1; count <= limit; count++) {
                    //Check hàng ngang - Horizontally checking
                    if (this.boardArr[i][j] == this.boardArr[i][j + count] &&
                        this.boardArr[i][j] != emptyValue) {
                            isWinning = true;
                            return this.boardArr[i][j];
                    } else if (
                        // Check hàng dọc - Vertically checking
                        this.boardArr[i][j] == this.boardArr[i + count][j] &&
                        this.boardArr[i][j] != emptyValue) {
                            isWinning = true;
                            return this.boardArr[i][j];
                    } else if (
                        // Check hàng chéo từ trái sang phải - From Left to Right checking
                        this.boardArr[i][j] == this.boardArr[i + count][j + count] &&
                        this.boardArr[i][j] != emptyValue) {
                            isWinning = true;
                            return this.boardArr[i][j];
                    } else if (
                        i >= 4 &&
                        // Check hàng chéo từ phải sang trái - From Right to Left checking
                        this.boardArr[i][j] == this.boardArr[i - count][j + count] &&
                        this.boardArr[i][j] != emptyValue) {
                            isWinning = true;
                            return this.boardArr[i][j];
                    } else {
                        return emptyValue;
                    };
                };
            };
        };
    };

    drawOnBoard(x, y, mark) {
        this.boardArr[x][y] = mark;
    };

    displayBoard() {
        i = 0, j = 0;
        let row = 1, col = 1;
        let grid = "<table border='1px white' height='400px' width='400px' cellspacing='0' cellpadding='10px' stye='font-size:30px' style='text-align:center'>";
        while (row <= limit || i < this.boardArr.length) {
            grid += "<tr>";
            while (col <= limit || j < this.boardArr[i].length) {
                if (this.boardArr[i][j] != emptyValue) {
                    grid += "<td> <button disabled id=\"cell-" + i + "-" + j + "\" onclick=\"turnCount(" + i + "," + j + ");\">" + this.boardArr[i][j] + "</button></td>";
                } else {
                    grid += "<td> <button id=\"cell-" + i + "-" + j + "\" onclick=\"turnCount(" + i + "," + j + ");\">" + this.boardArr[i][j] + "</button></td>";
                };
                col++, j++;
            };
            grid += "</tr>";
            col = 1, j = 0, row++, i++;
        };
        grid += "</table>";
        board.innerHTML = grid;
    };
};