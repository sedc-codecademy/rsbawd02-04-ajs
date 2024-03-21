import { getEvenNumbers, getOddNumbers } from "./modules/utils.js"; //named import
import { getDoubleDigitsNumbers } from "./modules/utils2.js"; // names import
import utilsModule from "./modules/utils3.js"; // default import

const numbers = [26, 9, 333, -44, 17, 7, 22, 133];

console.log("even numbers", getEvenNumbers(numbers));
console.log("odd numbers", getOddNumbers(numbers));
console.log("double digit numbers", getDoubleDigitsNumbers(numbers));
console.log("max number is ", utilsModule.getMaxNumber(numbers));

// check if something is array
console.log(Array.isArray(numbers));
console.log(Array.isArray({ yyy: 111 }));
