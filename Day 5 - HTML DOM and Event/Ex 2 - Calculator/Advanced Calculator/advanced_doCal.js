let operator = document.querySelectorAll(".operatorBtn");
let number = nodeList = document.querySelectorAll(".numPad");
let firstNum = [], secondNum = [];
let result;

number.addEventListener ("click", function() {
    for(let i = 0; i < number.length; i++) {
        console.log(number[i]); 
    };   
});