let screen = document.getElementById("screen");
let operator = document.getElementsByClassName("operatorBtn").value;
let result, firstNumArr = [], secondNumArr = [], firstNum = 0, secondNum = 0, isNextNum = false;

function inputNum(value) {
    if (firstNumArr.length == 0 || isNextNum == false) {
        firstNumArr.push(value);
        for (let i = 0; i < firstNumArr.length; i++) {
            screen.innerHTML = firstNumArr.join("");
        };
    } else {
        secondNumArr.push(value);
        for (let i = 0; i < secondNumArr.length; i++) {
            screen.innerHTML += secondNumArr.join("");
        };
    };
    // console.log(firstNumArr, secondNumArr);
};

function inputOperator(operatorType) {
    console.log(operatorType);
    switch (operatorType) {
        case 1:
            if (firstNumArr.length != 0) {
                isNextNum = true;
                screen.innerHTML += "+";
            } else {
                break;
            };
            break;

    }
};

function outputResult() {

    console.log("a result!");
};