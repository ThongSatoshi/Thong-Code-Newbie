let screen = document.getElementById("screen");
let inputValueArr = [], calArr = [], displayEquation = nthRoot = "";
let isOperatorInput = isNegative = isDecimal = false, isExponentInput = isRootInput = 0;

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

    if (isRootInput % 2 != 0) {
        inputValueArr.push("&#x305;");
    };
    screen.innerHTML = inputValueArr.join("");
    isOperatorInput = true;
};

function inputOperator(type) {
    let str = "";

    switch (type) {
        case 1:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                if (isRootInput % 2 != 0) {
                    str += "&nbsp;&#x305;+&#x305;&nbsp;&#x305;";
                } else {
                    str += " + ";
                };
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                isOperatorInput = false;
                break;
            };
        case 2:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                if (isRootInput % 2 != 0) {
                    str += "&nbsp;&#x305;-&#x305;&nbsp;&#x305;";
                } else {
                    str += " - ";
                };
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                isOperatorInput = false;
                break;
            };
        case 3:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                if (isRootInput % 2 != 0) {
                    str += "&nbsp;&#x305;&times;&#x305;&nbsp;&#x305;";
                } else {
                    str += " &times; ";
                };
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                isOperatorInput = false;
                break;
            };
        case 4:
            if (inputValueArr.length > 0 && isOperatorInput == true) {
                if (isRootInput % 2 != 0) {
                    str += "&nbsp;&#x305;:&#x305;&nbsp;&#x305;";
                } else {
                    str += " : ";
                };
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
    if (inputValueArr.length != 0) {
        if (isExponentInput % 2 != 0) {
            inputValueArr.push("<sup>");
        } else if (isExponentInput % 2 == 0) {
            inputValueArr.push("</sup>");
            isExponentInput = 0;
        };
    };
};

function addRoot(i) {
    isRootInput += i;
    let j, k = inputValueArr.length - 1, startPoint, removeDigit = 0;

    while (isNaN(inputValueArr[k]) == false || k >= 0) {
        k--, removeDigit++;
        if (isNaN(inputValueArr[k]) == true) {
            startPoint = k + 1;
        } else if (k < 0) {
            startPoint = 0;
        };
    };
    for (j = startPoint; j <= inputValueArr.length - 1; j++) {
        nthRoot += inputValueArr[j];
    };
    nthRoot = parseFloat(nthRoot);

    if (nthRoot == 2) {
        if (isRootInput % 2 != 0) {
            inputValueArr.splice(startPoint, removeDigit, "&radic;&nbsp;&#x305;");
        } else if (isRootInput % 2 == 0) {
            isRootInput = 0;
        };
    } else if (nthRoot > 2) {
        if (isRootInput == 1) {
            inputValueArr.splice(startPoint, removeDigit, "<sup>" + nthRoot + "</sup>")
            inputValueArr.push("&radic;&nbsp;&#x305;");
        } else if (isRootInput % 2 == 0) {
            isRootInput = 0;
        };
    } else if (nthRoot == 1 || nthRoot == 0) {
        alert("Căn bậc n của một số x bất kì phải thỏa mãn điều kiện sau: \n n >= 2, x >= 0.");
        resetAll();
    } else if (inputValueArr.length == 0) {
        alert("Vui lòng nhập giá trị căn bậc n.");
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
                if (isRootInput % 2 != 0) {
                    str += "&nbsp;&#x305;(&#x305;&nbsp;&#x305;";
                } else {
                    str += " ( ";
                };
                inputValueArr.push(str);
                screen.innerHTML = inputValueArr.join("");
                break;
            };
        case 'close':
            if (inputValueArr.length > 0) {
                if (isRootInput % 2 != 0) {
                    str += "&nbsp;&#x305;)&#x305;&nbsp;&#x305;";
                } else {
                    str += " ) ";
                };
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
    let str = "&pi;";
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function addEulerNum() {
    let str = "e";
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function addI() {
    let str = "i";
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function convertOperator() {
    let i = 0, j, k, startPoint, removeDigit, base = "";
    for (i; i < inputValueArr.length; i++) {
        calArr[i] = inputValueArr[i];

        if (calArr[i] == "&#x305;") {
            calArr.splice(i, 1);
        } else {
            switch (calArr[i]) {
                case "&nbsp;&#x305;+&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " + ");
                    break;

                case "&nbsp;&#x305;-&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " - ");
                    break;
                case " &times; " || "&nbsp;&#x305;&times;&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " * ");
                    break;

                case " : " || "&nbsp;&#x305;:&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " / ");
                    break;

                case "&nbsp;&#x305;(&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " ( ");
                    break;

                case "&nbsp;&#x305;)&#x305;&nbsp;&#x305;":
                    if (nthRoot > 2) {
                        calArr.splice(i, 1, ") , 1/" + nthRoot + ")");
                        nthRoot = 0;
                    } else {
                        calArr.splice(i, 1, " ) )");
                    };
                    break;

                case "% ":
                    calArr.splice(i, 1, " /100");
                    break;

                case "&pi;":
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
                    if (calArr[i - 1] == " ) ") {
                        if (calArr[0] == "( ") {
                            startPoint = 0;
                        } else {
                            startPoint = calArr.lastIndexOf(" ( ", i);
                        };
                        removeDigit = i - startPoint + 1;
                        for (j = startPoint; j < i; j++) {
                            base += calArr[j];
                        };
                        base = eval(base);

                        if (base < 0) {
                            alert("Giai thừa chỉ nhận các cơ số là số >= 0");
                            resetAll();
                        } else if (base == 0 || base == 1) {
                            var factorialResult = "1";
                        } else {
                            var factorialResult = base;
                            while (base > 1) {
                                base--;
                                factorialResult *= base;
                            };
                        };
                    } else if (isNaN(calArr[i - 1]) == false) {
                        k = i - 1;
                        while (k >= 0) {
                            k--;
                            if (isNaN(calArr[k]) == true) {
                                startPoint = k + 1;
                                removeDigit = i - startPoint + 1;
                            };
                        };
                        for (j = startPoint; j < i; j++) {
                            base += calArr[j];
                        };
                        base = parseFloat(base);

                        if (base < 0) {
                            alert("Giai thừa chỉ nhận các cơ số là số >= 0 !");
                            resetAll();
                        } else if (base == 0 || base == 1) {
                            var factorialResult = "1";
                        } else {
                            var factorialResult = base;
                            while (base > 1) {
                                base--;
                                factorialResult *= base;
                            };
                        };
                    }
                    calArr.splice(startPoint, removeDigit, factorialResult.toString());
                    break;

                case "<sup>":
                    if (calArr[i - 1] == " ) ") {
                        if (calArr[0] == "( ") {
                            startPoint = 0;
                        } else {
                            startPoint = calArr.lastIndexOf(" ( ", i);
                        };
                        removeDigit = i - startPoint + 1;
                        for (j = startPoint; j < i; j++) {
                            base += calArr[j];
                        };
                    } else if (isNaN(calArr[i - 1]) == false) {
                        k = i - 1;
                        while (k >= 0) {
                            k--;
                            if (isNaN(calArr[k]) == true) {
                                startPoint = k + 1;
                                removeDigit = i - startPoint + 1;
                            };
                        };
                        for (j = startPoint; j < i; j++) {
                            base += calArr[j];
                        };
                    };
                    calArr.splice(startPoint, removeDigit, "Math.pow(" + base + ",");
                    break;

                case "</sup>":
                    calArr.splice(i, 1, ")");
                    break;

                case "&radic;&nbsp;&#x305;":
                    if (nthRoot > 2) {
                        calArr.splice(i - 1, 2, "Math.pow(");
                    } else {
                        calArr.splice(i, 1, "Math.sqrt(");
                    };
                    break;
            };
        };
    };
    console.log(inputValueArr, calArr);
};

function outputResult() {
    convertOperator();
    if (inputValueArr.length > 0) {
        let result = eval(calArr.join(""));
        displayEquation = inputValueArr.join("");

        switch (result) {
            case NaN:
                screen.innerHTML = displayEquation + "<br><br>" + "= Vô nghiệm";
                break;
            case Infinity:
                screen.innerHTML = displayEquation + "<br><br>" + "= " + "&infin;";
                break;
            default:
                screen.innerHTML = displayEquation + "<br><br>" + "= " + result;
                break;
        };
        console.log(result);
    };
};