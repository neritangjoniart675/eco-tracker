/* 
   Filename: complexCode.js
   Content: Complex code that performs various mathematic calculations and generates a pattern
   
   Description:
   This code implements several mathematical functions and generates a pattern using nested loops and conditional statements.
   It demonstrates the usage of different data types, loops, conditionals, and functions in JavaScript.
*/

// Function to calculate the square of a number
function square(num) {
   return num * num;
}

// Function to calculate the factorial of a number
function factorial(num) {
   if (num === 0 || num === 1)
       return 1;
   else {
       let result = 1;
       for (let i = 2; i <= num; i++) {
           result *= i;
       }
       return result;
   }
}

// Function to generate a Fibonacci sequence up to a given limit
function fibonacci(limit) {
   let fibSeq = [0, 1];
   for (let i = 2; i <= limit; i++) {
       fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
   }
   return fibSeq;
}

// Function to generate a pattern of numbers
function generatePattern() {
   let pattern = '';
   for (let i = 1; i <= 10; i++) {
       for (let j = 1; j <= i; j++) {
           pattern += j + ' ';
       }
       pattern += '\n';
   }
   return pattern;
}

// Main function to execute the complex code
function main() {
   console.log("Square of 5: " + square(5));
   console.log("Factorial of 6: " + factorial(6));

   console.log("Fibonacci sequence up to 10: " + fibonacci(10).join(', '));

   console.log("Pattern:");
   console.log(generatePattern());
}

main();