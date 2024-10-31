// Importing modules
import {addToCart, totalPrice, totalQuantity} from './shoppingCart.js';
console.log('Importing modules');
console.log(shippingCost);


addToCart('bread', 5);
console.log(totalPrice, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

// import add, {cart} from './shoppingCart.js';
// add('pizza', 2);
// console.log(price, cart);

import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);