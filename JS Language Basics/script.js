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
// var now = 2018;
// var birthYear = now - 26;

// birthYear = now - 26 * 2;
// // 2018 - 52, multiplied first, then subtracted = 1966
// // operator precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
// // ageJohn = ageMark = 26
// // ageJohn = 26

// ageJohn++;
// // ageJohn = ageJohn + 1;

// ageMark *= 2;
// // ageMark = ageMark * 2;

// console.log(ageJohn);
// console.log(ageMark);

// If/else statements:
// var name = 'John';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes') {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' will hopefully get married soon :)');
// }

// isMarried = true;

// if(isMarried) {
//   console.log('YES!');
// } else {
//   console.log('NO!');
// }

// if(isMarried) {
//   console.log('YES!');
// }

// if(23 === "23") {
//   console.log('Something to print');
// }

// Boolean logic and switch statements:
// var age = 20;

// if(age < 20) {
//   console.log('John is a teenager.');
// } else if(age >= 20 && age < 30) {
//   console.log('John is a young man.');
// } else {
//   console.log('John is a man.');
// }

// var job = 'teacher';

// job = prompt('What does John do?');

// switch (job) {
//   case'teacher':
//     console.log('John teaches kids.');
//     break;
//   case 'driver':
//     console.log('John drives a cab.');
//     break;
//   case 'cop':
//     console.log('John helps fight crime.');
//     break;
//   default:
//     console.log('John does something else.');
// }

// Functions:
// function calculateAge(yearOfBirth) {
//   var age = 2018 - yearOfBirth;
//   return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);

// function yearsUntilRetirement(name, year) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if(retirement >= 0) {
//     console.log(name + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(name + ' is already retired.');
//   }
// }

// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);

// Statements and expressions
// Statement (action):
function someFun(par) {
  // code
}

if (x === 5) {
  // do something
}

// Expression (value, outcome):
var someFun = function(par) {
  // code
}

3 + 4;
var x = 3;
