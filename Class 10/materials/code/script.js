// function Person(id, name, gender) {
//   this.id = id || "---";
//   this.name = name || "---";
//   this.gender = gender || "---";

//   this.displayDetails = () => {
//     console.log(`Id: ${this.id}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Gender: ${this.gender}`);
//   }
// }

// const person = new Person('1', 'Aida Pirusic', 'female');

// const student = Object.create(person);
// student.academyName = 'Qinshift Academy';
// student.academyYear = 1;

// const employee = Object.create(student);
// employee.workPlace = 'Microsoft';
// employee.jobTitle = 'Frontend developer';

// // Prototype
// console.log("person.__proto__", person.__proto__);
// console.log("student.__proto__", student.__proto__);
// console.log("employee.__proto__", employee.__proto__);
// console.log("employee.__proto__.__proto__", employee.__proto__.__proto__);

// // Adding methods on the prototype

// student.__proto__.someTestFunction = () => console.log('This is test');
// person.someTestFunction();// this works
// student.someTestFunction();// this also works

// // getPrototypeOf
// console.log('student', Object.getPrototypeOf(student));
// console.log('employee', Object.getPrototypeOf(employee));

// function Person(id, name, gender) {
//   this.id = id || "---";
//   this.name = name || "---";
//   this.gender = gender || "---";

//   this.displayDetails = () => {
//     console.log(`Id: ${this.id}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Gender: ${this.gender}`);
//   };
// }

// function Student(id, name, gender, academyName, academyYear) {
//   //this.__proto__= Object.create(new Vehicle(id, name, batch, price));
//   Object.setPrototypeOf(this, new Person(id, name, gender));

//   this.academyName = academyName || "---";
//   this.academyYear = Number(academyYear) || 0;

//   this.displayDetails = () => {
//     // console.log(`Id: ${this.id}`);
//     // console.log(`Name: ${this.name}`);
//     // console.log(`Gender: ${this.gender}`);
//     Object.getPrototypeOf(this).displayDetails();
//     console.log(`Academy: ${this.academyName}`);
//     console.log(`Academy year: ${this.academyYear}`);
//   };
// }

// function Employee(
//   id,
//   name,
//   gender,
//   academyName,
//   academyYear,
//   companyName,
//   jobTitle
// ) {
//   Object.setPrototypeOf(
//     this,
//     new Student(id, name, gender, academyName, academyYear)
//   );

//   this.companyName = companyName || "---";
//   this.jobTitle = jobTitle || "---";

//   this.displayDetails = () => {
//     Object.getPrototypeOf(this).displayDetails(); // there will be called displayDetails from the Student template function
//     console.log(`Company: ${this.companyName}`);
//     console.log(`Job title: ${this.jobTitle}`);
//   };
// }

// const student = new Student("1", "Aida", "female", "Qinshift Academy", 1);
// student.displayDetails();
// console.log("\n");
// const employee = new Employee(
//   "1",
//   "Aida",
//   "female",
//   "Qinshift Academy",
//   1,
//   "Microsoft",
//   "Frontend developer"
// );
// employee.displayDetails();

function Product(id, name, price) {
  this.id = id || "---";
  this.name = name || "---";
  this.price = Number(price) || 0;

  this.displayDetails = () => {
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price} EUR`);
  };
}

function ElectricalDevice(id, name, price, brand, model) {
  Object.setPrototypeOf(this, new Product(id, name, price));
  this.brand = brand || '---';
  this.model = model || '---';

  this.displayDetails = () => {
    // console.log(`Id: ${this.id}`);
    // console.log(`Name: ${this.name}`);
    // console.log(`Price: ${this.price}`);
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
  }
}

function Clothes(id, name, price, size, material) {
  Object.setPrototypeOf(this, new Product(id, name, price));
  this.size = size || '---';
  this.material = material || '---';

  this.displayDetails = () => {
    // console.log(`Id: ${this.id}`);
    // console.log(`Name: ${this.name}`);
    // console.log(`Price: ${this.price}`);
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Size: ${this.size}`);
    console.log(`Material: ${this.material}`);
  }
}

function Laptop(id, name, price, brand, model, processor, isTouchScreen) {
  Object.setPrototypeOf(this, new ElectricalDevice(id, name, price, brand, model));
  this.processor = processor || '---';
  this.isTouchScreen = isTouchScreen || false;

  this.displayDetails = () => {
    // console.log(`Id: ${this.id}`);
    // console.log(`Name: ${this.name}`);
    // console.log(`Price: ${this.price}`);
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Processor: ${this.processor}`);
    console.log(isTouchScreen ? 'Touch Screen' : 'Regular screen');
  }
}

console.log('Product');
const product = new Product(1, 'Some product', 1);
product.displayDetails();

console.log('\nElectricalDevice');
const elDevice = new ElectricalDevice(2, 'Headphones', 100, 'Philips', 'Fidelio L3');
elDevice.displayDetails();

console.log('\nLaptop');
const laptop = new Laptop(4, 'Laptop', 1700, 'HP', 'Notebook - 15-ac650tu', 'Intel Core i5', true);
laptop.displayDetails();

console.log('\nClothes');
const dress = new Clothes(3, 'Little Black Dress', 35, 'S', 'cotton');
dress.displayDetails();
