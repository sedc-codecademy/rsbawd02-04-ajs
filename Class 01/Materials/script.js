// I way

// const student = {
//   firstName: "Niko",
//   lastName: "Nikic",
//   years: 18,

//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const student2 = {
//   firstName: "fff",
//   lastName: "fff",
//   years: 18,

//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(student.getFullName());

// II way
// const student = new Object();
// student.firstName = "Niko";
// student.lastName = "Niko";
// student.years = 18;
// student.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// console.log(student.getFullName());

// III way
// let isUsernameValid = true;
// let isPassValid = false;

// let result = isUsernameValid || isPassValid; //true

// function Student(firstName, lastName, years) {
//   // undefined
//   // firstName ? firstName : "---";
//   this.firstName = firstName || "---";
//   this.lastName = lastName || "---";
//   this.years = years || 0;

//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
//   this.displayInfo = function () {
//     console.log(`Student ${this.getFullName()} is ${this.years} years old.`);
//   };
// }

// const student1 = new Student("Niko", "Nikic", 18);
// const student2 = new Student(null, "Pirusic", 20);
// const student3 = new Student("Aida", "", 21);
// const student4 = new Student("Aida", "Pirusic", undefined);

// student1.displayInfo();
// student2.displayInfo();
// student3.displayInfo();
// student4.displayInfo();

// References
// const original = new Student("Niko", "Nikic", 18);
// const copy = { ...original }; // ES6
// // const copy = new Object({}, original);

// original.displayInfo();
// copy.displayInfo();

// copy.years = 20;
// console.log("Original years", original.years);
// console.log("Copy years", copy.years);

// Exercise 1
// function Student(firstName, lastName, age, email) {
//   // "18"
//   this.firstName = firstName || "---";
//   this.lastName = lastName || "---";
//   this.age = Number(age) || 0;
//   this.email = email || "no email";
// }

// const database = [];

// const btnAdd = document.getElementById("btnAdd");
// const firstNameInput = document.getElementById("firstName");
// const lastNameInput = document.getElementById("lastName");
// const ageInput = document.getElementById("age");
// const emaiInput = document.getElementById("email");

// btnAdd.onclick = function () {
//   const firstName = firstNameInput.value;
//   const lastName = lastNameInput.value;
//   const age = ageInput.value;
//   const email = emaiInput.value;
//   let isFormValid = true;

//   if (!firstName) {
//     console.warn("First name not entered");
//     isFormValid = false;
//   }
//   if (!lastName) {
//     console.warn("Last name not entered");
//     isFormValid = false;
//   }
//   if (!age) {
//     console.warn("Age not entered");
//     isFormValid = false;
//   }
//   if (!email) {
//     console.warn("Email not entered");
//     isFormValid = false;
//   }

//   if (isFormValid) {
//     const newStudent = new Student(firstName, lastName, age, email);
//     database.push(newStudent);
//     console.log("database", database);

//     firstNameInput.value = "";
//     lastNameInput.value = "";
//     ageInput.value = "";
//     emaiInput.value = "";
//   }
// };

// Arrays
// const numbers = [12, -2, 10];
// delete numbers[1];// [12, undefined, 10]

// console.log("First element", numbers[0]);
// console.log("Last element", numbers[2]);
// console.log("Count of elements", numbers.length);
// console.log("Last element", numbers[numbers.length-1]);

// numbers.push(17);
// console.log('array after push', numbers);

// numbers.unshift(7);
// console.log('array after unshift', numbers);

// numbers.pop();
// console.log('array after pop', numbers);

// numbers.shift();
// console.log('array after shift', numbers);

// Loops
// while
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // 5, 7 , 100, -49, 0
// let broj = 0; // undefined
// do {
//   broj = Number(prompt("Unesite broj")); //9
// } while (broj !== 0);

// for
// for (let i = 13; i <= 17; i++) {
//   console.log(i);
// }

// const numbers = [3, 14, 23];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for of
// function Student(firstName, lastName) {
//   // undefined
//   // firstName ? firstName : "---";
//   this.firstName = firstName || "---";
//   this.lastName = lastName || "---";

//   this.getFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
// }

// const students = [new Student("Aida", "P"), new Student("Miroslav", "D")];

// // for (let element of students) {
// //   element.getFullName();
// // }

// students.forEach(function (el) {
//   console.log(el);
// });

// Array references
// const numbers = [3, 14, 23];
// // const copy = numbers; // by reference - sometimes making problems
// const copy = [...numbers]; // solution
// copy.push(9);

// console.log(numbers);
// console.log(copy);

// const email = "aida.pirusic@gmail";
// if (email.endsWith(".com")) {
//   console.log("valid email");
// } else {
//   console.log("invalid email");
// }

// const array = [];
// for (let i = 1; i <= 1000; i++) {
//   if (i.toString().endsWith("1")) {
//     array.push(i);
//   }
// }

// console.log(array);

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

const onlyStrings = [];

// for (element of test) {
//   if (typeof element === "string") {
//     onlyStrings.push(element);
//   }
// }

// console.log(onlyStrings);

// test.forEach(function (element) {
//   if (typeof element === "string") {
//     onlyStrings.push(element);
//   }
// });
// console.log(onlyStrings);

// onlyStrings = test.filter(function (element) {
//   return (typeof element === "string");
// });

// const onlyNumbers = [];

// test.forEach(function (element) {
//   if (typeof element === "number") {
//     onlyNumbers.push(element);
//   }
// });

// console.log(onlyNumbers);

const nonFalsyArray = [];
test.forEach(function (element) {
  if (element) {
    nonFalsyArray.push(element);
  }
});
console.log(nonFalsyArray);