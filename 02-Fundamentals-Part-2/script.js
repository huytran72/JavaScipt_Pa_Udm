//Activating Strict Mode
console.log('Activating Strict Mode');

'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;


//Functions
console.log('------------------');
console.log('Functions');

function logger() {
    console.log('My name is Kenny');
}

//calling / running/ invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Assignment
function describeCountry(country, population, capitalCity) {
    const result = `${country} has ${population} million people and its capital city is ${capitalCity}.`
    return result;
}

console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('America', 300, 'NewYork'));
console.log(describeCountry('Japan', 99, 'Tokyo'));


//Function Declarations VS Expressions
console.log('----------------------------');
console.log('Function Declarations VS Expressions');


//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);