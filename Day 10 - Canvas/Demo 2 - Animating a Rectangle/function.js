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
        let hitboxX = player.playerX - player.playerSize,
        hitboxY = player.playerY - player.playerSize;

        // Kiểm tra va chạm giữa người chơi và thuyền nhỏ
        let halfXSmallBoatA = smallBoatA.boatX + smallBoatA.boatWidth / 2;
        let halfXSmallBoatB = smallBoatB.boatX + smallBoatB.boatWidth / 2;
        let halfYSmallBoatA = smallBoatA.boatY + smallBoatA.boatHeight / 2;
        let halfYSmallBoatB = smallBoatB.boatY + smallBoatB.boatHeight / 2;
        if (((hitboxX + player.playerSize - halfXSmallBoatA) <= ((hitboxSize + smallBoatA.boatWidth) / 2))
            || ((hitboxX + player.playerSize - halfXSmallBoatB) <= ((hitboxSize + smallBoatB.boatWidth) / 2))
            || ((hitboxY + player.playerSize - halfYSmallBoatA) <= ((hitboxSize + smallBoatA.boatHeight) / 2))
            || ((hitboxY + player.playerSize - halfYSmallBoatB) <= ((hitboxSize + smallBoatB.boatHeight) / 2))) {

            isDead = true;
            alert("Too bad! The enemy boat has caught the soldier");
            let isReset = confirm("Do you want to retry?");
            if (isReset == true) {
                isRunning = isDead = false;
                return location.reload();
            } else {
                return;
            };
        };
    };
};