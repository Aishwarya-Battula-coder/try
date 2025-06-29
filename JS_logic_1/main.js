//part 1
const student = {
  name: "avi",
  age: 20,
  marks: [85, 90, 78],
  address: {
    city: "hyd",
    state: "hyd"
  }
};
console.log(student.name);        
console.log(student["address"]["city"]); 
student.age = 21;                 
student.isPassed = true;        
delete student.marks;
console.log(student);  
//part 2
console.log(Object.keys(student));       
console.log(Object.values(student));     
console.log(Object.entries(student));    

console.log(student.hasOwnProperty("name"));  
//part 3
const classroom = {
  teacher: "Mr. Sharma",
  students: [
    { name: "Amit", age: 16 },
    { name: "Sara", age: 15 }
  ],
  subject: "Math"
};


console.log(classroom.students[1].name); 

// Adding new student
classroom.students.push({ name: "Rahul", age: 17 });

classroom.subject = "Science";

console.log(classroom);
//part 4
console.log(x);
var x = 5;

greet();
function greet() {
  console.log("Hello!");
}

console.log(y);
let y = 10;
//Predictions:
//console.log(x);
//  Output: undefined
// Because var declarations are hoisted but not initialized.

// greet();
 // Output: Hello!
// Because function declarations are hoisted with definition.

// console.log(y);
// Output: ReferenceError
// Because let is hoisted to the top but is in the temporal dead //zone until initialization.
//part 5
const calculator = {
  num1: 10,
  num2: 5,
  add: function () {
    return this.num1 + this.num2;
  }
};

console.log("Sum is:", calculator.add());  


