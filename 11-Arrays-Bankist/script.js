'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

calcDisplaySummary = function (movements) {
  const incomes = movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = movements
  .filter(mov => mov > 0)
  .map(deposit => deposit * 1.2 / 100)
  .filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
}
calcDisplaySummary(account1.movements);





// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE
console.log(arr.splice(2)); // ['c', 'd', 'e'
arr.splice(-1);
arr.splice(1, 2);
console.log(arr); // ['a', 'b']

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// The new at Method
console.log('---------------------------------');
console.log('--- The new at Method ---');

const arr1 = [23, 11, 64];
console.log(arr1[0]); // 23
console.log(arr1.at(0)); // 11

// gettting the last element
console.log(arr1[arr1.length - 1]); // 64
console.log(arr1.slice(-1)[0]); // 64
console.log(arr1.at(-2)); // 11

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// Looping Arrays: forEach
console.log('---------------------------------');
console.log('--- Looping Arrays: forEach ---');

// forEach
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements1.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('--- FOREACH ---');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  } 
} );

// forEach with Maps and Sets
console.log('---------------------------------');
console.log('--- forEach with Maps and Sets ---');

// Map
const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
}
);

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);  // Set(3) {"USD", "GBP", "EUR"}
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
}
);


// Coding Challenge #1
console.log('---------------------------------'); 
console.log('--- Coding Challenge #1 ---');

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorected = dogsJulia.slice();
  dogsJuliaCorected.splice(0, 1);
  dogsJuliaCorected.splice(-2);
  // dogsJuliaCorected.slice(1, 3);
  console.log(dogsJuliaCorected);
  const dogs = dogsJuliaCorected.concat(dogsKate);
  console.log(dogs);

  // "Dog number 1 is an adult, and is 5 years old"
  dogs.forEach(function (dog, i) {
    const message = dog >= 3 ? `an adult, and is ${dog} years old` : `still a puppy 🐶`;
    console.log(`Dog number ${i + 1} is ${message}`);
  });
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
}

// Data Transformation: Map, Filter, Reduce
console.log('---------------------------------');
console.log('--- Data Transformation: Map, Filter, Reduce ---');

// Map Method
console.log('---------------------------------');
console.log('--- Map Method ---');

const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);


console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescriptions);


// Computing usernames
console.log('---------------------------------');
console.log('--- Computing usernames ---');

const user = 'Steven Thomas Williams'; // stw
const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
console.log(username);


// Filter Method
console.log('---------------------------------');
console.log('--- Filter Method ---');

const deposits = movements.filter(function (mov) {
  return mov > 0;
}
);

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
}
);

console.log(withdrawals);



// Reduce Method
console.log('---------------------------------');
console.log('--- Reduce Method ---');

console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  balanclbalancece.textContent = `${balance} EUR`;
  console.log(balance);
}
calcDisplayBalance(account1.movements);



// Maximum value
console.log('---------------------------------');
console.log('--- Maximum value ---');

const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);




// Coding Challenge #2
console.log('---------------------------------');
console.log('--- Coding Challenge #2 ---');

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  console.log(average);

  return average;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);




// The Magic of Chaining Methods
console.log('---------------------------------');
console.log('--- The Magic of Chaining Methods ---');

const eurToUsd1 = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd1)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);






// Coding Challenge #3
console.log('---------------------------------');
console.log('--- Coding Challenge #3 ---');

const calcAverageHumanAge1 = function (ages) {
  const average = ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(average);
}

calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);





// The find Method
console.log('---------------------------------');
console.log('--- The find Method ---');

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


//Implementing the Login
console.log('---------------------------------');
console.log('--- Implementing the Login ---');

//Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => { acc.owner === inputLoginUsername.value });
  console.log('LOGIN');
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
  // Display UI and message
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity = 100;


  // Clear input fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();


  // Display movements
    displkayMovements(currentAccount.movements);


  // Display balance
  calcDisplayBalance(currentAccount.movements);


  // Display summary
  calcDisplaySummary(currentAccount.movements);
  }
});


// Implementing Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.owner === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receiverAccount);

  if (amount > 0 && receiverAccount && currentAccount.balance >= amount && receiverAccount?.owner !== currentAccount.owner) {
    console.log('Transfer valid');
  }






// The findIndex Method
console.log('---------------------------------');
console.log('--- The findIndex Method ---');

console.log(movements);
const index = movements.findIndex(mov => mov === 450);
console.log(index);

// Some and Every
console.log('---------------------------------');
console.log('--- Some and Every ---');

console.log(movements);
console.log(movements.includes(-130));

// Some: Condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every: Condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// Flat and FlatMap
console.log('---------------------------------');
console.log('--- Flat and FlatMap ---');

const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr3.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flatMap
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance1);

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// Sorting Arrays
console.log('---------------------------------');
console.log('--- Sorting Arrays ---');

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }
// );

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// }
// );

movements.sort((a, b) => b - a);
console.log(movements);

// More ways
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].sort((a, b) => a - b));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].sort((a, b) => b - a));

const x = new Array(7).fill(1);
console.log(x);
x.fill(23, 3, 5);
console.log(x);

const y = [1, 2, 3, 4, 5];
console.log(y);

const z = Array.from({ length: 7 }, () => 1);
console.log(z);

const w = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(w);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);
}
);

// Array Methods Practice
console.log('---------------------------------');
console.log('--- Array Methods Practice ---');

// 1. Calculate the total deposits in bank
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);
console.log(bankDepositSum);

// 2. Count how many deposits in the bank with at least 1000  in it
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)
  .length;
console.log(numDeposits1000);

// 3. Create an object which contains the sum of deposits and withdrawals
const { deposits1, withdrawals1 } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    cur > 0 ? sums.deposits1 += cur : sums.withdrawals1 += cur;
    return sums;
  }
  , { deposits1: 0, withdrawals1: 0 });
console.log(deposits, withdrawals);

// 4. This is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitalize(word))
    .join(' ');
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Coding Challenge #4
console.log('---------------------------------');
console.log('--- Coding Challenge #4 ---');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
}
);

// Working with Arrays: A Recap
console.log('---------------------------------');
console.log('--- Working with Arrays: A Recap ---');

// Simple Array Methods
let arr4 = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr4.slice(2));
console.log(arr4.slice(2, 4));
console.log(arr4.slice(-2));

var _arr4$splice = arr4.splice(2),
    _arr4$splice2 = _slicedToArray(_arr4$splice, 3),
    x1 = _arr4$splice2[0],
    y1 = _arr4$splice2[1],
    z1 = _arr4$splice2[2];

console.log(x1, y1, z1);
console.log(arr4);

// REVERSE
var arr5 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr5.reverse());
console.log(arr5);

// CONCAT
var letters1 = arr4.concat(arr5);
console.log(letters1);
console.log([].concat(arr4, arr5));

// JOIN
console.log(letters1.join(' - '));

// Looping Arrays: forEach
console.log('--- Looping Arrays: forEach ---');
var movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (var _i = 0; _i < movements2.length; _i++) {
  if (movements2[_i] > 0) {
    console.log("You deposited " + movements2[_i]);
  } else {
    console.log("You withdrew " + Math.abs(movements2[_i]));
  }
}

console.log('--- FOREACH ---');

movements2.forEach(function (mov) {
  if (mov > 0) {
    console.log("You deposited " + mov);
  } else {
    console.log("You withdrew " + Math.abs(mov));
  }
}
);

// forEach with Maps and Sets
console.log('--- forEach with Maps and Sets ---');








