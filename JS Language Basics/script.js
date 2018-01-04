// Variables and data types:
// var name = 'John';
// console.log(name);

// var lastName = 'Smith';
// console.log(lastName);

// var age = 26;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// Variable mutation and type coercion:
// var name = 'John';
// var age = 26;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// age = 'thirty six';
// job = 'driver';

// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// // var lastName = prompt('What is the last name?');
// // console.log(lastName);

// alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// Operators:
var now = 2018;
var birthYear = now - 26;

birthYear = now - 26 * 2;
// 2018 - 52, multiplied first, then subtracted = 1966
// operator precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// ageJohn = 26

ageJohn++;
// ageJohn = ageJohn + 1;

ageMark *= 2;
// ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
