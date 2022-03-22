windows.onload = function() {
    let firstNum = document.getElementById("firstNum");
    let secondNum = document.getElementById("secondNum");
    let add = document.getElementById("addBtn");
    let sub = document.getElementById("subBtn");
    let mul = document.getElementById("mulBtn");
    let div = document.getElementById("divBtn");
    let clear = document.getElementById("resetBtn");
    
    add.addEventListener("click", function() {
        let a = parseFloat(firstNum.value);
        let b = parseFloat(secondNum.value);
        let re;
        re = a + b;
        if (isNaN(re) || re == null) {
            result.innerHTML = "[Error] Không thể thực hiện tính phép tính";
        } else {
            result.innerHTML = "Kết quả phép tính là: " + re;
        };
    });
    
    sub.addEventListener("click", function() {
        let a = parseFloat(firstNum.value);
        let b = parseFloat(secondNum.value);
        let re;
        re = a - b;
        if (isNaN(re) || re == null) {
            result.innerHTML = "[Error] Không thể thực hiện tính phép tính";
        } else {
            result.innerHTML = "Kết quả phép tính là: " + re;
        };
    });
    
    mul.addEventListener("click", function() {
        let a = parseFloat(firstNum.value);
        let b = parseFloat(secondNum.value);
        let re;
        re = a * b;
        if (isNaN(re) || re == null) {
            result.innerHTML = "[Error] Không thể thực hiện tính phép tính";
        } else {
            result.innerHTML = "Kết quả phép tính là: " + re;
        };
    });
    
    div.addEventListener("click", function() {
        let a = parseFloat(firstNum.value);
        let b = parseFloat(secondNum.value);
        let re;
        re = a / b;
        if (isNaN(re) || re == null) {
            result.innerHTML = "[Error] Không thể thực hiện tính phép tính";
        } else {
            result.innerHTML = "Kết quả phép tính là: " + re;
        };
    });

clear.addEventListener("click", (firstNum && secondNum).reset());
};