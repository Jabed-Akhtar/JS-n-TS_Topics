
let firstName = 'Sam';      // String
let interestRate = 0.3;     // Number
const piVal = 3.14;         // Constant number
let isApproved = false;     // Boolean
let lastName = null;        // Null     -> used in situation where the values has to be cleared!
console.log(firstName);

interestRate = 12;
console.log(interestRate);

console.log(piVal);

// Object =======================
let person = {
    name: 'Zaxx',
    age: 18
};
console.log(person);
console.log(person.age);     // Dot notation         -> Good one :)
console.log(person['age']);  // Bracket notation

// Array =======================
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[2]);
console.log(selectedColors.length);

// Functions ====================
function greet(name) {
    console.log("Hello " + name + '!');
}
greet(firstName);
greet('Mary');
