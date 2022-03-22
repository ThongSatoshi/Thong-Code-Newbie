let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let add = document.getElementById("addBtn");
let sub = document.getElementById("subBtn");
let mul = document.getElementById("mulBtn");
let div = document.getElementById("divBtn");
let doCal = document.getElementById("doCal");
let clear = document.getElementById("resetBtn");
let result = document.getElementById("result");
var a, b, re;

firstNum.addEventListener("change", function() {
    a = parseFloat(firstNum.value);
});
secondNum.addEventListener("change", function() {
    b = parseFloat(secondNum.value);
});

add.addEventListener("click", function() {
    re = a + b;
});
sub.addEventListener("click", function() {
    re = a - b;
});
mul.addEventListener("click", function() {
    re = a * b;
});
div.addEventListener("click", function() {
    re = a / b;
});

result.addEventListener("click", function() {
    if (isNaN(re) || re == null) {
        result.innerText = "[Error] không thể thực hiện phép tính giữa " + a + " và " + b;
    } else {
        result.innerText = "Kết quả phép tính giữa " + a + " và " + b + " là " + re;
    };
});

clear.addEventListener("click", (firstNum && secondNum).reset());