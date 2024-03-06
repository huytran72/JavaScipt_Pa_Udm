'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function(obj) {
    console.log(obj);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


//Switching the variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


[main, secondary] = [secondary, main];
console.log(main, secondary);


//Receive 2 return values from a function
const [start, mainCourse] = restaurant.order(2,0);
console.log(start, mainCourse);


const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


//Assignment
// const [firstBook, secondBook] = books;
// const [, , thirdBook] = books;
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;


// 1.Destructuring
//Rest Pattern and Parameters
console.log('-----------------------');
console.log('Rest Pattern and Parameters');

const arr2 = [1, 2, ...[3, 4]];
const [e, f, ...others] = [1, 2, 3, 4, 5];
console.log(e, f, others);
console.log(arr2);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,  risotto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);


// 2. Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
}
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x1 = [23, 5, 7];
add(...x1);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');



//Destructuring Objects
console.log('-----------------------');
console.log('Destructuring Objects');

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a1 = 111;
let b1 = 999;
const obj = {a1: 23, b1: 7, c1:14};
({a1,b1} = obj);
console.log(a1, b1);

// Nested objects
const {fri} = openingHours;
console.log(fri);


restaurant.orderDelivery ({
  time: '22:30',
  address: 'Via de Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});


//The Spread Operators
console.log('---------------');
console.log('The Spread Operators');

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

const newArr1 = [1, 2, ...arr1];
console.log(newArr1);

console.log(...newArr1);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];


// Join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);


// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Percy';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
console.log('j','o');
// console.log(`${...str} Shin`);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


//Short Circuiting
console.log('------------------');
console.log('Short Circuiting');


//Use any data type, return any data type, short-circuiting
console.log('------OR------');
console.log(3 || 'Percy');
console.log('' || 'Percy');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10
console.log(guest2);


console.log('--------AND-------');
console.log(0 && 'Percy');
console.log(7 && 'Percy');
console.log('Hello' && 23 && null && 'Percy');

if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


//The Nullish Coalescing Operator
console.log('---------------');
console.log('The Nullish Coalescing Operator');

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


console.log('-------------------');
console.log('Coding Challenge #1');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borusia Dounmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Abala',
      'Davies',
      'Kimich',
      'Goezrtka',
      'Davis',
      'Gnarby'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Hazard'
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw. team2);