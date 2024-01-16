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

fruitProcessor(5, 0);