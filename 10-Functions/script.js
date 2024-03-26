'use strict';

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

// How Passing Arguments Works: Value vs. Reference
console.log('--------------------');
console.log('How Passing Arguments Works: Value vs. Reference');

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 24739479284) {
        alert('Check in');
    } else {
        alert('Wrong passport!');
    }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

// let's see what happens
console.log('--------------------');
console.log('Is the same as doing...');






