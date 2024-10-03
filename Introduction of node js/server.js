//1 --- Node js

// Node js mean the runtime javascirpt enviroment.
// It is use to server site programming.
// Node.js is not a language it is the framework or library

// 1st of all we can install the the node js and check it is install in your pc Go to terminal and run this cammand (node -v)

// 2 -- NODE REPL

// let n = 10;

// for (i = 1; i <= n; i++) {
//   console.log("hello ", i);
// }

// Process in NODE JS
// this object provides information about and control over the current Node.js process.

// let anotherVal = require("./math");

// console.log(anotherVal.sum(5, 2));
// console.log(anotherVal.PI);
// console.log(anotherVal.g);

let fruits = require("./fruit");
console.log(fruits);
console.log("first ", fruits[0]);
console.log("first ", fruits[1]);
console.log("second ", fruits[1]);
console.log("third", fruits[2]);
