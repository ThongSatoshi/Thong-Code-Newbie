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
    grid += "</tr>"

    grid += "</table>";
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

    } else if (option.value == "itemID") {
        hideList();
        for (var i = 0; i < cakeArr.length; i++) {
            if (cakeArr[i].id == keywords.value) {
                let cakeArrMini = [];
                cakeArrMini.push(cakeArr[i]);
                selectiveDisplay("cakeList", cakeArrMini);
            };
        };

        for (var i = 0; i < breadArr.length; i++) {
            if (breadArr[i].id == keywords.value) {
                let breadArrMini = [];
                breadArrMini.push(breadArr[i]);
                selectiveDisplay("breadList", breadArrMini);
            };
        };

        for (var i = 0; i < icecreamArr.length; i++) {
            if (icecreamArr[i].id == keywords.value) {
                let icecreamArrMini = [];
                icecreamArrMini.push(icecreamArr[i]);
                selectiveDisplay("icecreamList", icecreamArrMini);
            };
        };

        for (var i = 0; i < drinkArr.length; i++) {
            if (drinkArr[i].id == keywords.value) {
                let drinkArrMini = [];
                drinkArrMini.push(drinkArr[i]);
                selectiveDisplay("drinkList", drinkArrMini);
            };
        };
    };
};

function addItems() {
    let itemName, itemPrice, category, howManyCount = 1, howMany = prompt("How many items would you like to add in the list? \nPlease type your answer below.");
    while (isNaN(howMany) || howMany <= 0 || howMany > 10 || howMany == "") {
        alert("Error: Invalid number of items was inputted. Please try again!");
        howMany = prompt("How many items would you like to add in the list? \nPlease type your answer below.");
    };
    while (howMany > 0) {
        itemName = prompt("What is this item's name? \nPlease assign it! [Item no." + howManyCount + "]");
        while (itemName == "") {
            alert("Error: Cannot leave item's name empty. Please input it!");
            itemName = prompt("What is this item's name? \nPlease assign it! [Item no." + howManyCount + "]");
        };
        itemPrice = prompt("What is this item's price? \nPlease assign it! [Item no." + howManyCount + "]");
        while (isNaN(itemPrice) || itemPrice == "") {
            alert("Error: Invalid price tag was inputted. Please try again!");
            itemPrice = prompt("What is this item's price? \nPlease assign it! [Item no." + howManyCount + "]");
        };
        category = prompt("Which category does this item belong to? \nPlease type in the category name! [Item no." + howManyCount + "]" +
            "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
        while (category != "cake" && category != "bread" && category != "icecream" && category != "drinks") {
            alert("Error: Invalid category name was inputted. Please try again!");
            category = prompt("Which category does this item belong to? \nPlease type in the category name! [Item no." + howManyCount + "]" +
                "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
        };

        switch (category) {
            case "cake":
                cakeArr.push((new Item(itemName, itemPrice, giveID(category))));
                break;
            case "bread":
                breadArr.push((new Item(itemName, itemPrice, giveID(category))));
                break;
            case "icecream":
                icecreamArr.push((new Item(itemName, itemPrice, giveID(category))));
                break;
            case "drinks":
                drinkArr.push((new Item(itemName, itemPrice, giveID(category))));
                break;
            default:
                alert("Error: Cannot add the requested items. Please try again!");
                break;
        };

        howMany--, howManyCount++;
    };
};

function editItems() {
    let i, itemName, itemID, category, ischangeName, ischangePrice, changeRequest;
    let changeReference = prompt("Do you want to find the target items via its names? Or its IDs? \nPlease type your answer below. \nFor reference, type 'name' for Item Names and 'id' for Item IDs");
    while (changeReference == "" || changeReference != "name" && changeReference != "id") {
        alert("Error: Invalid value was inputted. We do not support this modification reference yet! \nFor reference, type 'name' for Item Names and 'id' for Item IDs");
        changeReference = prompt("Do you want to find the target items via its names? Or its IDs? \nPlease type your answer below. \nFor reference, type 'name' for Item Names and 'id' for Item IDs");
    };

    switch (changeReference) {
        case "name":
            itemName = prompt("What is the item's name that you want to modify? \nPlease type your answer below!");
            while (itemName == "") {
                alert("Error: Cannot leave item's name empty. Please input it!");
                itemName = prompt("What is the item's name that you want to modify? \nPlease type your answer below!");
            };

            category = prompt("Which category does this item belong to? \nPlease type in the category name!" +
                "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
            while (category != "cake" && category != "bread" && category != "icecream" && category != "drinks") {
                alert("Error: Invalid category name was inputted. Please try again!");
                category = prompt("Which category does this item belong to? \nPlease type in the category name!" +
                    "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
            };

            switch (category) {
                case "cake":
                    for (i = 0; i < cakeArr.length; i++) {
                        if (itemName == cakeArr[i].name) {
                            enableEditor(i, cakeArr, itemName);
                        };
                    };
                    break;
                case "bread":
                    for (i = 0; i < breadArr.length; i++) {
                        if (itemName == breadArr[i].name) {
                            enableEditor(i, breadArr, itemName);
                        };
                    };
                    break;
                case "icecream":
                    for (i = 0; i < icecreamArr.length; i++) {
                        if (itemName == icecreamArr[i].name) {
                            enableEditor(i, icecreamArr, itemName);
                        };
                    };
                    break;
                case "drinks":
                    for (i = 0; i < drinkArr.length; i++) {
                        if (itemName == drinkArr[i].name) {
                            enableEditor(i, drinkArr, itemName);
                        };
                    };
                    break;
                default:
                    alert("Error: Cannot modify the requested items. Please try again!");
                    break;
            };
            break;

        case "id":
            itemID = prompt("What is the item's ID that you want to modify? \nPlease type your answer below!");
            while (itemID == "") {
                alert("Error: Invalid item ID was inputted. Please try again!");
                itemID = prompt("What is the item's ID that you want to modify? \nPlease type your answer below!");
            };

            category = prompt("Which category does this item belong to? \nPlease type in the category name!" +
                "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
            while (category != "cake" && category != "bread" && category != "icecream" && category != "drinks") {
                alert("Error: Invalid category name was inputted. Please try again!");
                category = prompt("Which category does this item belong to? \nPlease type in the category name!" +
                    "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
            };

            switch (category) {
                case "cake":
                    for (i = 0; i < cakeArr.length; i++) {
                        if (itemID == cakeArr[i].id) {
                            enableEditor(i, cakeArr, itemID);
                        };
                    };
                    break;
                case "bread":
                    for (i = 0; i < breadArr.length; i++) {
                        if (itemID == breadArr[i].id) {
                            enableEditor(i, breadArr, itemID);
                        };
                    };
                    break;
                case "icecream":
                    for (i = 0; i < icecreamArr.length; i++) {
                        if (itemID == icecreamArr[i].id) {
                            enableEditor(i, icecreamArr, itemID);
                        };
                    };
                    break;
                case "drinks":
                    for (i = 0; i < drinkArr.length; i++) {
                        if (itemID == drinkArr[i].id) {
                            enableEditor(i, drinkArr, itemID);
                        };
                    };
                    break;
                default:
                    alert("Error: Cannot modify the requested items. Please try again!");
                    break;
            };
            break;

        default:
            alert("We wasn't able to find your requested items. \nPlease double check its names/ids again and try again!");
            break;
    };

    function enableEditor(i, listArr, indicator) {
        ischangeName = confirm("Do you want to change " + itemName + "'s name?");
        if (ischangeName == true) {
            changeRequest = "name";
            let changeKeyword = prompt("Please type in this item's new name.");
            while (changeKeyword == "") {
                alert("Error: Cannot leave this item's name blank. \nPlease type in this item's new name!");
                changeKeyword = prompt("Please type in this item's new name.");
            };

            listArr[i].name = changeKeyword;
            alert("Updated " + indicator + "'s " + changeRequest + " successfully!");
        };

        ischangePrice = confirm("Do you want to change " + itemName + "'s price tag?");
        if (ischangePrice == true) {
            changeRequest = "price tag";
            let changeKeyword = prompt("Please type in this item's new price tag.");
            while (isNaN(changeKeyword) || changeKeyword == "") {
                alert("Error: Invalid price tag. \nPlease type in this item's new price tag again!");
                changeKeyword = prompt("Please type in this item's new price tag.");
            };

            listArr[i].price = changeKeyword;
            alert("Updated " + indicator + "'s " + changeRequest + " successfully!");
        };

        if (ischangeName == false && ischangePrice == false) {
            alert(indicator + " didn't get changed anything!");
        };
    };
};

function deleteItems() {
    let i, itemName, itemID, category, howManyCount = 1;
    let howMany = prompt("How many items would you like to remove from the list? \nPlease type your answer below.");
    while (isNaN(howMany) || howMany <= 0 || howMany > 10 || howMany == "") {
        alert("Error: Invalid number of items was inputted. Please try again!");
        howMany = prompt("How many items would you like to remove from the list? \nPlease type your answer below.");
    };
    let removeReference = prompt("Do you want to find the target items via its names? Or its IDs? \nPlease type your answer below. \nFor reference, type 'name' for Item Names and 'id' for Item IDs");
    while (removeReference == "" || removeReference != "name" && removeReference != "id") {
        alert("Error: Invalid value was inputted. We do not support this remove reference yet! \nFor reference, type 'name' for Item Names and 'id' for Item IDs");
        removeReference = prompt("Do you want to find the target items via its names? Or its IDs? \nPlease type your answer below. \nFor reference, type 'name' for Item Names and 'id' for Item IDs");
    };

    switch (removeReference) {
        case "name":
            while (howMany > 0) {
                itemName = prompt("What is the item's name that you want to remove? \nPlease type your answer below! [Item no." + howManyCount + "]");
                while (itemName == "") {
                    alert("Error: Cannot leave item's name empty. Please input it!");
                    itemName = prompt("What is the item's name that you want to remove? \nPlease type your answer below! [Item no." + howManyCount + "]");
                };

                category = prompt("Which category does this item belong to? \nPlease type in the category name! [Item no." + howManyCount + "]" +
                    "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
                while (category != "cake" && category != "bread" && category != "icecream" && category != "drinks") {
                    alert("Error: Invalid category name was inputted. Please try again!");
                    category = prompt("Which category does this item belong to? \nPlease type in the category name! [Item no." + howManyCount + "]" +
                        "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
                };

                switch (category) {
                    case "cake":
                        for (i = 0; i < cakeArr.length; i++) {
                            if (itemName == cakeArr[i].name) {
                                enableTerminator(i, cakeArr, itemName);
                            };
                        };
                        break;
                    case "bread":
                        for (i = 0; i < breadArr.length; i++) {
                            if (itemName == breadArr[i].name) {
                                enableTerminator(i, breadArr, itemName);
                            };
                        };
                        break;
                    case "icecream":
                        for (i = 0; i < icecreamArr.length; i++) {
                            if (itemName == icecreamArr[i].name) {
                                enableTerminator(i, icecreamArr, itemName);
                            };
                        };
                        break;
                    case "drinks":
                        for (i = 0; i < drinkArr.length; i++) {
                            if (itemName == drinkArr[i].name) {
                                enableTerminator(i, drinkArr, itemName);
                            };
                        };
                        break;
                    default:
                        alert("Error: Cannot remove the requested items. Please try again!");
                        break;
                };

                howMany--, howManyCount++;
            };
            break;

        case "id":
            while (howMany > 0) {
                itemID = prompt("What is the item's ID that you want to remove? \nPlease type your answer below! [Item no." + howManyCount + "]");
                while (itemID == "") {
                    alert("Error: Invalid item ID was inputted. Please try again!");
                    itemID = prompt("What is the item's ID that you want to remove? \nPlease type your answer below! [Item no." + howManyCount + "]");
                };

                category = prompt("Which category does this item belong to? \nPlease type in the category name! [Item no." + howManyCount + "]" +
                    "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
                while (category != "cake" && category != "bread" && category != "icecream" && category != "drinks") {
                    alert("Error: Invalid category name was inputted. Please try again!");
                    category = prompt("Which category does this item belong to? \nPlease type in the category name! [Item no." + howManyCount + "]" +
                        "\n For your reference: \n -> Cakes & Pastries is 'cake' \n -> Sandwiches & Breads is 'bread' \n -> Icecreams is 'icecream' \n -> Drinks is 'drinks'");
                };

                switch (category) {
                    case "cake":
                        for (i = 0; i < cakeArr.length; i++) {
                            if (itemID == cakeArr[i].id) {
                                enableTerminator(i, cakeArr, itemID);
                            };
                        };
                        break;
                    case "bread":
                        for (i = 0; i < breadArr.length; i++) {
                            if (itemID == breadArr[i].id) {
                                enableTerminator(i, breadArr, itemID);
                            };
                        };
                        break;
                    case "icecream":
                        for (i = 0; i < icecreamArr.length; i++) {
                            if (itemID == icecreamArr[i].id) {
                                enableTerminator(i, icecreamArr, itemID);
                            };
                        };
                        break;
                    case "drinks":
                        for (i = 0; i < drinkArr.length; i++) {
                            if (itemID == drinkArr[i].id) {
                                enableTerminator(i, drinkArr, itemID);
                            };
                        };
                        break;
                    default:
                        alert("Error: Cannot remove the requested items. Please try again!");
                        break;
                };

                howMany--, howManyCount++;
            };
            break;

        default:
            alert("We wasn't able to find your requested items. \nPlease double check its names/ids again and try again!");
            break;
    };

    function enableTerminator(i, listArr, indicator) {
        listArr.splice(i, 1);
        alert("Removed " + indicator + " successfully!");
    };
};