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

//Assignment
function percentageOfWorld1(population1) {
    return (population1/7900)*100;
}

console.log(percentageOfWorld1(1441));

const country1 = percentageOfWorld1(10);
const country2 = percentageOfWorld1(300);
const country3 = percentageOfWorld1(1500);
console.log(country1, country2, country3);

const percentageOfWorld2 = function(population1) {
    return (population1/7900)*100;
}
console.log(percentageOfWorld2(1441));

const country4 = percentageOfWorld2(10);
const country5 = percentageOfWorld2(300);
const country6 = percentageOfWorld2(1500);
console.log(country4, country5, country6);


//Arrow Functions
console.log('------------------------');
console.log('Arrow Functions');

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991, 'Kenny'));
console.log(yearsUntilRetirement(1980, 'Jenny'));


//Assignment
const percentageOfWorld3 = (population1) => (population1/7900)*100;
console.log(percentageOfWorld3(1441));


//Functions Calling Other Functions
console.log('-----------------------');
console.log('Functions Calling Other Functions');

function cutFruitPieces(fruit) {
    return fruit *4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

//Assignment

function percentageOfWorld1(population1) {
    return (population1/7900)*100;
}

function describePopulation(country7, population2) {
    const pop = percentageOfWorld1(population2);
    return `${country7} has ${population2} million people, which is about ${pop}% of the world.`;
}

const descAmerica = describePopulation('America', 300);
const descJapan = describePopulation('Japan', 99);
const descEngland = describePopulation('England', 150);

console.log(descAmerica, descJapan, descEngland);


//Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
console.log(calcAverage(3,4,5));
    
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= (avgKoalas*2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins*2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins,scoreKoalas);

//Introduction to Arrays
console.log('---------------------');
console.log('Introduction to Arrays');

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2024);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(years1.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName,'Jonas', 'Schime', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const y = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(y));
console.log(calcAge(y[0]));
console.log(calcAge(y[1]));
console.log(calcAge(y[2]));
