// Variable declarations `let` and `const`

// //ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
// const: constant, cannot change
const name6 = 'Jane Smith';
// let: value of variable can change
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
// error, cannot assign new value to const

// ES5
function driversLicense5(passedTest) {
  if(passedTest) {
    console.log(firstName); // hoisting
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
  // console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;

  if(passedTest) {
    firstName = 'John';
  }
  // function is block scoped, can't access variables
  // need to be within the `if` statement
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);

var i = 23;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
// 0, 1, 2, 3, 4, 5

let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
// 0, 1, 2, 3, 4, 23

/////////////////////////////
// Block and IIFEs

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b);
console.log(c);

// ES5
(function() {
  var c = 3;
})();

console.log(c);

/////////////////////////////
// Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
  return 2018 - yearOfBirth;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
// using backticks
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
