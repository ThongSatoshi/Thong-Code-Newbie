let screen = document.getElementById("screen");
let result, operator, operatorSign, inputValue;
let inputValueArr = [], savedValue = [], savedOperator = [], savedBrackets = [];
let numCount = 0, bracketLevelCount = 1; 
let negativeSign = openBracketSign = closeBracketSign = firstOperation = "";

function getElementbyId(id) {
    return document.getElementById(id).innerHTML;
}

function saveBracketsPosition(bracketType) {
    if (bracketType == "open") {
        savedBrackets.push(bracketLevelCount);
        bracketLevelCount++;
    } else if (bracketType == "close") {
        savedBrackets.push("x");
    } else {
        savedBrackets.push(0);
    };
};

function inputNum(value) {
    let str = "num" + value + "Btn";
    let input = getElementbyId(str);
    inputValueArr.push(input);
    inputValue = negativeSign + inputValueArr.join("");
    savedValue.splice(numCount, 1, inputValue);
    if (numCount < 1) {
        screen.innerHTML = savedValue[numCount];
    } else {
        screen.innerHTML = firstOperation + savedValue[numCount];
    };
};

function inputOperator(operatorType) {
    saveBracketsPosition("none");
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
                saveBracketsPosition("open");
                screen.innerHTML = openBracketSign;
                break;
            } else if (savedValue[numCount] === undefined && savedOperator[numCount - 1] !== undefined) {
                openBracketSign = "(";
                saveBracketsPosition("open");
                firstOperation = screen.innerHTML += openBracketSign;
                break;
            };
        case "close":
            closeBracketSign = ")";
            saveBracketsPosition("close");
            firstOperation = screen.innerHTML += closeBracketSign;
            break;
    };
};

function outputResult() {
    // let draftResult = doCalculation();
    // if (result === undefined || result == null) {
    //     result = "Error: Cannot Be Solved";
    // };
    // screen.innerHTML = result;
    // console.log(result, savedValue, savedOperator, savedBrackets, numCount);
};

function doCalculation() {
    let draft;
    for (let i = 0; i < savedBrackets.length; i++) {
        if (savedBrackets[i] == "open") {
            break;
        }
    };
    return draft;
};