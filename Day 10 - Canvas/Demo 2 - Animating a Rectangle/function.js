let smallBoatX = 200, smallBoatY = 0, bigBoatX = 380, bigBoatY = 300,
    smallBoatWidth = smallBoatHeight = 100, bigBoatWidth = 100, bigBoatHeight = 200;
let smallBoatA = new Boat(smallBoatX, smallBoatY, smallBoatWidth, smallBoatHeight, 5, "rgb(190,190,190)"),
    smallBoatB = new Boat(smallBoatX + 350, smallBoatY, smallBoatWidth, smallBoatHeight, 5, "rgb(190,190,190)");
let bigBoatA = new Boat(bigBoatX, bigBoatY, bigBoatWidth, bigBoatHeight, 3, "rgb(192,192,192)"),
    bigBoatB = new Boat(bigBoatX + 350, bigBoatY, bigBoatWidth, bigBoatHeight, 3, "rgb(192,192,192)");
let player = new Player(50, 250, 30, 10, "rgb(255, 233, 220)");
drawBackground(), drawSmallBoat(), drawBigBoat(), drawPlayer();

// Reset lại canvas
function resetCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
};

function drawBackground() {
    // Vẽ background
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = water;
    context.fill();

    // Vẽ địa hình
    context.beginPath();
    context.fillStyle = grass;
    context.fillRect(0, 0, 100, 100);

    context.beginPath();
    context.fillStyle = dirtPath;
    context.fillRect(0, 100, 100, 300);

    context.beginPath();
    context.fillStyle = grass;
    context.fillRect(0, 400, 100, 100);

    context.beginPath();
    context.fillStyle = grass;
    context.fillRect(940, 0, 100, 100);

    context.beginPath();
    context.fillStyle = dirtPath;
    context.fillRect(940, 100, 100, 300);

    context.beginPath();
    context.fillStyle = grass;
    context.fillRect(940, 400, 100, 100);
};

function drawSmallBoat() {
    // Vẽ chướng ngại vật (Thuyền nhỏ)
    context.beginPath();
    context.fillStyle = smallBoatA.boatColor;
    context.fillStyle = smallBoatB.boatColor;
    context.fillRect(smallBoatA.boatX, smallBoatA.boatY, smallBoatA.boatWidth, smallBoatA.boatHeight);
    context.fillRect(smallBoatB.boatX, smallBoatB.boatY, smallBoatB.boatWidth, smallBoatB.boatHeight);
    context.strokeRect(smallBoatA.boatX, smallBoatA.boatY, smallBoatA.boatWidth, smallBoatA.boatHeight);
    context.strokeRect(smallBoatB.boatX, smallBoatB.boatY, smallBoatB.boatWidth, smallBoatB.boatHeight);
};

function drawBigBoat() {
    // Vẽ chướng ngại vật (Thuyền bự)
    context.beginPath();
    context.fillStyle = bigBoatA.boatColor;
    context.fillStyle = bigBoatB.boatColor;
    context.fillRect(bigBoatA.boatX, bigBoatA.boatY, bigBoatA.boatWidth, bigBoatA.boatHeight);
    context.fillRect(bigBoatB.boatX, bigBoatB.boatY, bigBoatB.boatWidth, bigBoatB.boatHeight);
    context.strokeRect(bigBoatA.boatX, bigBoatA.boatY, bigBoatA.boatWidth, bigBoatA.boatHeight);
    context.strokeRect(bigBoatB.boatX, bigBoatB.boatY, bigBoatB.boatWidth, bigBoatB.boatHeight);
};

function drawPlayer() {
    //Vẽ người chơi
    context.beginPath();
    context.fillStyle = player.playerColor;
    context.arc(player.playerX, player.playerY, player.playerSize, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
};

// Kiểm tra xem game có đang chạy ko (có bấm nút start game bao giờ chưa)
startButton.addEventListener("click", function () {
    if (isRunning == true) {
        return alert("Error: The game is running. No need to press the 'Start game now!' button again!");
    } else {
        runGame();
        canvas.scrollIntoView(false);
        window.addEventListener("scroll", function () {
            canvas.scrollIntoView(false);
        });
    };
});

// Khởi tạo hoạt hình cho canvas
function runGame() {
    resetCanvas();
    isRunning = true;
    // Khởi tạo hoạt hình thuyền nhỏ
    function smallBoatAnimation() {
        if (smallBoatA.boatY < 0 || (smallBoatA.boatY + smallBoatA.boatHeight) > canvas.height) {
            smallBoatA.boatSpeed = -smallBoatA.boatSpeed;
        };
        if (smallBoatB.boatY < 0 || (smallBoatB.boatY + smallBoatB.boatHeight) > canvas.height) {
            smallBoatB.boatSpeed = -smallBoatB.boatSpeed;
        };
        smallBoatA.boatY += smallBoatA.boatSpeed;
        smallBoatB.boatY += smallBoatB.boatSpeed;
        drawSmallBoat();
    };

    // Khởi tạo hoạt hình thuyền bự
    function bigBoatAnimation() {
        if (bigBoatA.boatY < 0 || (bigBoatA.boatY + bigBoatA.boatHeight) > canvas.height) {
            bigBoatA.boatSpeed = -bigBoatA.boatSpeed;
        };
        if (bigBoatB.boatY < 0 || (bigBoatB.boatY + bigBoatB.boatHeight) > canvas.height) {
            bigBoatB.boatSpeed = -bigBoatB.boatSpeed;
        };
        bigBoatA.boatY -= bigBoatA.boatSpeed;
        bigBoatB.boatY -= bigBoatB.boatSpeed;
        drawBigBoat();
    };

    // Lặp các hàm cần thiết
    setInterval(drawBackground, frame);
    setInterval(smallBoatAnimation, frame);
    setInterval(bigBoatAnimation, frame);
    setInterval(drawPlayer, frame);
    setInterval(checkWinner, frame);
    setInterval(checkCollision, frame);
};

// Kiểm tra phím được ấn
var pressedKey;
window.addEventListener("keydown", function (event) {
    pressedKey = event.key;
    return playerMovement();
});

// Khởi tạo hoạt hình nhân vật
function playerMovement() {
    switch (pressedKey) {
        case "ArrowUp" || "W" || "w":
            player.playerY -= player.playerSpeed;
            break;
        case "ArrowDown" || "S" || "s":
            player.playerY += player.playerSpeed;
            break;
        case "ArrowLeft" || "A" || "a":
            player.playerX -= player.playerSpeed;
            break;
        case "ArrowRight" || "D" || "d":
            player.playerX += player.playerSpeed;
            break;
    };

    if (player.playerY <= player.playerSize) {
        player.playerY += player.playerSize;
    } else if ((player.playerY + player.playerSize) >= canvas.height) {
        player.playerY -= player.playerSize;
    };

    if (player.playerX <= player.playerSize) {
        player.playerX += player.playerSize;
    } else if ((player.playerX + player.playerSize) >= canvas.width) {
        player.playerX -= player.playerSize;
    };
};

// Reset tất cả về trạng thái ban đầu
resetButton.addEventListener("click", function () {
    let isReset = confirm("Do you want to leave this game now?");
    if (isReset == true) {
        isRunning = isWinning = false;
        return location.reload();
    };
});

// Kiểm tra xem nhân vật đã về đích?
function checkWinner() {
    if (isWinning == false) {
        if ((player.playerX + player.playerSize) > (940 + player.playerSize * 2)) {
            isWinning = true;
            alert("Congratulation. The soldier has crossed the river safely!");
            let isReset = confirm("Do you want to restart this game again?");
            if (isReset == true) {
                isRunning = isWinning = false;
                return location.reload();
            } else {
                return;
            };
        };
    };
};

// Kiểm tra xem nhân vật va chạm các thuyền?
function checkCollision() {
    if (isDead == false) {
        checkCollision_SmallBoat();
        checkCollision_BigBoat();

        // Kiểm tra xem nhân vật có va chạm thuyền nhỏ?
        function checkCollision_SmallBoat() {
            // Khai báo các biến tọa độ
            let distX = player.playerX, distY = player.playerY;
            
            let smallBoatA_Left = smallBoatA.smallBoatX,
                smallBoatA_Right = (smallBoatA.smallBoatX + smallBoatA.smallBoatWidth),
                smallBoatA_Top = smallBoatA.smallBoatY,
                smallBoatA_Bottom = (smallBoatA.smallBoatY + smallBoatA.smallBoatHeight);

            let smallBoatB_Left = smallBoatB.smallBoatX,
                smallBoatB_Right = (smallBoatB.smallBoatX + smallBoatB.smallBoatWidth),
                smallBoatB_Top = smallBoatB.smallBoatY,
                smallBoatB_Bottom = (smallBoatB.smallBoatY + smallBoatB.smallBoatHeight);
            
            // Chọn điểm đo tọa độ distX
            if (player.playerX < smallBoatA_Left && player.playerX < smallBoatB_Left) {
                distX = smallBoatA_Left;
            } else if (player.playerX > smallBoatA_Right && player.playerX > smallBoatB_Right) {
                distX = smallBoatB_Right;
            } else if (player.playerX > smallBoatA_Right) {
                var testA = smallBoatA_Right, testB = smallBoatB_Left
                if (testA < ((testA + testB) / 2)) {
                    distX = smallBoatA_Right;
                } else {
                    distX = smallBoatB_Left;
                };
            };

            // Chọn điểm đo tọa độ distY
            if (player.playerY < smallBoatA_Top && (distX == smallBoatA_Left || distX == smallBoatA_Right)) {
                distY = smallBoatA_Top;
            } else if (player.playerY > smallBoatA_Bottom && (distX == smallBoatA_Left || distX == smallBoatA_Right)) {
                distY = smallBoatA_Bottom;
            } else if (player.playerY < smallBoatB_Top && (distX == smallBoatB_Left || distX == smallBoatB_Right)) {
                distY = smallBoatB_Top;
            } else {
                distY = smallBoatB_Bottom;
            };

            let dX = player.playerX - distX;
            let dY = player.playerY - distY;

            // Kiểm tra va chạm (dùng định lí Pythagoras)
            if (Math.pow(dX, 2) + Math.pow(dY, 2) <= Math.pow(player.playerSize, 2)) {
                isDead = true;
                alert("Better luck next time. The soldier has been caught by the enemy's boat!");
                let isReset = confirm("Do you want to try again?");
                if (isReset == true) {
                    isRunning = isWinning = false;
                    return location.reload();
                } else {
                    return;
                };
            };
        };

        // Kiểm tra xem nhân vật có va chạm thuyền lớn?
        function checkCollision_BigBoat() {

        };
    };
};