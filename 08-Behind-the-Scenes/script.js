'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        var millenial = true;

        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if(birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
        // console.log(str);
        console.log(millenial);

    }
    printAge();

    return age;
}

const firstName = 'Percy';
calcAge(1991);
// console.log(age);
// printAge();