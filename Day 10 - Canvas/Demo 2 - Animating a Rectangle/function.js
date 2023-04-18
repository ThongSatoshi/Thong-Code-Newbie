// Kiểm tra phím được ấn
var pressedKey;
window.addEventListener("keydown", function (event) {
    pressedKey = event.key;
    return playerMovement();
});

// Khởi tạo hoạt hình nhân vật
function playerMovement() {
    switch (pressedKey) {
        case "ArrowUp":
            player.playerY -= player.playerSpeed;
            break;
        case "w":
            player.playerY -= player.playerSpeed;
            break;
        case "W":
            player.playerY -= player.playerSpeed;
            break;
        case "ArrowDown":
            player.playerY += player.playerSpeed;
            break;
        case "s":
            player.playerY += player.playerSpeed;
            break;
        case "S":
            player.playerY += player.playerSpeed;
            break;
        case "ArrowLeft":
            player.playerX -= player.playerSpeed;
            break;
        case "a":
            player.playerX -= player.playerSpeed;
            break;
        case "A":
            player.playerX -= player.playerSpeed;
            break;
        case "ArrowRight":
            player.playerX += player.playerSpeed;
            break;
        case "d":
            player.playerX += player.playerSpeed;
            break;
        case "D":
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

// Kiểm tra xem nhân vật đã về đích?
function checkWinner() {
    if (isWinning == false) {
        if ((player.playerX + player.playerSize) > (940 + player.playerSize * 2)) {
            isWinning = true;
            playAudio("congrat");
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
    if (isWinning == false) {
        if ((player.getPlayerX() + player.getPlayerSize() >= smallBoatA.getBoatX()) && (player.getPlayerX() + player.getPlayerSize() <= smallBoatA.getBoatX() + smallBoatA.getBoatWidth() + player.getPlayerSize() * 2)) {
            if ((player.getPlayerY() + player.getPlayerSize() >= smallBoatA.getBoatY()) && (player.getPlayerY() + player.getPlayerSize() <= smallBoatA.getBoatY() + smallBoatA.getBoatHeight() + player.getPlayerSize() * 2)) {
                // console.log("Collision with smallBoatA detected");
                playAudio("missionFailed");
                alert("Oh no. The soldier has got caught by the enemy!");
                let isReset = confirm("Do you want to try again?");
                if (isReset == true) {
                    isRunning = isWinning = false;
                    return location.reload();
                } else {
                    return;
                };
            };
        };

        if ((player.getPlayerX() + player.getPlayerSize() >= smallBoatB.getBoatX()) && (player.getPlayerX() + player.getPlayerSize() <= smallBoatB.getBoatX() + smallBoatB.getBoatWidth() + player.getPlayerSize() * 2)) {
            if ((player.getPlayerY() + player.getPlayerSize() >= smallBoatB.getBoatY()) && (player.getPlayerY() + player.getPlayerSize() <= smallBoatB.getBoatY() + smallBoatB.getBoatHeight() + player.getPlayerSize() * 2)) {
                // console.log("Collision with smallBoatB detected");
                playAudio("missionFailed");
                alert("Oh no. The soldier has got caught by the enemy!");
                let isReset = confirm("Do you want to try again?");
                if (isReset == true) {
                    isRunning = isWinning = false;
                    return location.reload();
                } else {
                    return;
                };
            };
        };

        if ((player.getPlayerX() + player.getPlayerSize() >= bigBoatA.getBoatX()) && (player.getPlayerX() + player.getPlayerSize() <= bigBoatA.getBoatX() + bigBoatA.getBoatWidth() + player.getPlayerSize() * 2)) {
            if ((player.getPlayerY() + player.getPlayerSize() >= bigBoatA.getBoatY()) && (player.getPlayerY() + player.getPlayerSize() <= bigBoatA.getBoatY() + bigBoatA.getBoatHeight() + player.getPlayerSize() * 2)) {
                //console.log("Collision with bigBoatA detected");
                playAudio("missionFailed");
                alert("Oh no. The soldier has got caught by the enemy!");
                let isReset = confirm("Do you want to try again?");
                if (isReset == true) {
                    isRunning = isWinning = false;
                    return location.reload();
                } else {
                    return;
                };
            };
        };

        if ((player.getPlayerX() + player.getPlayerSize() >= bigBoatB.getBoatX()) && (player.getPlayerX() + player.getPlayerSize() <= bigBoatB.getBoatX() + bigBoatB.getBoatWidth() + player.getPlayerSize() * 2)) {
            if ((player.getPlayerY() + player.getPlayerSize() >= bigBoatB.getBoatY()) && (player.getPlayerY() + player.getPlayerSize() <= bigBoatB.getBoatY() + bigBoatB.getBoatHeight() + player.getPlayerSize() * 2)) {
                //console.log("Collision with bigBoatB detected");
                playAudio("missionFailed");
                alert("Oh no. The soldier has got caught by the enemy!");
                let isReset = confirm("Do you want to try again?");
                if (isReset == true) {
                    isRunning = isWinning = false;
                    return location.reload();
                } else {
                    return;
                };
            };
        };
    };
};