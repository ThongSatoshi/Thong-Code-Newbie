window.onload = function () {
    let moneyInput, moneyOutput;

    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let exchangeBtn = document.getElementById("exchangeBtn");
    let result = document.getElementById("result");

    exchangeBtn.addEventListener("click", doExchange());
    function doExchange() {
        moneyInput = parseInt(document.getElementById("moneyAmount").value);
        if (fromCurrency == "USD") {
            switch (toCurrency) {
                case "USD":
                    result.innerHTML = "Kết quả : " + moneyInput + "&nbsp;" + fromCurrency;
                    break;
                case "EUR":
                    moneyOutput = moneyInput * 0.91;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "JPY":
                    moneyOutput = moneyInput * 122.2;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "GBP":
                    moneyOutput = moneyInput * 0.76;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "VND":
                    moneyOutput = moneyInput * 22863.5;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
            };
        };

        if (fromCurrency == "EUR") {
            switch (toCurrency) {
                case "EUR":
                    result.innerHTML = "Kết quả : " + moneyInput + "&nbsp;" + fromCurrency;
                    break;
                case "USD":
                    moneyOutput = moneyInput * 1.10;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "JPY":
                    moneyOutput = moneyInput * 134.53;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "GBP":
                    moneyOutput = moneyInput * 0.84;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "VND":
                    moneyOutput = moneyInput * 25177.29;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
            };
        };

        if (fromCurrency == "JPY") {
            switch (toCurrency) {
                case "JPY":
                    result.innerHTML = "Kết quả : " + moneyInput + "&nbsp;" + fromCurrency;
                    break;
                case "EUR":
                    moneyOutput = moneyInput * 0.0074;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "USD":
                    moneyOutput = moneyInput * 0.0082;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "GBP":
                    moneyOutput = moneyInput * 0.0062;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "VND":
                    moneyOutput = moneyInput * 187.22;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
            };
        };

        if (fromCurrency == "GBP") {
            switch (toCurrency) {
                case "GBP":
                    result.innerHTML = "Kết quả : " + moneyInput + "&nbsp;" + fromCurrency;
                    break;
                case "EUR":
                    moneyOutput = moneyInput * 1.2;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "JPY":
                    moneyOutput = moneyInput * 160.99;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "USD":
                    moneyOutput = moneyInput * 1.32;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "VND":
                    moneyOutput = moneyInput * 30156.75;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
            };
        };

        if (fromCurrency == "VND") {
            switch (toCurrency) {
                case "VND":
                    result.innerHTML = "Kết quả : " + moneyInput + "&nbsp;" + fromCurrency;
                    break;
                case "EUR":
                    moneyOutput = moneyInput * 0.00004;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "JPY":
                    moneyOutput = moneyInput * 0.0053;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "GBP":
                    moneyOutput = moneyInput * 0.000033;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
                case "USD":
                    moneyOutput = moneyInput * 0.000044;
                    result.innerHTML = "Kết quả : " + moneyOutput.toFixed(2) + "&nbsp;" + toCurrency;
                    break;
            };
        };
    };
};