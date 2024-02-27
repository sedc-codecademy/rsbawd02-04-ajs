// const addBtn = document.getElementById("addBtn");
// const namesArray = [];

// function onAddClicked() {
//   const newName = prompt("Enter a name");

//   namesArray.push(newName);
//   console.log("names array => ", namesArray);
// }

// console.log("niz => ", namesArray);//[]

// addBtn.addEventListener("click", onAddClicked);

// function getFullName(fName, lName) {
//   // parameters
//   return `${fName} ${lName}`;
// }

// function validateEmail(email) { // aida@gmail.com
//   return email.includes("@");
// }

// const fullName = getFullName("Milica", "Dj."); // arguments
// console.log(fullName);

// function displayStudentInfo(student) {
//   console.log("Student", getFullName(student.firstName, student.lastName));
//   console.log("Age", student.age);
// }

// console.log(getFullName("Tamara", "D."));

// const obj = {
//   firstName: "Aida",
//   lastName: "P",
//   age: 18,
// };
// displayStudentInfo(obj);

// anonymous functions
// const getFullName = function (fName, lName) {
//   return `${fName} ${lName}`;
// };

// getFullName("aaa", "vbbb");

// addBtn.addEventListener("click", function () {
//   console.log("clicked on button");
// });

// anonymous arrow functions
// const getSum = (num1, num2) => {
//   console.log("Sum", num1 + num2);
// };

// addBtn.addEventListener("click", () => {
//   console.log("clicked!!");
// });

// getSum(3, 4);

// function validateEmail(email) {
//   return email.includes("@");
// }

// const validateEmail2 = (email) => {
//     return email.includes("@");
// }

// const validateEmail3 = (email) => email.includes("@");

// const myEmail = 'aida.pirusic@outlook.com';
// console.log('validateEmail', validateEmail(myEmail));
// console.log('validateEmail2', validateEmail2(myEmail));
// console.log('validateEmail3', validateEmail3(myEmail));

// Scope
// local scope (function scope)

// function generateFullName(fName, lName) {
//     var fullName = `${fName} ${lName}`;
//     console.log(fullName);
// }

// console.log(fullName);

// block scope

// {
//   // bh tax calculation
//   var tax = 17;
// }

// {
//   // rom tax calculation
//   var tax = 23;
// }

// tax = 22;

// {
//     let tax = 17;
// }

// console.log(tax);

// Hoisting

// myFunction();

// function myFunction () {
//     console.log('test');
// }

// // variables
// console.log(test);
// var test = 12;


// exercise 1
const countDigits = (number) => Math.abs(number).toString().length;

const isEvenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

const isPositiveOrNegative = (number) => {
  // 0
  if (number > 0) {
    return "Positive";
  }

  if (number < 0) {
    return "Negative";
  }
  return "Zero";
};

const getNumberStats = (number) => {
  const numDigits = countDigits(number);
  const evenOrOdd = isEvenOrOdd(number);
  const posOrNeg = isPositiveOrNegative(number);

  console.log(`${numDigits} Digits, ${evenOrOdd}, ${posOrNeg}`);
};

getNumberStats(-25);
