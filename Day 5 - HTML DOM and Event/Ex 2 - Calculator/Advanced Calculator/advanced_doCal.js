let screen = document.getElementById("screen");
let result, operator, inputValue;
let inputValueArr = [], savedValue = [], savedOperator = [];
let numCount = 0, negativeSign = firstOperation = "";

function getElementbyId(id) {
    return document.getElementById(id).innerHTML;
}

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
    switch (operatorType) {
        case 1:
            operator = " + ";
            savedOperator.splice(numCount, 1, operator);
            firstOperation = screen.innerHTML += savedOperator[numCount];
            numCount++, negativeSign = "", inputValueArr = [];
            break;
        case 2:
            if (savedValue[0] === undefined) {
                negativeSign = " -";
                screen.innerHTML = negativeSign;
                break;
            } else if (savedValue[numCount] === undefined && savedOperator[numCount - 1] !== undefined) {
                negativeSign = " -";
                screen.innerHTML = firstOperation + negativeSign;
                break;
            } else {
                operator = " - ";
                savedOperator.splice(numCount, 1, operator);
                firstOperation = screen.innerHTML += savedOperator[numCount];
                numCount++, negativeSign = "", inputValueArr = [];
                break;
            };
        case 3:
            operator = " x ";
            savedOperator.splice(numCount, 1, operator);
            firstOperation = screen.innerHTML += savedOperator[numCount];
            numCount++, negativeSign = "", inputValueArr = [];
            break;
        case 4:
            operator = " : ";
            savedOperator.splice(numCount, 1, operator);
            firstOperation = screen.innerHTML += savedOperator[numCount];
            numCount++, negativeSign = "", inputValueArr = [];
            break;
    };
};

function outputResult() {

    console.log("a result!");
};