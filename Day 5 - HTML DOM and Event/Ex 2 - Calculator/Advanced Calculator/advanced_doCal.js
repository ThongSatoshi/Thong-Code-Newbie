let screen = document.getElementById("screen");
let inputValueArr = [], calArr = [], displayEquation = "", isExponentInput = fractionStep = 0;
let isOperatorInput = isNegative = isDecimal = false;

function clearEntry() {
    let i = inputValueArr.length - 1;
    inputValueArr.splice(i, 1);
    screen.innerHTML = inputValueArr.join("");
};

function resetAll() {
    for (let i = inputValueArr.length; i > 0; i--) {
        inputValueArr.pop();
    };
    screen.innerHTML = inputValueArr.join("");
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

function addPi() {
    let str = "&#960;";
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function addEulerNum() {
    let str = "e";
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
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
            case "&#960;":
                if (isNaN(calArr[i - 1]) == false) {
                    calArr.splice(i - 1, 2, calArr[i - 1] + " * " + (Math.PI).toString());
                } else {
                    calArr.splice(i, 1, (Math.PI).toString());
                };
                break;
            case "e":
                if (isNaN(calArr[i - 1]) == false) {
                    calArr.splice(i - 1, 2, calArr[i - 1] + " * " + (Math.E).toString());
                } else {
                    calArr.splice(i, 1, (Math.E).toString());
                };
                break;
            case "!":
                var removeDigit, factorialResult, num = "", j = i - 1, k, str;
                for (j; i > j >= 0; j--) {
                    if (isNaN(calArr[j]) == true) {
                        removeDigit = i - j;

                        k = j + 1;
                        for (k; k < i; k++) {
                            str = calArr[k];
                            num += str.toString();
                        };

                        factorialResult = num = parseFloat(num);
                        if (num < 0) {
                            alert("Giai thừa của n chỉ nhận n là các số >= 0");
                            calArr.splice(0, calArr.length);
                            resetAll();
                        } else if (num == 0 || num == 1) {
                            calArr.splice(j + 1, removeDigit, "1");
                        } else {
                            while (num > 1) {
                                num--;
                                factorialResult = factorialResult * num;
                            };
                            calArr.splice(j + 1, removeDigit, factorialResult.toString());
                        };
                    } else if (j == 0) {
                        removeDigit = i - j + 1;

                        k = j;
                        for (k; k < i; k++) {
                            str = calArr[k];
                            num += str.toString();
                        };

                        factorialResult = num = parseFloat(num);
                        if (num < 0) {
                            alert("Giai thừa của n chỉ nhận n là các số >= 0");
                            calArr.splice(0, calArr.length);
                            resetAll();
                        } else if (num == 0 || num == 1) {
                            calArr.splice(j, removeDigit, "1");
                        } else {
                            while (num > 1) {
                                num--;
                                factorialResult = factorialResult * num;
                            };
                            calArr.splice(j, removeDigit, factorialResult.toString());
                        };
                    };
                };
                break;
            case "<sup>":
                if (calArr[i - 1] == ")") {
                    var start, end, removeDigit, base;
                    for (start = i; start <= 0; start--) {
                        if(calArr[start] == "(") {
                            removeDigit = i - start;
                        };
                    };
                    for (end = 0; end < i; end++) {
                        base += calArr[end].toString();
                    };
                    calArr.splice(start, removeDigit, "Math.pow(" + base + ",");
                } else if (isNaN(calArr[i - 1]) == false) {
                    calArr.splice(i - 1, 2, "Math.pow(" + calArr[i - 1] + ",");
                };
                console.log(inputValueArr, calArr, removeDigit);
                break;
            case "</sup>":
                calArr.splice(i, 1, ")");
                break;
        };
    };
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