let screen = document.getElementById("screen");
let result, operator, inputValue;
let inputValueArr = [], savedValue = [], savedOperator = [];
let numCount = 0, negativeSign = openBracketSign = closeBracketSign = firstOperation = "";

function getElementbyId(id) {
    return document.getElementById(id).innerHTML;
}

function inputNum(value) {
    let str = "num" + value + "Btn";
    let input = getElementbyId(str);
    inputValueArr.push(input);
    inputValue = openBracketSign + negativeSign + inputValueArr.join("");
    savedValue.splice(numCount, 1, inputValue);
    if (numCount < 1) {
        screen.innerHTML = savedValue[numCount];
    } else {
        screen.innerHTML = firstOperation + savedValue[numCount];
    };
};

function inputOperator(operatorType) {
    switch (operatorType) {
        case 1:
            if (savedValue[numCount] === undefined) {
                break;
            } else {
                operator = " + ";
                savedOperator.splice(numCount, 1, operator);
                firstOperation = screen.innerHTML += savedOperator[numCount];
                numCount++, negativeSign = openBracketSign = closeBracketSign = "", inputValueArr = [];
                break;
            };
        case 2:
            if (savedValue[0] === undefined) {
                negativeSign = " -";
                screen.innerHTML = negativeSign;
                break;
            } else if (savedValue[numCount] === undefined && savedOperator[numCount - 1] !== undefined) {
                negativeSign = " -";
                screen.innerHTML = firstOperation + openBracketSign + negativeSign;
                break;
            } else {
                operator = " - ";
                savedOperator.splice(numCount, 1, operator);
                firstOperation = screen.innerHTML += savedOperator[numCount];
                numCount++, negativeSign = openBracketSign = closeBracketSign = "", inputValueArr = [];
                break;
            };
        case 3:
            if (savedValue[numCount] === undefined) {
                break;
            } else {
                operator = " x ";
                savedOperator.splice(numCount, 1, operator);
                firstOperation = screen.innerHTML += savedOperator[numCount];
                numCount++, negativeSign = openBracketSign = closeBracketSign = "", inputValueArr = [];
                break;
            };
        case 4:
            if (savedValue[numCount] === undefined) {
                break;
            } else {
                operator = " : ";
                savedOperator.splice(numCount, 1, operator);
                firstOperation = screen.innerHTML += savedOperator[numCount];
                numCount++, negativeSign = openBracketSign = closeBracketSign = "", inputValueArr = [];
                break;
            };
    };
};

function addBrackets(bracketType) {
    switch (bracketType) {
        case "open":
            if (savedValue[0] === undefined) {
                openBracketSign = "(";
                screen.innerHTML = openBracketSign;
                break;
            } else if (savedValue[numCount] === undefined && savedOperator[numCount - 1] !== undefined) {
                openBracketSign = "(";
                screen.innerHTML = firstOperation + openBracketSign;
                break;
            };
        case "close":
            closeBracketSign = ")";
            inputValue = closeBracketSign;
            savedValue.splice(numCount, 1, inputValue);
            firstOperation = screen.innerHTML += closeBracketSign;
            break;
    };
};

function outputResult() {

    console.log(savedValue, savedOperator);
};