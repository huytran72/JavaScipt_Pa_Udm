'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Percy';
calcAge(1991);
// console.log(age);
// printAge();