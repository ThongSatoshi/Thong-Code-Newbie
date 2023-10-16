let screen = document.getElementById("screen");
let inputValueArr = [], calArr = [], displayEquation = "", isExponentInput = 0;
let isOperatorInput = isNegative = isDecimal = false;

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

function addExponent(i) {
    isExponentInput += i;
    if (isExponentInput % 2 != 0) {
        inputValueArr.push("<sup>");
    } else if (isExponentInput % 2 == 0) {
        inputValueArr.push("</sup>");
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
        str += "% ";
        inputValueArr.push(str);
        screen.innerHTML = inputValueArr.join("");
    };
};

function addFactorial() {
    let str = "";
    if (isOperatorInput == true) {
        str += "!";
        inputValueArr.push(str);
        screen.innerHTML = inputValueArr.join("");
    };
};

function convertOperator() {
    let i = 0;
    for (i; i < inputValueArr.length; i++) {
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
            case "!":
                let fac = f = calArr[i - 1];
                if (calArr[i - 1] == 0 || calArr[i - 1] == 1) {
                    calArr.splice(i - 1, 2, "1");
                } else {
                    while (f > 1) {
                        fac * (fac - 1)
                        f--;
                    };
                    calArr.splice(i - 1, 2, fac.toString());
                };
                console.log(fac, f);
                break;
            case "<sup>":
                let removeDigit, base = "", j = i - 1, k;
                for (j; j >= 0; j--) {
                    if (isNaN(calArr[j]) == true || j == 0) {
                        removeDigit = i - j + 1;
                    };
                };
                if (j == 0) {
                    k = j;
                    for (k; k < i; k++) {
                        let str = calArr[k];
                        base += str.toString();
                    };
                    calArr.splice(j, removeDigit, "Math.pow(" + base + ",");
                } else {
                    k = j + 1;
                    for (k; k < i; k++) {
                        let str = calArr[k];
                        base += str.toString();
                    };
                    calArr.splice(j + 1, removeDigit, "Math.pow(" + base + ",");
                };
                break;
            case "</sup>":
                calArr.splice(i, 1, ")");
                break;
        };
    };
    console.log(inputValueArr, calArr);
};

function outputResult() {
    convertOperator();
    if (inputValueArr.length > 0) {
        let result = calArr.join("");
        displayEquation = inputValueArr.join("");
        console.log(result);
        screen.innerHTML = displayEquation + "<br><br>" + "= " + eval(result);
    };
};