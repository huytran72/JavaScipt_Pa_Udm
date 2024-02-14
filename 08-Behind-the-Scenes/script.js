'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            
            //Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            //Reassigning outer scope's variable
            output = 'NEW OUTPUT!'

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);

    }
    printAge();

    return age;
}

const firstName = 'Percy';
calcAge(1991);
// console.log(age);
// printAge();


var me = 'Percy';
let job = 'student';
const year = 1991;

//Functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b) {
    return a +b;
}

const addExpr = function(a,b) {
    return a+b;
}

const addArrow = (a,b) => a+b;

//Example
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}