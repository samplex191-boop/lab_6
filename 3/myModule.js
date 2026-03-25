function greet(name) {
    return "Hello, " + name + "! Welcome to Node.js Modules!";
}
 
function add(a, b) {
    return a + b;
}
 
function subtract(a, b) {
    return a - b;
}
 
function multiply(a, b) {
    return a * b;
}
 
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}
 
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return num + " is Even";
    } else {
        return num + " is Odd";
    }
}
 
export default {
    greet,
    add,
    subtract,
    multiply,
    divide,
    checkEvenOdd
};