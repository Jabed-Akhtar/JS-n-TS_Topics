// 1. Variables and Data Types
let age = 30; // Number
let name = "John"; // String
let isStudent = true; // Boolean

console.log(age);
console.log(name);
console.log(isStudent);

// 2. Operators
let x = 10;
let y = 5;
let sum = x + y; // Addition
let isGreater = x > y; // Comparison
let isTrue = true && false; // Logical AND

// 3. Control Flow
let hour = 14;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}

// 4. Functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

// 5. Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // Output: banana

// 6. Objects
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(person.name); // Output: John

// 7. Loops
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}

// 8. DOM Manipulation
//<!-- HTML -->
<button id="myButton">Click Me</button>
// JavaScript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

// 9. Events
//<!-- HTML -->
//<input type="text" id="myInput">
// JavaScript
let input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    console.log("Key pressed: " + event.key);
});

// 10. Error Handling
try {
    // Code that might throw an error
} catch (error) {
    console.log("An error occurred: " + error.message);
}
