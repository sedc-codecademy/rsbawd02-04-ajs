// function getFullName(fName, lName) {
// 	return ;
// }

// const getFullName = (fName, lName) => `${fName} ${lName}`;

// getFullName("Aida", "p");

// const numberState = [
//   (num) => (num % 2 === 0 ? "Even" : "Odd"),
//   (num) => (num >= 0 ? "Positive" : "Negative"),
// ];

// numberState[0](17);
// numberState[1](20);

// function onlinePayment() {
//   console.log("online");
// }

// function cashPayment() {
//   console.log("cash");
// }

// function paypalPayment() {
// 	console.log("paypal");
//   }

// const preferedWay = "online";

// function getPaymentMethod() {
//   if (preferedWay === "online") {
//     return onlinePayment;
//   } else if (preferedWay === "cash") {
//     return cashPayment;
//   } else {
//     return paypalPayment;
//   }
// }

// function pay() {
//   const method = getPaymentMethod();
//   method();

//   /**
//    * if (preferedWay === "online") {
//     	return onlinePayment();
//   	} else {
//     	return cashPayment();
//   	}
//    */
// }

// const payBtn = document.getElementById("payBtn");

// payBtn.addEventListener("click", pay);

// function getLongestString() {
//   console.log("arguments", arguments);
//   let longest = '';

//   for (let i = 0; i < arguments.length; i++) {
// 	if(arguments[i].length >= longest.length) {
// 		longest = arguments[i];// "Djordje"
// 	}
//   }

//   console.log('longest string is ', longest);
// }

// // WARN: arguments is not accessible in arrow functions
// const getLongestString2 = () => {
// 	console.log("arguments", arguments);
// 	let longest = '';

// 	for (let i = 0; i < arguments.length; i++) {
// 	  if(arguments[i].length >= longest.length) {
// 		  longest = arguments[i];// "Djordje"
// 	  }
// 	}

// 	console.log('longest string is ', longest);
//   }

// getLongestString2("Milica", "Goran", "Djordje");
// getLongestString("Milica", "Goran", "Djordje", "Sava", "Tamaraaaaaa");

const pets = ["Bobby", "Cicko", "Rex", "Kitty", "Bambi"];

const grades = [5, 4, 5, 3, 5, 2, 1];

const prices = [35, 17, 15];

// reduce
// prices.reduce((result, element) => {
//   return (result += element);
// }, 0);

// sort
const copyOfPrices = [...prices];
copyOfPrices.sort();
console.log(prices);
console.log(copyOfPrices);


const copyOfPrices2 = [...prices];
copyOfPrices.sort((a, b) => a - b);
console.log(copyOfPrices2);






// const pricesWithCurrency = prices.map((element) => {
//   if (element > 0) {
//     return `${element} EUR`;
//   }
//   return "no-price";
// });

// console.log("pricesWithCurrency", pricesWithCurrency);

const employees = [
  { fName: "Bob", lName: "H", gender: "male", age: 19, salary: 1000 },
  { fName: "Mel", lName: "B", gender: "female", age: 18, salary: 1200 },
  { fName: "Jill", lName: "M", gender: "female", age: 22, salary: 1000 },
  { fName: "Lucky", lName: "J", gender: "female", age: 18, salary: 1000 },
  { fName: "Strike", lName: "K", gender: "male", age: 19, salary: 2300 },
  { fName: "Eric", lName: "I", gender: "male", age: 18, salary: 1000 },
];

// combination
// I way
// const males = employees.filter((element) => element.gender === "male");
// const adjustedArray = males.map((element) => {
//   return {
//     fullName: `${element.lName} ${element.fName}`,
//     age: element.age,
//     gender: element.gender,
//   };
// });
// // II way
// const newArray = employees
//   .filter((element) => element.gender === "male")
//   .map((element) => {
//     return {
//       fullName: `${element.lName} ${element.fName}`,
//       age: element.age,
//       gender: element.gender,
//     };
//   });
//   console.log(newArray);



// map
const mappedEmployees = employees.map((element) => {
  return {
    fullName: `${element.lName} ${element.fName}`,
    salary: `${element.salary} EUR`,
  };
});
const onlyEmployeeNames = employees.map((element) => `${element.lName} ${element.fName}`);
console.log(onlyEmployeeNames);
console.log('mappedEmployees', mappedEmployees);

// filter
const females = employees.filter((element) => element.gender === 'female');
console.log('females', females);











const uppercasedPets = pets.map((element) => element.toUpperCase());
console.log("uppercasedPets", uppercasedPets);

const multipliedBy3 = grades.map((element) => element * 3);
console.log("multipliedBy3", multipliedBy3);

const betterGrades = grades.map((element) => {
  if (element === 5) {
    return element;
  }
  return element + 1;
});
console.log('betterGrades', betterGrades);

// filter
// const petsWithB = pets.filter((element) => element.startsWith("B"));

// console.log(petsWithB); // ["Bobby", "Bambi"]
// console.log(pets); // ["Bobby", "Cicko", "Rex", "Kitty", "Bambi"]

// const evenNumbers = grades.filter((element) => (element % 2 === 0));
// console.log('evenNumbers', evenNumbers);

// const olderThan18 = employees.filter((element)=> (element.age > 18));
// console.log('olderThan18', olderThan18);

// const females = employees.filter((element) => element.gender === 'female');
// console.log('females', females);

// forEach
// console.log("Pets");
// pets.forEach((element) => {
//   console.log(element);
// });

// console.log("Grades");
// let sum = 0;
// const gradesGraterThan3 = [];
// grades.forEach((element) => {
//   if (element > 3) {
//     gradesGraterThan3.push(element);
//   }
//   console.log(element);
//   sum += element;
// });

// console.log("Sum of grades is ", sum);
// console.log("Average is ", sum / grades.length);

// console.log("Employees");
// let sumOfSalaries = 0;
// employees.forEach((element) => {
//   console.log(`${element.fName} - ${element.lName}`);
//   sumOfSalaries += element.salary;
// });

// console.log("Average salary is", sumOfSalaries / employees.length);
