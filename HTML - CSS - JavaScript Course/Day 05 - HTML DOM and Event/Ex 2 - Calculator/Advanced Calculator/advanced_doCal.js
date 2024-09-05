let screen = document.getElementById("screen");
let inputValueArr = [], calArr = [], displayEquation = nthRoot = logBase = "";
let isOperatorInput = isNegative = isDecimal = false;
let isExponentInput = isRootInput = isAbsoluteInput = isLogarithmInput = 0;

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

    if (num == 0 && (inputValueArr[inputValueArr.length - 1] == " : " || inputValueArr[inputValueArr.length - 1] == "&nbsp;&#x305;:&#x305;&nbsp;&#x305;")) {
        alert("Divisors cannot equal to 0. \n \nSố bị chia không được bằng 0.");
    } else {
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
            addDecimalPoint();
        } else if (isNegative == false && isDecimal == false) {
            str += num;
            inputValueArr.push(str);
        };
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
    if (isRootInput % 2 != 0) {
        alert("The n-th root of x functions need to be complied with these following conditions: \n n >= 2, x >= 0. \n \n" +
            "Căn bậc n của một số x bất kì phải thỏa mãn các điều kiện sau: \n n >= 2, x >= 0.");
        isNegative = false, isRootInput = 0, nthRoot = "";
        resetAll();
    };

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
        alert("The n-th root of x functions need to be complied with these following conditions: \n n >= 2, x >= 0. \n \n" +
            "Căn bậc n của một số x bất kì phải thỏa mãn các điều kiện sau: \n n >= 2, x >= 0.");
        isRootInput = 0, nthRoot = "";
        resetAll();
    } else if (inputValueArr.length == 0) {
        alert("Please input n-th root value. \n \nVui lòng nhập giá trị căn bậc n.");
        isRootInput = 0, nthRoot = "";
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
    let str = "";
    if (isNegative == true) {
        str += "-&pi;";
        isNegative = false;
    } else {
        str += "&pi;";
    };
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function addEulerNum() {
    let str = "";
    if (isNegative == true) {
        str += "-e";
        isNegative = false;
    } else {
        str += "e";
    };
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function addAbsoluteSign(i) {
    isAbsoluteInput += i;
    if (isAbsoluteInput % 2 != 0) {
        inputValueArr.push("| ");
    } else {
        inputValueArr.push(" |");
        isAbsoluteInput = 0;
    };
    screen.innerHTML = inputValueArr.join("");
};

function addModulo() {
    let str = "";
    if (isOperatorInput == true) {
        str += " mod ";
        inputValueArr.push(str);
        screen.innerHTML = inputValueArr.join("");
    };
};

function addExponentialFunc() {
    let str = "";
    if (isNegative == true) {
        str += "-exp ( ";
        isNegative = false;
    } else {
        str += "exp ( ";
    };
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function addLogarithm(i) {
    let str = "", startPoint;
    isLogarithmInput += i;
    if (isLogarithmInput == 1) {
        if (isNegative == true) {
            str += "-log<sub> ";
            startPoint = inputValueArr.lastIndexOf("-log<sub> ");
            isNegative = false;
        } else {
            str += "log<sub> ";
            startPoint = inputValueArr.lastIndexOf("log<sub> ");
        };
    } else if (isLogarithmInput == 2) {
        str += "</sub> ( ";
        for (let j = startPoint; j < inputValueArr.length - 1; j++) {
            logBase += inputValueArr[j];
        };
    } else {
        str += "&nbsp;)&nbsp;"
        isLogarithmInput = 0;
    };
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
};

function addNaturalLogarithm() {
    let str = "";
    if (isNegative == true) {
        str += "-ln ( ";
        isNegative = false;
    } else {
        str += "ln ( ";
    };
    inputValueArr.push(str);
    screen.innerHTML = inputValueArr.join("");
    isLogarithmInput = 0;
};

function convertOperator() {
    let i = 0, j, k, startPoint, removeDigit, base = "";
    for (i; i < inputValueArr.length; i++) {
        calArr[i] = inputValueArr[i];

        if (calArr[i] == "&#x305;") {
            calArr.splice(i, 1);
        } else if (calArr[i] == " mod ") {
            calArr[i + 1] = inputValueArr[i + 1];
            let moduloResult, dividend = calArr[i - 1], divisor = calArr[i + 1];
            moduloResult = parseFloat(dividend) % parseFloat(divisor);
            calArr.splice(i - 1, 3, moduloResult.toString());
            i = i + 2;
        } else if (calArr[i] == "log<sub> " || calArr[i] == "-log<sub> ") {
            if (logBase == "e") {
                if (isNaN(calArr[i - 1]) == false) {
                    calArr.splice(i - 1, 2, calArr[i - 1] + " * " + (Math.E).toString());
                } else {
                    calArr.splice(i, 1, (Math.E).toString());
                };
                break;
            };

            logBase = parseFloat(logBase);
            if (calArr[i] == "log<sub> ") {
                if (logBase == Math.E) {
                    calArr.splice(i, 1, "Math.log(");
                } else if (logBase == 2) {
                    calArr.splice(i, 1, "Math.log2(");
                } else if (logBase == 10) {
                    calArr.splice(i, 1, "Math.log10(");
                } else if (logBase != Math.E && logBase != 2 && logBase != 10) {
                    calArr.splice(i, 1, "(Math.log(");
                };
            } else {
                if (logBase == Math.E) {
                    calArr.splice(i, 1, "-1 * Math.log(");
                } else if (logBase == 2) {
                    calArr.splice(i, 1, "-1 * Math.log2(");
                } else if (logBase == 10) {
                    calArr.splice(i, 1, "-1 * Math.log10(");
                } else if (logBase != Math.E && logBase != 2 && logBase != 10) {
                    calArr.splice(i, 1, "-1 * (Math.log(");
                };
            };
            i = i + 2;
        } else {
            switch (calArr[i]) {
                case "&nbsp;&#x305;+&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " + ");
                    break;

                case "&nbsp;&#x305;-&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " - ");
                    break;
                case " &times; ":
                    calArr.splice(i, 1, " * ");
                    break;

                case "&nbsp;&#x305;&times;&#x305;&nbsp;&#x305;":
                    calArr.splice(i, 1, " * ");
                    break;

                case " : ":
                    calArr.splice(i, 1, " / ");
                    break;

                case "&nbsp;&#x305;:&#x305;&nbsp;&#x305;":
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

                case "-&pi;":
                    calArr.splice(i, 1, "-1 * " + (Math.PI).toString());
                    break;

                case "e":
                    if (isNaN(calArr[i - 1]) == false) {
                        calArr.splice(i - 1, 2, calArr[i - 1] + " * " + (Math.E).toString());
                    } else {
                        calArr.splice(i, 1, (Math.E).toString());
                    };
                    break;

                case "-e":
                    calArr.splice(i, 1, "-1 * " + (Math.E).toString());
                    break;

                case "!":
                    let factorialResult = "";
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
                            alert("Factorial of x functions only accept x >= 0. \n \nGiai thừa chỉ nhận các cơ số x >= 0.");
                            resetAll();
                        } else if (base == 0 || base == 1) {
                            factorialResult = "1";
                        } else {
                            factorialResult = base;
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
                            alert("Factorial of x functions only accept x >= 0. \n \nGiai thừa chỉ nhận các cơ số x >= 0.");
                            resetAll();
                        } else if (base == 0 || base == 1) {
                            factorialResult = "1";
                        } else {
                            factorialResult = base;
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

                case "| ":
                    calArr.splice(i, 1, "Math.abs(");
                    break;

                case " |":
                    calArr.splice(i, 1, ")");
                    break;

                case "exp ( ":
                    calArr.splice(i, 1, "Math.exp(");
                    break;

                case "-exp ( ":
                    calArr.splice(i, 1, "-1 * Math.exp(");
                    break;

                case "ln ( ":
                    calArr.splice(i, 1, "Math.log(");
                    break;

                case "-ln ( ":
                    calArr.splice(i, 1, "-1 * Math.log(");
                    break;

                case "&nbsp;)&nbsp;":
                    if (logBase != Math.E && logBase != 2 && logBase != 10) {
                        calArr.splice(i, 1, ")) / (Math.log(" + logBase + "))");
                    } else if (logBase == Math.E || logBase == 2 || logBase == 10) {
                        calArr.splice(i, 1, ")");
                    };
                    logBase = 0;
                    break;
            };
        };
    };
    console.log(inputValueArr, calArr, logBase);
};

function outputResult() {
    convertOperator();
    if (inputValueArr.length > 0) {
        let result = eval(calArr.join(""));
        displayEquation = inputValueArr.join("");

        switch (result) {
            case NaN:
                screen.innerHTML = displayEquation + "<br><br>" + "= [Unsolvable_Vô nghiệm]";
                break;
            case undefined:
                screen.innerHTML = displayEquation + "<br><br>" + "= [Unidentifiable_Data type không xác định]";
                break;
            case Infinity:
                screen.innerHTML = displayEquation + "<br><br>" + "= &infin;";
                break;
            case -Infinity:
                screen.innerHTML = displayEquation + "<br><br>" + "= -&infin;";
                break;
            default:
                screen.innerHTML = displayEquation + "<br><br>" + "= " + result;
                break;
        };
        console.log(result);
    };
};