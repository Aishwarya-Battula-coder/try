document.getElementById("myBtn").addEventListener("click", function () {
    console.log("Inside button click (normal function):", this);
});

// Global scope
console.log("Global this:", this); // In browser, refers to window object

// Regular function
function regularFunction() {
  console.log("Inside regular function:", this); // In strict mode: undefined; otherwise, window
}
regularFunction();

// Object with method
const obj = {
  name: "Test Object",
  showThis: function() {
    console.log("Inside object method:", this); // refers to obj
  }
};
obj.showThis();

// Arrow function inside object
const arrowObj = {
  name: "Arrow Object",
  showThis: () => {
    console.log("Arrow in object:", this); // refers to outer lexical scope (global or enclosing context)
  }
};
arrowObj.showThis();
