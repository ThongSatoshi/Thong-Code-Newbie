let smallBoatA = new Boat(smallBoatX, smallBoatY, smallBoatWidth, smallBoatHeight, 9, "rgb(190,190,190)"),
    smallBoatB = new Boat(smallBoatX + 350, smallBoatY, smallBoatWidth, smallBoatHeight, 7, "rgb(190,190,190)");
let bigBoatA = new Boat(bigBoatX, bigBoatY, bigBoatWidth, bigBoatHeight, 6, "rgb(192,192,192)"),
    bigBoatB = new Boat(bigBoatX + 350, bigBoatY, bigBoatWidth, bigBoatHeight, 4);
let player = new Player(50, 250, 30, 3, "rgb(255, 233, 220)");
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

    // Kiểm tra phím được ấn
    var pressedKey;
    window.addEventListener("keydown", function (event) {
        return pressedKey = event.key;
        playerMovement();
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

        drawPlayer();
    };

    // Lặp các hàm cần thiết
    setInterval(drawBackground, frame);
    setInterval(smallBoatAnimation, frame);
    setInterval(bigBoatAnimation, frame);
    setInterval(playerMovement, frame);
    // setInterval(isWinning, 1000);
    // setInterval(isDead, 1000);
};

// Reset tất cả về trạng thái ban đầu
resetButton.addEventListener("click", function () {
    let isReset = confirm("Do you want to leave this game now?");
    if (isReset == true) {
        isRunning = isWinning = false;
        return location.reload();
    };
});

// // Kiểm tra xem nhân vật đã về đích?
// function isWinning() {

// };

// // Kiểm tra xem nhân vật va chạm các thuyền?
// function isDead() {

// };