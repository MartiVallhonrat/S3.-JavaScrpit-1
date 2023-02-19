// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    debugger

    for(let i = 0; i < products.length; i++) {

        if(products[i].id == id) {
            cartList.push(products[i]);
        };

    }
    
    console.log(cartList)
}

// Exercise 2
function cleanCart() {
    cartList = []

    console.log(cartList)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total = 0
    
    for(let i = 0; i < cartList.length; i++) {

        total = total + (cartList[i].price)
    }

    console.log(total)
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for(let i = 0; i < cartList.length; i++) {

        const id = cartList[i].id ;
        const foundIndexCart = cart.findIndex(element => element.id == id)

        if (foundIndexCart == (-1)) {

            cart.push(cartList[i])

            const foundIndexCart2 = cart.findIndex(element => element.id == id)

            cart[foundIndexCart2].quantity = 1;

        } else {

            cart[foundIndexCart].quantity = cart[foundIndexCart].quantity + 1;
        }
    }

    console.log(cart)
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    debugger

    for(let i = 0; i < cart.length; i++) {

        cart[i].subtotalWithDiscount = (cart[i].price * cart[i].quantity)
    }
    
    const foundIndexOil = cart.findIndex(element => element.name == "cooking oil")
    const foundIndexCake = cart.findIndex(element => element.name == "Instant cupcake mixture")

    if (foundIndexOil !== -1) {

        if(cart[foundIndexOil].quantity >= 3) {

            cart[foundIndexOil].subtotalWithDiscount = (10 * cart[foundIndexOil].quantity)
        }
    }

    if (foundIndexCake !== -1) {

        if(cart[foundIndexCake].quantity >= 10) {

            cart[foundIndexCake].subtotalWithDiscount = ((cart[foundIndexCake].price * cart[foundIndexCake].quantity) - ((cart[foundIndexCake].price * cart[foundIndexCake].quantity) / 3))
        }
    }
    console.log(cart)
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    debugger
    let html = ""

    for(let i = 0; i < cart.length; i++) {

        html += "<tr>";
        html += "<th scope='row'>" + cart[i].name + "</th>";
        html += "<td>" + "$" + cart[i].price + "</td>";
        html += "<td>" + cart[i].quantity + "</td>";
        html += "<td>" + "$" + cart[i].subtotalWithDiscount + "</td>";
        html += "</tr>";
    }

    document.getElementById("cart_list").innerHTML = html
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    const foundIndexCart = cart.findIndex(element => element.id == id)

    if (foundIndexCart == (-1)) {

        const foundIndexProducts = products.findIndex(element => element.id == id)

        cart.push(products[foundIndexProducts])

        const foundIndexCart2 = cart.findIndex(element => element.id == id)

        cart[foundIndexCart2].quantity = 1;

    }

    if(foundIndexCart !== (-1)) {

        cart[foundIndexCart].quantity = cart[foundIndexCart].quantity + 1;
    }

    applyPromotionsCart()
    refreshNumber()
    
    console.log(cart)
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    debugger
    const foundIndexCart = cart.findIndex(element => element.id == id);

    if (foundIndexCart !== -1) {

        if (cart[foundIndexCart].quantity == 1) {

            cart.splice(foundIndexCart, foundIndexCart);
        }

        if (cart[foundIndexCart].quantity > 1) {

            cart[foundIndexCart].quantity = (cart[foundIndexCart].quantity - 1);
        }
    }
    
    
    applyPromotionsCart()
    refreshNumber()

    console.log(cart);
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}



function refreshNumber(){
    document.getElementById("count_product").innerHTML = cart.length;
}