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

const res = await fetch('https://api.chucknorris.io/jokes/random')
    .then(responde => responde.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

const data = await res.json();
console.log(data);

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return {title: data[0].title, body: data[0].body};
};

const lastPost = getLastPost();
console.log(lastPost);

lastPost.then(data => console.log(data));