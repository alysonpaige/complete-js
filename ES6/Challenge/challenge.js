/////////////////////////////
// Coding Challenge

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; //km2
    this.numTrees = numTrees;
  }
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  streetClassification() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name} was built in ${this.buildYear}, and is a ${classification.get(this.size)} street.`);
  }
}

const allParks = [new Park('Rock Creek Park', 1890, 7.099, 3541),
                  new Park('Turkey Creek Park', 2000, 0.526, 215),
                  new Park('Everglades National Park', 1947, 6104.60, 2103)];

const allStreets = [new Street('Connecticut Avenue', 1949, 25, 5),
                    new Street('Van Ness Street', 1960, 1.5, 2),
                    new Street('Los Rios', 1901, 0.8),
                    new Street('Cinta Costera', 2009, 64, 4)];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0); // start with sum at 0
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('---Parks Report---');
  // Density
  p.forEach(currentElement => currentElement.treeDensity());
  // Average Age
  const ages = p.map(currentElement => new Date().getFullYear() - currentElement.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} has an avergae of ${avgAge} years.`)
  // Parks with more than 1000 trees
  const i = p.map(currentElement => currentElement.numTrees).findIndex(currentElement => currentElement >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log('---Streets Report---');
  // Total and avg length of towns streets
  const [totalLength, avgLength] = calc(s.map(currentElement => currentElement.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
  // Classify sizes
  s.forEach(currentElement => currentElement.streetClassification());
}

reportParks(allParks);
reportStreets(allStreets);
