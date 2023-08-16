
// 1. Function Declarations ===================================================
function add(a, b){
    return a+b;
}
console.log(add(2,5))

// 2. Function Expressions ====================================================
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(10, 4));

// 3. Arrow Functions (ES6) ===================================================
const multiply = (a, b) => a * b;
console.log(multiply(10, 4));

const sayHello3 = () => {
    console.log('Hello');
}

// 4. Anonymous Functions =====================================================
// Immediately Invoked Function Expressions (IIFE)
(function() {
    // Code here
})();

const result = (function(a, b) {
    return a * b;
})(4, 6);
console.log(result); // Output: 24

// 5. Generator Functions (ES6) ===============================================
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;                // Yield a and paus
        [a, b] = [b, a + b];
    }
}
const num_fibonacci = fibonacci();
console.log(num_fibonacci.next());
console.log(num_fibonacci.next());
console.log(num_fibonacci.next());

// 6. Constructor Functions ===================================================
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("Alice", 30);

// 7. Higher-Order Functions ==================================================
// ...

// 8. Other ===================================================================
// 8.1. Passing Function as an Argument
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function(num) {
    return num * num;
});
console.log(squared); // Output: [1, 4, 9, 16, 25]

// ##### END OF FILE ##########################################################
