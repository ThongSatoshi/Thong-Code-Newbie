class Item {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    };
};

const TABLESIZE = 5;
let timeClicked = 0;
let keywords = document.getElementById("searchBar"),
    option = document.getElementById("searchOption");

let cakeArr = [(new Item("Chocolate Cake", "25.75 USD", randomID())),
(new Item("Strawberry Cake", "30.15 USD", randomID())),
(new Item("Blueberry Cheesecake", "35.45 USD", randomID())),
(new Item("Matcha Layer Cake", "48.20 USD", randomID())),
(new Item("The Silky Milky", "46.00 USD", randomID())),
];

let breadArr = [(new Item("Grilled Pork Sandwich", "2.55 USD", randomID())),
(new Item("Shrimp Burger", "3.25 USD", randomID())),
(new Item("Katsu Sando", "5.00 USD", randomID())),
(new Item("The Big Boss", "6.00 USD", randomID())),
];

let icecreamArr = [(new Item("Vanilla & Chocolate", "1.75 USD", randomID())),
(new Item("Strawberry & Blueberry", "2.00 USD", randomID())),
(new Item("Matcha Red Bean Paste", "4.25 USD", randomID())),
(new Item("The Mango Trophy", "5.00 USD", randomID())),
];

let drinkArr = [(new Item("Blue Marine", "2.25 USD", randomID())),
(new Item("Red Sunset", "2.25 USD", randomID())),
(new Item("Boba Milktea", "1.35 USD", randomID())),
(new Item("Cream Cheese Coffee", "1.50 USD", randomID())),
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
    let itemList = document.getElementById("cakeList");
    let a = b = c = d = 0, colA = colB = colC = colD = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE && a < cakeArr.length) {
        grid += "<td><img class='itemImage' src='image\\menu\\" + cakeArr[a].name + ".png' alt='Item Picture'></td>"
        colA++, a++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE && b < cakeArr.length) {
        grid += "<td>" + cakeArr[b].name + "</td>";
        colB++, b++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE && c < cakeArr.length) {
        grid += "<td>" + cakeArr[c].price + "</td>";
        colC++, c++;
    };
    grid += "</tr>"

    while (colD <= TABLESIZE && d < cakeArr.length) {
        grid += "<td>ID: " + cakeArr[d].id + "</td>";
        colD++, d++;
    };
    grid += "</tr></table>";
    itemList.innerHTML = grid;
};

function showBreadList() {
    let itemList = document.getElementById("breadList");
    let a = b = c = d = 0, colA = colB = colC = colD = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE && a < breadArr.length) {
        grid += "<td><img class='itemImage' src='image\\menu\\" + breadArr[a].name + ".png' alt='Item Picture'></td>"
        colA++, a++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE && b < breadArr.length) {
        grid += "<td>" + breadArr[b].name + "</td>";
        colB++, b++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE && c < breadArr.length) {
        grid += "<td>" + breadArr[c].price + "</td>";
        colC++, c++;
    };
    grid += "</tr>"

    while (colD <= TABLESIZE && d < breadArr.length) {
        grid += "<td>ID: " + breadArr[d].id + "</td>";
        colD++, d++;
    };
    grid += "</tr></table>";
    itemList.innerHTML = grid;
};

function showIcecreamList() {
    let itemList = document.getElementById("icecreamList");
    let a = b = c = d = 0, colA = colB = colC = colD = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE && a < icecreamArr.length) {
        grid += "<td><img class='itemImage' src='image\\menu\\" + icecreamArr[a].name + ".png' alt='Item Picture'></td>"
        colA++, a++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE && b < icecreamArr.length) {
        grid += "<td>" + icecreamArr[b].name + "</td>";
        colB++, b++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE && c < icecreamArr.length) {
        grid += "<td>" + icecreamArr[c].price + "</td>";
        colC++, c++;
    };
    grid += "</tr>"

    while (colD <= TABLESIZE && d < icecreamArr.length) {
        grid += "<td>ID: " + icecreamArr[d].id + "</td>";
        colD++, d++;
    };
    grid += "</tr></table>";
    itemList.innerHTML = grid;
};

function showDrinkList() {
    let itemList = document.getElementById("drinkList");
    let a = b = c = d = 0, colA = colB = colC = colD = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE && a < drinkArr.length) {
        grid += "<td><img class='itemImage' src='image\\menu\\" + drinkArr[a].name + ".png' alt='Item Picture'></td>"
        colA++, a++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE && b < drinkArr.length) {
        grid += "<td>" + drinkArr[b].name + "</td>";
        colB++, b++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE && c < drinkArr.length) {
        grid += "<td>" + drinkArr[c].price + "</td>";
        colC++, c++;
    };
    grid += "</tr>"

    while (colD <= TABLESIZE && d < drinkArr.length) {
        grid += "<td>ID: " + drinkArr[d].id + "</td>";
        colD++, d++;
    };
    grid += "</tr></table>";
    itemList.innerHTML = grid;
};

function displayList() {
    timeClicked++;
    if (timeClicked % 2 != 0) {
        showCakeList();
        showBreadList();
        showIcecreamList();
        showDrinkList();
    } else if (timeClicked % 2 == 0) {
        const targetedClass = document.querySelectorAll(".productList");
        targetedClass.forEach(target => {
            target.remove();
        });
    };
    console.log("Display button clicked:" + timeClicked);
};

function searchItem() {
    keywords.value.toLowerCase();
    if (option.value == "category") {

        const targetedClass = document.querySelectorAll(".productList");
        targetedClass.forEach(target => {
            target.remove();
        });

        switch (keywords.value) {
            case "cake":
            case "cakes":
            case "pastry":
            case "pastries":
            case "cake & pastry":
            case "cakes & pastries":
            case "cake and pastry":
            case "cakes and pastries":
                showCakeList();
                break;
            case "bread":
            case "breads":
            case "sandwich":
            case "sandwiches":
            case "bread & sandwich":
            case "breads & sandwiches":
            case "bread and sandwich":
            case "breads and sandwiches":
                showBreadList();
                break;
            case "icecream":
            case "icecreams":
            case "ice": 
            case "cream":
            case "frozen dessert":
            case "frozen desserts":
            case "cold dessert":
            case "cold desserts":
                showIcecreamList();
                break;
            case "drink":
            case "drinks":
            case "beverage":
            case "beverages":
            case "water":
                showDrinkList();
                break;
            case "all":
            case "all items":
            case "everything":
            case "the whole menu":
                showCakeList();
                showBreadList();
                showIcecreamList();
                showDrinkList();
                break;
            default:
                alert("We found no items that are called '" + keywords.value + "' in the list... \nPlease try again!");
        };
    } else if (option.value == "itemName") {

    } else if (option.value == "priceTag") {

    };
};