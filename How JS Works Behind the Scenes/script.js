// Hoisting in practice

// function declaration (executes)
calculateAge(1965);

function calculateAge(year) {
  console.log(2018 - year);
}

// function expression (doesn't execute)
// retirement(1990);

var retirement = function(year) {
  console.log(65 - (2018 - year));
}

// variables
console.log(age); // undefined
// knows we have the age variable, just isn't defined yet
var age = 23;

function foo() {
  console.log(age); // undefined
  var age = 65;
  console.log(age); // 65
}
foo();
console.log(age); // 23

