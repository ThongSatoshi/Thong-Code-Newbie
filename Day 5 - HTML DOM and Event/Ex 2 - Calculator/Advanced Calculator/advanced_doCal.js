let screen = document.getElementById("screen");
let inputValueArr = [], calArr = [], displayValue = "";
let isOperatorInput = isNegative = isDecimal = false;

function changeNegative() {
    if (isNegative == false) {
        return isNegative = true;
    } else {
        return isNegative = false;
    };
};

function addDecimalPoint() {
    if (isDecimal == false) {
        return isDecimal = true;
    } else {
        return isDecimal = false;
    };
};

function resetAll() {
    for (let i = inputValueArr.length; i > 0; i--) {
        inputValueArr.pop();
    };
    screen.innerHTML = inputValueArr.toString();
};

function inputNum(num) {
    let str = "";
    if (isNegative == true && isDecimal == true) {
        num = (inputValueArr[inputValueArr.length - 1] * -1) + "." + num
        str += num;
        inputValueArr.splice((inputValueArr.length - 1), 1);
        inputValueArr.push(str);
        changeNegative(), addDecimalPoint();
    } else if (isNegative == true && isDecimal == false) {
        num = num * -1;
        str += num;
        inputValueArr.push(str);
        changeNegative();
    } else if (isNegative == false && isDecimal == true) {
        num = inputValueArr[inputValueArr.length - 1] + "." + num;
        str += num;
        inputValueArr.splice((inputValueArr.length - 1), 1);
        inputValueArr.push(str);
        addDecimalPoint();
    } else if (isNegative == false && isDecimal == false) {
        str += num;
        inputValueArr.push(str);
    };
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

function addBracket(type) {
    let str = "";
    switch (type) {
        case 'open':
            if (inputValueArr.length == 0) {
                str += "( "
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                break;
            } else {
                str += " ( "
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                break;
            };
        case 'close':
            if (inputValueArr.length > 0) {
                str += " ) "
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                break;
            };
    };
};

function addPercentageSign() {
    let str = "";
    if (isOperatorInput == true) {
        str += "% "
        inputValueArr.push(str);
        screen.innerHTML = inputValueArr.join("");
    };
};

function addExponent() {
    let str = "";
    if (isOperatorInput == true) {
        str += "<sup>"
        inputValueArr.push(str);
        screen.innerHTML = inputValueArr.join("");
    };
};

function convertOperator() {
    for (let i = 0; i < inputValueArr.length; i++) {
        calArr[i] = inputValueArr[i];

        switch (calArr[i]) {
            case " x ":
                calArr.splice(i, 1, " * ");
                break;
            case " : ":
                calArr.splice(i, 1, " / ");
                break;
            case "% ":
                calArr.splice(i, 1, " /100");
                break;
        };
    };
};

function outputResult(startSignal) {
    convertOperator();
    if (startSignal == 'yes') {
        let result = calArr.join("");
        let inputValue = inputValueArr.join("");
        screen.innerHTML = inputValue + "<br><br>" + "= " + eval(result);
    };
};