import { getEvenNumbers, getOddNumbers } from "./utils.js";
import * as utils from './utils.js';
import { getDoubleDigitsNumbers } from "./utils2.js";
import utilsService from './utils3.js';


const numbers = [26, 9, 333, 44, 17, 7, 22, 133];

console.log('even numbers', getEvenNumbers(numbers));
console.log('even numbers', utils.getEvenNumbers(numbers));
console.log('odd numbers',getOddNumbers(numbers));
console.log('double digits numbers', getDoubleDigitsNumbers(numbers));
console.log('max number', utilsService.getMaxNumber(numbers));


