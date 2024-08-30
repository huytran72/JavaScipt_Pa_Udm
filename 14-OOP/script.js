'use strict';

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    // Never do this
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
    }

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
}
Person.hey();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode



// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));

// .prototypeOfLinkedObjects


Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matida.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// {calcAge: ƒ, constructor: ƒ}
// calcAge: ƒ ()

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Coding Challenge #1

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;

};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.accelerate = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();


// ES6 Classes
// class expression
// const PersonCl = class {}

// class declaration