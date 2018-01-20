// Hoisting in practice:

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

// Scoping and the scope chain:
// lexical scoping
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    console.log(a + b + c);
  }
}

// execution stack vs scope chain
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';
  // console.log(c);
  console.log(a + d);
}

// The 'this' keyword:
console.log(this);

calculateAge(1985);

function calculateAge(year) {
  console.log(2018 - year);
  console.log(this);
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2018 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();
