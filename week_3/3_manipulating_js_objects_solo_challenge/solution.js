
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

var adam = {
};

adam.name = "Adam";

terah.spouse = adam; 

terah.weight = 125;

delete terah.eyeColor;

adam.spouse = terah;

terah.children = {};

terah.children.carson = {};

terah.children.carson.name = "Carson";

terah.children.carter = {};

terah.children.carter.name = "Carter";

terah.children.colton = {};

terah.children.colton.name = "Colton";

adam.children = terah.children;







// __________________________________________
// Reflection: Use the reflection guidelines
// 
//

//What parts of your strategy worked? What problems did you face?]
// My strategy was to go step by step, and use the tests to construct the code. 
//This worked well and followed much of what I learnded from Michael Hartl's tutorial
//in which he teaches TTD. 

//What questions did you have while coding? What resources did you find to help you answer them?
// Just basic syntax stuff for JS. Github showed me the way. 

//What concepts are you having trouble with, or did you just figure something out? If so, what?
//Everything was review, aside from getting more comfortable with JS syntax, ie. delete terah.eyecolor instead
//of terah.eyecolor.delete() or something else. 
// Did you learn any new skills or tricks?
// Just better familiarity. 
// How confident are you with each of the Learning Competencies?
//Quite. 

// Which parts of the challenge did you enjoy?
//Seeing those tests pass one by one! 
// Which parts of the challenge did you find tedious?
// None of this one really, accept that my github trouble deleted this and I'm doing it a second time all late! 

// __________________________________________
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)