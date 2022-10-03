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

let cakeArr = [(new Item("Chocolate Cake", 25.75, randomID())),
(new Item("Strawberry Cake", 30.15, randomID())),
(new Item("Blueberry Cheesecake", 35.45, randomID())),
(new Item("Matcha Layer Cake", 48.20, randomID())),
(new Item("The Silky Milky", 46.00, randomID())),
];

let breadArr = [(new Item("Grilled Pork Sandwich", 2.55, randomID())),
(new Item("Shrimp Burger", 3.25, randomID())),
(new Item("Katsu Sando", 5.00, randomID())),
(new Item("The Big Boss", 6.00, randomID())),
];

let icecreamArr = [(new Item("Vanilla & Chocolate", 1.75, randomID())),
(new Item("Strawberry & Blueberry", 2.00, randomID())),
(new Item("Matcha Red Bean Paste", 4.25, randomID())),
(new Item("The Mango Trophy", 5.00, randomID())),
];

let drinkArr = [(new Item("Blue Marine", 2.25, randomID())),
(new Item("Red Sunset", 2.25, randomID())),
(new Item("Boba Milktea", 1.35, randomID())),
(new Item("Cream Cheese Coffee", 1.50, randomID())),
(new Item("Cookie Shake", 2.00, randomID())),
];

function randomID() {
    let idcode = "20220928"
    let i = Math.floor(Math.random() * 100);
    if (i < 10) {
        i = "0" + i;
    };
    return idcode += i;
};

function selectiveDisplay(listID, listArr) {
    let itemList = document.getElementById(listID);
    let a = b = c = d = 0, colA = colB = colC = colD = 1;
    let grid = "<table class='productList'><tr>";
    while (colA <= TABLESIZE && a < listArr.length) {
        grid += "<td><img class='itemImage' src='image\\menu\\" + listArr[a].name + ".png' alt='Item Picture'></td>"
        colA++, a++;
    };
    grid += "</tr>"

    while (colB <= TABLESIZE && b < listArr.length) {
        grid += "<td>" + listArr[b].name + "</td>";
        colB++, b++;
    };
    grid += "</tr>"

    while (colC <= TABLESIZE && c < listArr.length) {
        let zeroDigit;
        if ((listArr[c].price * 10) % 10 == 0) {
            zeroDigit = ".00";
        } else if ((listArr[c].price * 100) % 10 == 0) {
            zeroDigit = "0";
        } else {
            zeroDigit = "";
        };
        grid += "<td>" + listArr[c].price + zeroDigit + " USD</td>";
        colC++, c++;
    };
    grid += "</tr>"

    while (colD <= TABLESIZE && d < listArr.length) {
        grid += "<td>ID: " + listArr[d].id + "</td>";
        colD++, d++;
    };
    grid += "</tr></table>";
    itemList.innerHTML = grid;
};

function hideList() {
    const targetedClass = document.querySelectorAll(".productList");
    targetedClass.forEach(target => {
        target.remove();
    });
};

function displayList() {
    timeClicked++;
    if (timeClicked % 2 != 0) {
        selectiveDisplay("cakeList", cakeArr);
        selectiveDisplay("breadList", breadArr);
        selectiveDisplay("icecreamList", icecreamArr);
        selectiveDisplay("drinkList", drinkArr);
    } else if (timeClicked % 2 == 0) {
        hideList();
    };
    console.log("Display button clicked:" + timeClicked);
};

function searchItem() {
    let allLower = (keywords.value).toLowerCase();
    if (option.value == "category") {
        hideList();
        switch (allLower) {
            case "cake":
            case "cakes":
            case "pastry":
            case "pastries":
            case "cake & pastry":
            case "cakes & pastries":
            case "cake and pastry":
            case "cakes and pastries":
                selectiveDisplay("cakeList", cakeArr);
                break;
            case "bread":
            case "breads":
            case "sandwich":
            case "sandwiches":
            case "bread & sandwich":
            case "breads & sandwiches":
            case "bread and sandwich":
            case "breads and sandwiches":
                selectiveDisplay("breadList", breadArr);
                break;
            case "icecream":
            case "icecreams":
            case "ice":
            case "cream":
            case "frozen dessert":
            case "frozen desserts":
            case "cold dessert":
            case "cold desserts":
                selectiveDisplay("icecreamList", icecreamArr);
                break;
            case "drink":
            case "drinks":
            case "beverage":
            case "beverages":
            case "water":
                selectiveDisplay("drinkList", drinkArr);
                break;
            case "all":
            case "all items":
            case "everything":
            case "the whole menu":
                selectiveDisplay("cakeList", cakeArr);
                selectiveDisplay("breadList", breadArr);
                selectiveDisplay("icecreamList", icecreamArr);
                selectiveDisplay("drinkList", drinkArr);
                break;
            default:
                alert("We found no items that are called '" + keywords.value + "' in the list... \nPlease try again!");
        };

    } else if (option.value == "itemName") {
        hideList();
        for (var i = 0; i < cakeArr.length; i++) {
            if (cakeArr[i].name == keywords.value) {
                let cakeArrMini = [];
                cakeArrMini.push(cakeArr[i]);
                selectiveDisplay("cakeList", cakeArrMini);
            };
        };

        for (var i = 0; i < breadArr.length; i++) {
            if (breadArr[i].name == keywords.value) {
                let breadArrMini = [];
                breadArrMini.push(breadArr[i]);
                selectiveDisplay("breadList", breadArrMini);
            };
        };

        for (var i = 0; i < icecreamArr.length; i++) {
            if (icecreamArr[i].name == keywords.value) {
                let icecreamArrMini = [];
                icecreamArrMini.push(icecreamArr[i]);
                selectiveDisplay("icecreamList", icecreamArrMini);
            };
        };

        for (var i = 0; i < drinkArr.length; i++) {
            if (drinkArr[i].name == keywords.value) {
                let drinkArrMini = [];
                drinkArrMini.push(drinkArr[i]);
                selectiveDisplay("drinkList", drinkArrMini);
            };
        };

    } else if (option.value == "priceTag") {
        hideList();
        
    };
};