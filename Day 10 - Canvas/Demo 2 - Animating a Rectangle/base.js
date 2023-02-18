let smallBoatX = 200, smallBoatY = 0, bigBoatX = 380, bigBoatY = 300,
    smallBoatSize = 100, bigBoatWidth = 100, bigBoatHeight = 200;
let smallBoatA = new Boat(smallBoatX, smallBoatY, smallBoatSize, smallBoatSize, 5, "rgb(190,190,190)"),
    smallBoatB = new Boat(smallBoatX + 350, smallBoatY, smallBoatSize, smallBoatSize, 5, "rgb(190,190,190)");
let bigBoatA = new Boat(bigBoatX, bigBoatY, bigBoatWidth, bigBoatHeight, 3, "rgb(192,192,192)"),
    bigBoatB = new Boat(bigBoatX + 350, bigBoatY, bigBoatWidth, bigBoatHeight, 3, "rgb(192,192,192)");
let player = new Player(50, 250, 30, 10, "rgb(255, 233, 220)");

drawBackground(), drawSmallBoat(), drawBigBoat(), drawPlayer(), drawHitBox();

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

function drawHitBox() {
    // Vẽ hitbox
    let hitboxX = player.playerX - player.playerSize,
        hitboxY = player.playerY - player.playerSize,
        hitBoxSize = player.playerSize * 2;
    context.beginPath();
    context.strokeRect(hitboxX, hitboxY, hitBoxSize, hitBoxSize);
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
    playAudio("startMission");
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
    setInterval(drawHitBox, frame);
    setInterval(checkWinner, frame);
    setInterval(checkCollision, frame);
};

// Reset tất cả về trạng thái ban đầu
resetButton.addEventListener("click", function () {
    let isReset = confirm("Do you want to leave this game now?");
    if (isReset == true) {
        isRunning = isWinning = false;
        return location.reload();
    };
});

// Play SFX/BGM
function playAudio(track) {
    sound1 = document.getElementById("sound1");
    sound2 = document.getElementById("sound2");
    sound3 = document.getElementById("sound3");

    switch (track) {
        case "startMission":
            sound1.volume = 0.5;
            sound1.currentTime = 0;
            sound1.loop = !isWinning;
            sound2.pause();
            sound1.play();
            break;
        case "congrat":
            sound2.volume = 1;
            sound2.currentTime = 0;
            sound1.pause();
            sound2.loop = isWinning;
            sound2.play();
            break;
        case "missionFailed":
            sound3.volume = 1;
            sound3.currentTime = 0;
            sound1.pause();
            sound3.loop = isWinning;
            sound3.play();
            break;
    };
};