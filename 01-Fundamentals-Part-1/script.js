let js = 'amazing';
console.log(40+8+23-10);

console.log("Crown");
console.log(25);

let firstName = "Crown";
console.log(firstName); 
console.log(firstName); 
console.log(firstName); 

//Variable name conventions
let crown_kenny = "CK";
let $func = 27;

let PI = 3.1416;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let country = 'America';
let continent = 'North_America';
let population = 300;

console.log(country);
console.log(continent);
console.log(population);

//Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 'Crown');
console.log(typeof 25);

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null);
console.log('----------------------');
// Assignments
let isIsland = true;
let language;
language = 'English';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


//Const and Var
console.log('-----------------------');
console.log('Const and Var');

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer1';
job = 'teacher1';

lastName = 'Scheme';
console.log(lastName);



//Operators
console.log('---------------------');
console.log('Operators');

const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

const ageRon = now - 2020;
console.log(ageRon);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const fisrtName_1 = 'Lili';
const lastName_1 = 'Titi';
console.log(fisrtName_1 + ' ' + lastName_1);

let x = 10 +5;  // = 15
x += 10;  // x = x + 10
x *= 4;  // x = x * 4 = 100
x++;      // x = x + 1
x--;       
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAage = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


//Operator Precdence
console.log('------------------');
console.log('Operator Precedence');

console.log(25-10-5);

let y;
let z;

y = z = 25-10-5;
console.log(y, z);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

//Assignment
console.log(population/2);
population++;
console.log(population);
const population_Finland = 6;
console.log(population > population_Finland);
const population_average = 33;
console.log(population < population_average);
const description = country + ' is in ' + continent + ', and its ' + 
                    population + ' million people speak ' + language;
console.log(description);

//Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
console.log('BMI of Mark is ' + BMIMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('BMI of John is ' + BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


//Strings and Template Literals
console.log('--------------------');
console.log('Strings and Template Literals');

const firstName_2 = 'Jonas';
const job_2 = 'teacher';
const birthYear_2 = 1991;
const year_2 = 2037;

const jonas = "I'm " + firstName_2 + ', a ' + (year_2 - birthYear_2) + ' years old ' + job_2 + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName_2}, a ${year_2 - birthYear_2} years old ${job_2}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

//Assignment
const description_1 = `${country} is in ${continent} , and its ${population} million people speak ${language}`;

// country + ' is in ' + continent + ', and its ' + 
//                     population + ' million people speak ' + language;
console.log(description_1);



//Taking Decisions: IF/ELSE STATEMENTS
console.log('-----------------------');
console.log('Taking Decisions: IF/ELSE STATEMENTS');

const age_3 = 15;
// const isOldEnough = age_3 >= 18;

if(age_3 >= 18) {
    console.log('Sarah can start driving license 🚕');
}else {
    const yearsLeft = 18 - age_3;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😂`);
}

const birthYear_3 = 1998;
let century;
if(birthYear_3 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);