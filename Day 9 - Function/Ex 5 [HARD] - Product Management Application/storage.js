class Item {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    };
};

const TABLESIZE = 5;
let timeClicked = itemCount = 0;
let keywords = document.getElementById("searchBar"),
    option = document.getElementById("searchOption");

let cakeArr = [(new Item("Chocolate Cake", 25.75, giveID("cake"))),
(new Item("Strawberry Cake", 30.15, giveID("cake"))),
(new Item("Blueberry Cheesecake", 35.45, giveID("cake"))),
(new Item("Matcha Layer Cake", 48.20, giveID("cake"))),
(new Item("The Silky Milky", 46.00, giveID("cake"))),
];

let breadArr = [(new Item("Grilled Pork Sandwich", 2.55, giveID("bread"))),
(new Item("Shrimp Burger", 3.25, giveID("bread"))),
(new Item("Katsu Sando", 5.00, giveID("bread"))),
(new Item("The Big Boss", 6.00, giveID("bread"))),
];

let icecreamArr = [(new Item("Vanilla & Chocolate", 1.75, giveID("icecream"))),
(new Item("Strawberry & Blueberry", 2.00, giveID("icecream"))),
(new Item("Matcha Red Bean Paste", 4.25, giveID("icecream"))),
(new Item("The Mango Trophy", 6.50, giveID("icecream"))),
];

let drinkArr = [(new Item("Blue Marine", 2.25, giveID("drinks"))),
(new Item("Red Sunset", 2.25, giveID("drinks"))),
(new Item("Boba Milktea", 1.35, giveID("drinks"))),
(new Item("Cream Cheese Coffee", 1.50, giveID("drinks"))),
(new Item("Cookie Shake", 2.00, giveID("drinks"))),
];

function giveID(listArr) {
    let idCode = idnumber = zeroDigit = "";
    if (itemCount < 9) {
        zeroDigit = "0";
    };
    switch (listArr) {
        case "cake":
            itemCount++;
            idCode = "CKE-";
            idnumber = (zeroDigit + itemCount);
            break;
        case "bread":
            itemCount++;
            idCode = "BRD-";
            idnumber = (zeroDigit + itemCount);
            break;
        case "icecream":
            itemCount++;
            idCode = "ICE-";
            idnumber = (zeroDigit + itemCount);
            break;
        case "drinks":
            itemCount++;
            idCode = "DNK-";
            idnumber = (zeroDigit + itemCount);
            break;
        default:
            alert("Error: No equivalent categories have been found");
            break;
    };
    return idCode + idnumber;
};