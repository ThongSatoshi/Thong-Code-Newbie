class Item {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    };
};

const TABLESIZE = 5;

let cakeArr = [(new Item("Chocolate Cake", "25.75 USD", randomID())),
(new Item("Strawberry Cake", "30.15 USD", randomID())),
(new Item("Cheese Cake", "35.45 USD", randomID())),
(new Item("Matcha Cake", "48.20 USD", randomID())),
(new Item("Golden Cake", "45.00 USD", randomID())),
];

let breadArr = [(new Item("Banh Mi Sandwich", "2.55 USD", randomID())),
(new Item("Hamburger and Fries", "3.25 USD", randomID())),
(new Item("Katsu Sandwich", "5.00 USD", randomID())),
(new Item("Fruit Sandwich", "3.50 USD", randomID())),
(new Item("The Big Boss", "6.00 USD", randomID())),
];

let icecreamArr = [(new Item("Vanilla & Chocolate", "1.75 USD", randomID())),
(new Item("Strawberry & Blueberry", "2.00 USD", randomID())),
(new Item("Matcha Red Bean Paste", "5.25 USD", randomID())),
(new Item("Tropical Trophy", "3.50 USD", randomID())),
];

let drinkArr = [(new Item("Blue Marine", "2.25 USD", randomID())),
(new Item("Red Sunset", "2.25 USD", randomID())),
(new Item("Boba Milktea", "1.35 USD", randomID())),
(new Item("Cream Cheese Milktea", "1.50 USD", randomID())),
(new Item("Cookie Shake", "2.00 USD", randomID())),
];

function randomID() {
    let idcode = "20220928"
    let i = Math.floor(Math.random() * 100);
    if (i < 10) {
        i = "0" + i; 
    };
    return idcode += i;
};

function showCakeList() {
    let board = document.getElementById("cakeList");
    let i = j = k = 0, colA = colB = colC = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE) {
        grid += "<td>" + cakeArr[i].name + "</td>";
        colA++, i++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE) {
        grid += "<td>" + cakeArr[j].price + "</td>";
        colB++, j++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE) {
        grid += "<td>" + cakeArr[k].id + "</td>";
        colC++, k++;
    };
    grid += "</tr></table>";
    board.innerHTML = grid;
};

function showBreadList() {
    let board = document.getElementById("breadList");
    let i = j = k = 0, colA = colB = colC = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE) {
        grid += "<td>" + breadArr[i].name + "</td>";
        colA++, i++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE) {
        grid += "<td>" + breadArr[j].price + "</td>";
        colB++, j++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE) {
        grid += "<td>" + breadArr[k].id + "</td>";
        colC++, k++;
    };
    grid += "</tr></table>";
    board.innerHTML = grid;
};

function showIcecreamList() {
    let board = document.getElementById("icecreamList");
    let i = j = k = 0, colA = colB = colC = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE) {
        grid += "<td>" + icecreamArr[i].name + "</td>";
        colA++, i++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE) {
        grid += "<td>" + icecreamArr[j].price + "</td>";
        colB++, j++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE) {
        grid += "<td>" + icecreamArr[k].id + "</td>";
        colC++, k++;
    };
    grid += "</tr></table>";
    board.innerHTML = grid;
};

function showDrinkList() {
    let board = document.getElementById("drinkList");
    let i = j = k = 0, colA = colB = colC = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE) {
        grid += "<td>" + drinkArr[i].name + "</td>";
        colA++, i++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE) {
        grid += "<td>" + drinkArr[j].price + "</td>";
        colB++, j++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE) {
        grid += "<td>" + drinkArr[k].id + "</td>";
        colC++, k++;
    };
    grid += "</tr></table>";
    board.innerHTML = grid;
};

showCakeList();
showBreadList();
showIcecreamList();
showDrinkList();