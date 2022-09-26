class Item {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    };
};

const TABLESIZE = 5;
let tableLimit, displayList = false;

let cakeArr = [(new Item("Chocolate Cake", "25.75 USD", randomID())),
(new Item("Strawberry Cake", "30.15 USD", randomID())),
(new Item("Cheese Cake", "35.45 USD", randomID())),
(new Item("Matcha Cake", "48.20 USD", randomID())),
(new Item("Golden Cake", "45.00 USD", randomID()))
];

let breadArr = [(new Item("Banh Mi Sandwich", "2.55 USD", randomID())),
(new Item("Hamburger and Fries", "3.25 USD", randomID())),
(new Item("Katsu Sandwich", "5.00 USD", randomID())),
(new Item("Fruit Sandwich", "3.50 USD", randomID())),
(new Item("The Big Boss", "6.00 USD", randomID()))
];

let icecreamArr = [(new Item("Vanilla & Chocolate", "1.75 USD", randomID())),
(new Item("Strawberry & Blueberry", "2.00 USD", randomID())),
(new Item("Matcha Red Bean Paste", "5.25 USD", randomID())),
(new Item("Tropical Trophy", "3.50 USD", randomID()))
];

let drinkArr = [(new Item("Blue Marine", "2.25 USD", randomID())),
(new Item("Red Sunset", "2.25 USD", randomID())),
(new Item("Boba Milktea", "1.35 USD", randomID())),
(new Item("Cream Cheese Milktea", "1.50 USD", randomID())),
(new Item("Cookie Shake", "2.00 USD", randomID()))
];

function showList() {
    let board = document.getElementsByClassName("productList");
    let i = 0, row = col = 1;
    let grid = "<table id='myBoard' height='400px' width='400px' cellspacing='0' cellpadding='10px'>";
    while (i < cakeArr.length) {
        while (row <= cakeArr.length || col < TABLESIZE) {
            grid += "<tr>" //<img class='iconImage' src='image\menu\' + cakeArr[i].name + '.png' alt='GitHub'>;
            col++, i++;
            console.log(cakeArr[i].name);
        };
        grid += "</tr>";
        col = 1, row++;
    };
    grid += "</table>";
    board.innerHTML = grid;
};

function randomID() {
    let i;
    for (i = 0; i <= TABLESIZE; i++) {
        return "20220927" + i;
    }; 
};

showList();