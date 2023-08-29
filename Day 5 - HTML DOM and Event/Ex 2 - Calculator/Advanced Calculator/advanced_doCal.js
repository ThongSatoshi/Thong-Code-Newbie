let screen = document.getElementById("screen");
let inputValueArr = [], displayValue = "";
let isOperatorInput = false, minusSignInput;

function inputNum(num) {
    let str = "";
    str += num;
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
    isOperatorInput = true;
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
            minusSignInput = true;
            if (inputValueArr.length == 0 && minusSignInput == true) {
                str += "-";
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                minusSignInput = false;
                break;
            } else if (inputValueArr.length > 0 && minusSignInput == true) {
                str += " -";
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                minusSignInput = false;
                break;
            } else if (inputValueArr.length > 0 && isOperatorInput == true) {
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