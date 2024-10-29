// Importing modules
console.log('shoppingCart.js');

const shippingCost = 10;
const cart = [];

const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};       