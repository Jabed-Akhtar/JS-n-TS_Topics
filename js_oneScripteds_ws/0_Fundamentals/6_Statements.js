
// 1. Declaration Statements ==================================================
var x = 10;
let y = 20;
const z = 30;

// 2. Assignment Statements ===================================================
x = 15;
y += 5;

// 3. Expression Statements ===================================================
x + y;

// 4. Function Declaration Statements =========================================
function add(a, b) {
    return a + b;
}

// 5. Expression Function Statements (Function Expressions) ===================
const multiply = function(a, b) {
    return a * b;
};

// 6. Return Statements =======================================================
function subtract(a, b) {
    return a - b;
}

// 7. Throw Statements ========================================================
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

// 8. Conditional Statements (Control Flow) (If-Else) =========================
if (x > 0) {
    console.log("x is positive");
} else {
    console.log("x is not positive");
}

// 9. Switch-Case =============================================================
/*
- alternative to If-Else
*/
const dayOfWeek = 4; // Assuming it's Thursday
switch (dayOfWeek) {
    case 1:
        console.log("It's Monday.");
        break;
    case 2:
        console.log("It's Tuesday.");
        break;
    case 3:
        console.log("It's Wednesday.");
        break;
    case 4:
        console.log("It's Thursday.");
        break;
    case 5:
        console.log("It's Friday.");
        break;
    default:
        console.log("It's a weekend day.");
}

// 10. Looping Statements (Control Flow) (For-Loop) ===========================
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 11. Looping Statements (Control Flow) (For-Of-Loop) ========================
/*
- Used to iterate over elements in an iterable object, such as arrays, strings, maps, sets, etc.
- Doesn't provide access to object keys.
*/
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}

const message = "Hello, World!";
for (const char of message) {
    console.log(char);
}

// 12. Looping Statements (Control Flow) (For-In-Loop) ========================
/*
- Used to iterate over the enumerable properties of an object, including properties inherited from its prototype chain.
- Loops through keys (property names) of an object.
- Typically used for iterating over object properties.
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Developer"
};
//console.log("-----");
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
const numberOfProperties = Object.keys(person).length;
for (let i=0; i<numberOfProperties; i++){
    console.log(i);
    console.log(person[i]);         // -> undefined
}

// 13. While-Loop =============================================================
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// 14. Do-While-Loop ==========================================================
let num = 10;
do {
    console.log(num);
    num--;
} while (num > 0);

// 15. Try-Catch Statements ===================================================
try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

// 16. Break and Continue Statements ==========================================
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop
    }
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}

// ##### END OF FILE ##########################################################
