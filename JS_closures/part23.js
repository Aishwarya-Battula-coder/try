//part 2
function scoreTracker() {
  let score = 0;
  return function(points) {
    score += points;
    console.log(`Total score: ${score}`);
  };
}

const addPoints = scoreTracker();
addPoints(10); 
addPoints(5);  
function createBankAccount() {
  let balance = 0;

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}`);
      }
    },
    getBalance: function() {
      console.log(`Current balance: $${balance}`);
      return balance;
    }
  };
}

const account = createBankAccount();
account.deposit(100);  
account.getBalance();   
//part 3
const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 22 }
];

const adults = people
  .filter(person => person.age >= 18)
  .map(person => person.name);

console.log(adults); 
const users = [
  { email: "a@example.com", active: true, verified: true },
  { email: "b@example.com", active: false, verified: true },
  { email: "c@example.com", active: true, verified: false },
  { email: "d@example.com", active: true, verified: true }
];

const validEmails = users
  .filter(user => user.active && user.verified)
  .map(user => user.email);

console.log(validEmails); 
const prices = [100, 250, 399, 120];

const pricesWithGST = prices.map(price => price * 1.18);

console.log(pricesWithGST); 
const words = ["Hello", "world", "JavaScript", "is", "Fun"];

const capitalCount = words.filter(word => /^[A-Z]/.test(word)).length;

console.log(capitalCount); 




