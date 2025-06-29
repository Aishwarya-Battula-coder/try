greetUser("Alice", "morning"); 

function greetUser(name, timeOfDay) {
  console.log(`Good ${timeOfDay}, ${name}!`);
}
const calculateArea = function(shape, dimensions) {
  if (shape === "rectangle") {
    return dimensions.width * dimensions.height;
  } else if (shape === "triangle") {
    return 0.5 * dimensions.base * dimensions.height;
  } else {
    return "Unknown shape";
  }
};

console.log(calculateArea("rectangle", { width: 10, height: 5 })); 
console.log(calculateArea("triangle", { base: 6, height: 4 }));   
//arrow function
const formatResults = (arr) => arr.map(num => `Result: ${num * num}`);

console.log(formatResults([1, 2, 3, 4]));
//arrow 2
const square = num => num * num;

const result = [1, 2, 3, 4].map(square);
console.log(result); 
//Anonymous 
setTimeout(function() {
  console.log("Executed after delay");
}, 2000);
//Named Function Expression
const factorial = function fact(n) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); 

//scope
let globalVar = "Global Scope";

function testScope() {
  let functionVar = "Function Scope";
  
  if (true) {
    let blockLet = "Block Scope (let)";
    const blockConst = "Block Scope (const)";
    var blockVar = "Function Scope (var)";
    console.log(blockLet, blockConst, blockVar); 
  }

  console.log(functionVar); 
  console.log(blockVar);   

testScope();

console.log(globalVar);       
//Scope:

//var: Function-scoped (accessible throughout the function it's //declared in).

//let & const: Block-scoped (only accessible within the block {}//).

//Variables declared in one scope (function/block) aren't //accessible outside that scope.
//callback
function processData(number, callback) {
  const message = number > 10 ? "High" : "Low";
  callback(number, message);
}

processData(12, (num, msg) => {
  console.log(`Number: ${num}, Message: ${msg}`);
});
// Keyword
const person = {
  firstName: "John",
  lastName: "Dick",
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.getFullName()); 
//keywords2
const counter = {
  count: 0,
  start: function() {
    setInterval(() => {
      this.count++;
      console.log(`Count: ${this.count}`);
    }, 1000);
  }
};

counter.start();