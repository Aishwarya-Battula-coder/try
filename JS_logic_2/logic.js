//Q1
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  if (i === 17) break;
  console.log(i);
}
//Q2
let i = 30;
let count = 0;
while (i >= 10) {
  if (i % 2 === 0) {
    console.log(i);
    count++;
  }
  i--;
}
console.log("Total even numbers:", count);
//Q3
let input = 30; // simulate user input
do {
  console.log("Entered:", input);
  input += 10;  // Simulate user entering again
} while (input <= 50);
console.log("Thank you");
//Q4
const colors = ["red", "green", "blue", "yellow", "purple"];
const upperColors = [];

for (const color of colors) {
  upperColors.push(color.toUpperCase());
}

console.log(upperColors);
//Q5
const student = {
  name: "Amit",
  age: 21,
  grade: "A",
  subjects: {
    math: 85,
    english: 78
  }
};

for (let key in student) {
  if (key !== "subjects") {
    console.log(`${key}: ${student[key]}`);
  }
}

console.log("Subjects:");
for (let subject in student.subjects) {
  console.log(`${subject}: ${student.subjects[subject]}`);
}
//part 2
//q1
function trafficSignal(color) {
  const upperColor = color.toUpperCase();
  let action;

  switch (upperColor) {
    case "GREEN":
      action = "Go";
      break;
    case "YELLOW":
      action = "Slow down";
      break;
    case "RED":
      action = "Stop";
      break;
    default:
      action = "Invalid color";
  }

  console.log(`Color is ${upperColor}. Action: ${action}`);
}

trafficSignal("Green");
//q2
function dayMessage(day) {
  switch (day) {
    case "Mon":
      console.log("Start of work week");
      break;
    case "Tue":
    case "Wed":
    case "Thu":
      console.log("Midweek");
      break;
    case "Fri":
      console.log("Almost weekend");
      break;
    case "Sat":
    case "Sun":
      console.log("Weekend!");
      break;
    default:
      console.log("Invalid day");
  }
}

dayMessage("Wed");
//part3
const books = [
  { title: "1984", author: "George ", year: 1949 },
  { title: "To Kill", author: "Harper Lee", year: 1960 },
  { title: " Great", author: "F. Scott ", year: 1925 },
  { title: "Moby ", author: "Herman", year: 1851 },
  { title: "Pride", author: "Jane", year: 1813 },
  { title: "The Hobbit", author: "J", year: 1937 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 }
];

console.log(books);
//part4
//Pros & Cons 
//The for loop is best when you need clear counter control and //know the number of iterations in advance. However, it can//become verbose if you're working with arrays or objects. //It's most suitable for iterating arrays using indexes.

//The while loop is a good choice when the exit condition isn't //based on an index. But there's a risk of running into an //infinite loop if the condition is not properly managed. //It’s ideal when you want to repeat something until a condition becomes false.

//The do...while loop ensures the code block runs at least once //before checking the condition. While it's less commonly //used, it’s very helpful for scenarios like input //validation or retry mechanisms.

//The for...of loop offers a clean and simple syntax for //iterating over arrays, strings, or other iterable objects. //However, it doesn’t work directly with plain objects.

//The for...in loop is a convenient way to iterate over the keys //of an object. However, it’s not suitable for arrays //because the key order isn't guaranteed, and it may include //inherited properties.

//Recommended Loops:
//Use for or for...of when iterating over arrays.
//Use for...in when working with objects.
//Use while when you want to repeat something until a condition //is true.
//Use do...while when the loop should execute at least once //before the condition is checked.

 //if...else vs switch
//The if...else structure allows for flexible conditions and can //handle complex logic like ranges and comparisons. However, //it can become messy and harder to read when there are many //else if branches.

//On the other hand, the switch statement provides cleaner and //more readable code when you’re checking one variable //against multiple fixed values. Its limitation is that it //only works well for discrete values, not ranges or complex //logic.

//You should prefer using switch when you have a single variable //being compared to several known constant values. It helps //improve readability and is more structured than a long //chain of else if statements.
