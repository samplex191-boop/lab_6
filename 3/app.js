import myModule from './myModule.js';
 
console.log("========================================");
console.log("   Using User-Defined Module in Node.js ");
console.log("========================================\n");
 
// 1. Using the greet function
console.log("1. Greeting:");
console.log(myModule.greet("Student"));
 
// 2. Using the add function
console.log("\n2. Addition:");
console.log("10 + 5 =", myModule.add(10, 5));
 
// 3. Using the subtract function
console.log("\n3. Subtraction:");
console.log("10 - 5 =", myModule.subtract(10, 5));
 
// 4. Using the multiply function
console.log("\n4. Multiplication:");
console.log("10 * 5 =", myModule.multiply(10, 5));
 
// 5. Using the divide function
console.log("\n5. Division:");
console.log("10 / 5 =", myModule.divide(10, 5));
console.log("10 / 0 =", myModule.divide(10, 0));
 
// 6. Using the checkEvenOdd function
console.log("\n6. Even or Odd:");
console.log(myModule.checkEvenOdd(7));
console.log(myModule.checkEvenOdd(12));
 
console.log("\n========================================");
console.log("   Module operations completed!");
console.log("========================================");