let screen = document.getElementById("screen");
let result, operator, operatorSign, inputValue;
let inputValueArr = [], savedValue = [];
let operantCount = 0;
let negativeSign = openBracketSign = closeBracketSign = firstOperation = "";

window.onload = function() {
    console.log(operantCount, savedValue);
};

function getElementbyId(id) {
    return document.getElementById(id).innerHTML;
}

function saveBracketsPosition(bracketType) {
    if (bracketType == "open") {
        savedValue.splice(operantCount, 0, openBracketSign);
        operantCount++;
    } else if (bracketType == "close") {
        savedValue.splice(operantCount, 0, closeBracketSign);
        operantCount++;
    };
};

function inputNum(value) {
    let str = "num" + value + "Btn";
    let input = getElementbyId(str);
    inputValueArr.push(input);
    inputValue = negativeSign + inputValueArr.join("");
    savedValue.splice(operantCount, 1, inputValue);
    if (operantCount = 0) {
        screen.innerHTML = (savedValue.slice(0)).join("");
    } else {
        screen.innerHTML += (savedValue.slice(0)).join("");
    };
};

function inputOperator(operatorType) {
    switch (operatorType) {
        case 1:
            if (operantCount = 0) {
                break;
            } else {
                operator = " + ";
                screen.innerHTML += (savedValue.slice(0)).join("") + operator;
                savedValue.splice(operantCount, 1, operator);
                operantCount++, inputValueArr = [], negativeSign = openBracketSign = closeBracketSign = "";
                break;
            };
        case 2:
            if (operantCount = 0) {
                negativeSign = " -";
                screen.innerHTML = negativeSign;
                break;
            } else if (operantCount >= 1 && savedValue[operantCount - 1] !== undefined) {
                negativeSign = " -";
                screen.innerHTML = (savedValue.slice(0)).join("") + negativeSign;
                break;
            } else {
                operator = " - ";
                savedValue.push(operator);
                screen.innerHTML = (savedValue.slice(0)).join("");
                operantCount++, inputValueArr = [], negativeSign = openBracketSign = closeBracketSign = "";
                break;
            };
        case 3:
            if (operantCount = 0) {
                break;
            } else {
                operator = " x ";
                savedValue.push(operator);
                screen.innerHTML = (savedValue.slice(0)).join("");
                operantCount++, inputValueArr = [], negativeSign = openBracketSign = closeBracketSign = "";
                break;
            };
        case 4:
            if (operantCount = 0) {
                break;
            } else {
                operator = " : ";
                savedValue.push(operator);
                screen.innerHTML = (savedValue.slice(0)).join("");
                operantCount++, inputValueArr = [], negativeSign = openBracketSign = closeBracketSign = "";
                break;
            };
    };
};

function addBrackets(bracketType) {
    switch (bracketType) {
        case "open":
            if (savedValue[0] === undefined) {
                openBracketSign = "(";
                saveBracketsPosition("open");
                screen.innerHTML = openBracketSign;
                break;
            } else if (savedValue[operantCount] === undefined && savedValue[operantCount - 1] !== undefined) {
                openBracketSign = "(";
                saveBracketsPosition("open");
                screen.innerHTML = (savedValue.slice(0)).join("");
                break;
            };
        case "close":
            closeBracketSign = ")";
            saveBracketsPosition("close");
            screen.innerHTML = (savedValue.slice(0)).join("");
            break;
    };
};

function outputResult() {
    // let draftResult = doCalculation();
    // if (result === undefined || result == null) {
    //     result = "Error: Cannot Be Solved";
    // };
    // screen.innerHTML = result;
};

function doCalculation() {
    let draft, str = "";

    return draft;
};