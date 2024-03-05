//main application app.js

//import necessary modules
const product = require('./product');
const cart = require('./cart');
const calculateTotal = require('./order');

//add products to the cart
cart.addToCart(product[0]);
cart.addToCart(product[2]);

//display the cart items
console.log('cart items', cart.getCartItems());

//calculate and display the order 
const totalAmount = calculateTotal(cart.getCartItems());
console.log('Total order amount', totalAmount);