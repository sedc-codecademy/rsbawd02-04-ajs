// // function Person(id, name, gender) {
// //   this.id = id || "---";
// //   this.name = name || "---";
// //   this.gender = gender || "---";

// //   this.displayDetails = () => {
// //     console.log(`Id: ${this.id}`);
// //     console.log(`Name: ${this.name}`);
// //     console.log(`Gender: ${this.gender}`);
// //   };
// // }

// // const person = new Person(1, "Aida Pirusic", "female");
// // const student = Object.create(person);// copy
// // student.academyName = 'Qinshift Academy';

// // const employee = Object.create(person);
// // employee.jobTtile = 'Frontend developer';

// // console.log('person', person);
// // console.log('student', student);
// // console.log('student.name', student.name);
// // console.log('student.academyName', student.academyName);

// // console.log('person.__proto___', person.__proto__);
// // console.log('student.__proto___', student.__proto__);

// function Product(id, name, price) {
//   this.id = Number(id) || 0;
//   this.name = name || "---";
//   this.price = Number(price) || 0;

//   this.displayDetails = () => {
//     console.log(`Id: ${this.id}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Price: ${this.price} $`);
//   };
// }

// function ElectricalDevice(id, name, price, brand, model) {
//   Object.setPrototypeOf(this, new Product(id, name, price));
//   this.brand = brand || "---";
//   this.model = model || "---";

//   this.displayDetails = () => {
//     Object.getPrototypeOf(this).displayDetails();
//     console.log(`Brand: ${this.brand}`);
//     console.log(`Model: ${this.model}`);
//   };
// }

// function Laptop(id, name, price, brand, model, processor, isTouchScreen) {
//   Object.setPrototypeOf(
//     this,
//     new ElectricalDevice(id, name, price, brand, model)
//   );

//   this.processor = processor || "---";
//   this.isTouchScreen = isTouchScreen || false;

//   this.info = () => {
//     Object.getPrototypeOf(this).displayDetails();
//     console.log(`Processor: ${processor}`);
//     console.log(isTouchScreen ? "Touch screen" : "Regular screen");
//   };
// }

// function Clothes(id, name, price, size, material) {
//   Object.setPrototypeOf(this, new Product(id, name, price));

//   this.size = size || "---";
//   this.material = material || "---";

//   this.displayDetails = () => {
//     Object.getPrototypeOf(this).displayDetails();
//     console.log(`Size: ${size}`);
//     console.log(`Material: ${material}`);
//   };
// }

// console.log("PRODUCT:");
// const product = new Product(1, "Dress", 35);
// product.displayDetails();

// console.log("\nELECTRICAL DEVICE:");

// const elDevice = new ElectricalDevice(
//   2,
//   "Headphones",
//   100,
//   "Philips",
//   "Fidelio L3"
// );
// elDevice.displayDetails();

// console.log("\nClothes");
// const dress = new Clothes(3, "Little Black Dress", 35, "S", "cotton");
// dress.displayDetails();

// console.log("\nLaptop");
// const laptop = new Laptop(4,"Laptop",1700,"HP","Notebook - 15-ac650tu","Intel Core i5",true);
// console.log(laptop.name);
// laptop.info();

function Animal(id, species) {
  this.id = Number(id) || 0;
  this.species = species || "---";

  this.info = () => {
    console.log(`Id: ${this.id}`);
    console.log(`Species: ${this.species}`);
  };
}

function DomesticAnimal(id, species, name, age, vacinationDate) {
  Object.setPrototypeOf(this, new Animal(id, species));

  this.name = name || "---";
  this.age = Number(age);
  this.vacinationDate = vacinationDate || "";

  this.displayDetails = () => {
    Object.getPrototypeOf(this).info();

    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Vacination date: ${this.vacinationDate}`);
  };
}

function Cat(id, species, name, age, vacinationDate, breed) {
  Object.setPrototypeOf(this, new DomesticAnimal(id, species, name, age, vacinationDate));

  this.breed = breed || '---';

  this.displayInformation = () => {
    Object.getPrototypeOf(this).displayDetails();

    console.log(`Breed: ${this.breed}`);
  };
}

const cat = new Cat(1, 'cat', 'Kitty', 2, '14.3.2024.', 'Persian');
cat.displayInformation();
