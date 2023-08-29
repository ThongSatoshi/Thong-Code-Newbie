let screen = document.getElementById("screen");
let inputValueArr = [], displayValue = "";
let isOperatorInput = isNegative = false;

function changeNegative() {
    if (isNegative == false) {
        return isNegative = true;
    } else {
        return isNegative = false;
    };
};

function inputNum(num) {
    if (isNegative == true) {
        num = num * -1;
        let str = "";
        str += num;
        inputValueArr.push(str);
        screen.innerHTML = inputValueArr.join("");
        isOperatorInput = true, changeNegative();
    } else {
        let str = "";
        str += num;
        inputValueArr.push(str);
        screen.innerHTML = inputValueArr.join("");
        isOperatorInput = true;
    };
};

function inputOperator(type) {
    let str = "";
    switch (type) {
        case 1:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                str += " + ";
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                isOperatorInput = false;
                break;
            };
        case 2:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                str += " - ";
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                isOperatorInput = false;
                break;
            };
        case 3:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                str += " x ";
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                isOperatorInput = false;
                break;
            };
        case 4:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                str += " : ";
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                isOperatorInput = false;
                break;
            };
    };
};

function resetAll() {
    for (let i = inputValueArr.length; i > 0; i--) {
        inputValueArr.pop();
    };
    screen.innerHTML = inputValueArr.toString();
};