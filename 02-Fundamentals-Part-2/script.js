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
console.log(calcAge(y[y.length-1]));

const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length-1])];
console.log(ages);



//Basic Array Operators (Meathods)
console.log('-----------------');
console.log('Basic Array Operators(Methods)');

//Add elements
const friends_1 = ['Michael', 'Steven', 'Peter'];
const newLength = friends_1.push('Jay');
console.log(friends_1);
console.log(newLength);

friends_1.unshift('John');
console.log(friends_1);

//Remove elements
friends_1.pop();  //Last
console.log(friends_1);

const popped = friends_1.pop();
console.log(popped);

friends_1.shift();  //First
console.log(friends_1);

console.log(friends_1.indexOf('Steven'));
console.log(friends_1.indexOf('Bob'));

friends_1.push(23);
console.log(friends_1.includes('Steven'));
console.log(friends_1.includes('Bob'));
console.log(friends_1.includes('23'));
console.log(friends_1.includes(23));
console.log(friends_1);

if(friends_1.includes('Steven')) {
    console.log('You have a friend called Peter');
}

//Challenge #2
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);



//Introduction to Objects
console.log('-----------------');
console.log('Introduction to Objects');

const kennyArray = [
    'Kenny',
    'Tran',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const kenny = {
    firstName: 'Kenny',
    lastName: "Tran",
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


//DOT VS BRACKET NOTATION
console.log('------------------');
console.log('DOT VS BRACKET NOTATION');

const kenny1 = {
    firstName: 'Kenny',
    lastName: "Tran",
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(kenny1);

console.log(kenny1.lastName);
console.log(kenny1['lastName']);

const nameKey = 'Name';
console.log(kenny1['first' + nameKey]);
console.log(kenny1['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Kenny? Choose between firstName, lastName, age, job and friends');

// console.log(kenny1.interestedIn);  //false
// console.log(kenny1[interestedIn]);  //true

// if(kenny1[interestedIn]) {
//     console.log(kenny1[interestedIn]);  //true
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

kenny1.location = 'America';
kenny1['twitter'] = '@kenny';
console.log(kenny1);

//Challenge
console.log(`${kenny1.firstName} has ${kenny1.friends.length} friends, and his best friend is called ${kenny1.friends[0]} `);

//Assignment
const myCountry = {
    country: 'Findland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia']
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, and a captital called ${myCountry.capital}.`);

myCountry.population +=2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


//Object methods
console.log('-----------------');
console.log('Object Methods');

const kenny2 = {
    firstName2: 'Kenny',
    lastName2: "Tran",
    age2: 1991,
    job2: 'teacher',
    friends2: ['Michael', 'Peter', 'Steven'],
    hasDriverLicence2: true,

    calcAge: function() {
        // console.log(this);
        return 2037 - this.age2;
    },

    getSummary: function() {
        return `${this.firstName2} is a ${this.calcAge()}-year old ${kenny2.job}, and he has ${this.hasDriverLicence2 ? 'a' : 'no'} driver's license.`
    }
};

// console.log(kenny2.calcAge(1991));
// console.log(kenny2['calcAge'](1991));
console.log(kenny2.calcAge());
console.log(kenny2.calcAge());
console.log(kenny2.calcAge());

//Challenge
console.log(kenny2.getSummary());


//Assignment
const myCountry1 = {
    country: 'Findland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],

    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}

console.log(myCountry1.describe());
myCountry1.checkIsland();
console.log(myCountry1);


//Challenge #3
console.log('-------Challenge--------');
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.BMI = this.mass/ (this.height * this.height);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass/ (this.height * this.height);
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

if(mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
} else {
    console.log(`${john.fullName}'s BMI(${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
}



//Iteration: The For Loop
console.log('------------------------');
console.log('The For Loop');

console.log('Lifting weights repetation 1 🏋️‍♀️');
console.log('Lifting weights repetation 2 🏋️‍♀️');
console.log('Lifting weights repetation 3 🏋️‍♀️');
console.log('Lifting weights repetation 4 🏋️‍♀️');
console.log('Lifting weights repetation 5 🏋️‍♀️');
console.log('Lifting weights repetation 6 🏋️‍♀️');
console.log('Lifting weights repetation 7 🏋️‍♀️');
console.log('Lifting weights repetation 8 🏋️‍♀️');
console.log('Lifting weights repetation 9 🏋️‍♀️');
console.log('Lifting weights repetation 10 🏋️‍♀️');


//for loop keeps running while condition is TRUE
for( let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetation ${rep} 🏋️‍♀️`);
}

for( let rep = 2; rep <= 10; rep = rep+2) {
    console.log(`Lifting weights repetation ${rep} 🏋️‍♀️`);
}

//Assignment
for(let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}



//Looping Arrays, Breaking, And Continuing
console.log('------------------------');
console.log('Looping Arrays, Breaking, and Continuing');