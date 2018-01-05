// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

*/

var heightJohn = 165;
var heightTim = 187;
var ageJohn = 33;
var ageTim = 56;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreTim = heightTim + 5 * ageTim;

if (scoreJohn > scoreTim) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreTim > scoreJohn) {
  console.log('Tim wins the game with ' + scoreTim + ' points!');
} else if (scoreJohn === scoreTim) {
  console.log('There is a draw.');
}

// adding an extra player

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreTim && scoreJohn > scoreMary) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreTim > scoreJohn && scoreTim > scoreMary) {
  console.log('Tim wins the game with ' + scoreTim + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreTim) {
  console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
  console.log('It\'s a draw.');
}
