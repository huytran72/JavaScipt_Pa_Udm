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

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge1 = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge1(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(1991);


const percy = {
    year: 1993,
    calcAge1: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
};
percy.calcAge1();



const matilda = {
    year: 2018,
};
matilda.calcAge1 = percy.calcAge1;
matilda.calcAge1();

const f = percy.calcAge1;

const percy1 = {
    firstName: 'Percy',
    year: 1993,
    calcAge1: function() {
        console.log(this);
        console.log(2037 - this.year);

        const self = this;
        const isMillenial = function() {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },

    greet1: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};
percy1.greet();
console.log(this.firstName);
percy1.greet1();
percy1.calcAge1();

//Arguments keyword
const addExpr1 = function(a,b) {
    console.log(arguments);
    return a+b;
};
addExpr1(2,5);
addExpr1(2,5,8,12);

//Does not work in array function
// var addArrow1 = (a,b) => {
//     console.log(arguments);
//     return a+b;
// };
// addArrow1(2,5,8);


//Primitives vs objects (Primitive vs Reference types)
console.log('------------------');
console.log('Primitives vs objects (Primitive vs Reference types)');

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);