// Inheritance with classes

// class Person {
//   constructor(id, name, gender) {
//     this.id = Number(id) || 0;
//     this.name = name || "---";
//     this.gender = gender.toLowerCase() || "---";
//   }

//   get name() {
//     return `The name is ${this._name}`;
//   }

//   set name(personName) {
//     if (!personName || personName.length < 3) {
//       console.error("Person name must have at least 3 characters!");
//     } else {
//       this._name = personName;
//     }
//   }

//   displayDetails() {
//     console.log(`Id: ${this.id}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Gender: ${this.gender}`);
//   }

//   static isFemale(person) {
//     return person.gender.toLowerCase() === "female";
//   }
// }

// class Student extends Person {
//   constructor(id, name, gender, academyName, academyYear) {
//     super(id, name, gender);

//     this.academyName = academyName || "---";
//     this.academyYear = Number(academyYear) || 1;
//   }

//   displayInfo() {
//     this.displayDetails();
//     console.log(`Academy: ${this.academyName}`);
//     console.log(`Year: ${this.academyYear}`);
//   }
// }

// class Employee extends Person {
//   constructor(id, name, gender, company, jobTitle) {
//     super(id, name, gender);

//     this.company = company || "---";
//     this.jobTitle = jobTitle || "---";
//   }

//   displayDetails() {
//     super.displayDetails();
//     console.log(`Company: ${this.company}`);
//     console.log(`Job title: ${this.jobTitle}`);
//   }
// }

// const person1 = new Person(1, "Aida P", "female");
// const person2 = new Person(2, "Milica D", "female");

// person1.displayDetails();
// console.log("\n");
// person2.displayDetails();
// console.log("\n");

// const st1 = new Student(3, "Djordje L", "male", "Qinshift", 2);
// const st2 = new Student(4, "Goran R", "male", "Qinshift", 1);

// st1.displayInfo();
// console.log("\n");
// st2.displayInfo();
// console.log("\n");

// // Math.pow(3,2);
// console.log(Person.isFemale(person1));
// console.log(Person.isFemale(st1));

// st1.name = "A";
// console.log(st1.name); // still Djordje L

// const em1 = new Employee(
//   5,
//   "John Doe",
//   "male",
//   "Microsoft",
//   "Frontend developer"
// );
// em1.displayDetails();

// const whoAmI = (obj) => {
//   if (obj instanceof Student) {
//     console.log(`I'm STUDENT`);
//   } else if (obj instanceof Employee) {
//     console.log(`I'm EMPLOYEE`);
//   } else if (obj instanceof Person) {
//     console.log(`I'm just a person`);
//   } else {
//     console.log("ERROR");
//   }
// };

// console.log(person1 instanceof Person);
// console.log(st1 instanceof Student);
// console.log(st1 instanceof Employee);
// console.log(em1 instanceof Employee);

// whoAmI(person1);
// whoAmI(st1);
// whoAmI(em1);
// whoAmI({ test: 123 });

// EXAMPLE 1
class Product {
  constructor(id, name, price) {
    this.id = Number(id) || 0;
    this.name = name || "---";
    this.price = Number(price) || 0;
  }

  displayDetails() {
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price} $`);
  }
}

class ElectricalDevice extends Product {
  constructor(id, name, price, brand, model) {
    super(id, name, price);

    this.brand = brand || "---";
    this.model = model || "---";
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
  }
}

class Laptop extends ElectricalDevice {
  constructor(id, name, price, brand, model, processor, isTouchScreen) {
    super(id, name, price, brand, model);
    this.processor = processor || "---";
    this.isTouchScreen = isTouchScreen || false;
  }

  info() {
    super.displayDetails();
    console.log(`Processor: ${this.processor}`);
    console.log(this.isTouchScreen ? "Touch screen" : "Regular screen");
  }
}

class Clothes extends Product {
  constructor(id, name, price, size, material) {
    super(id, name, price);
    this.size = size || "---";
    this.material = material || "---";
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Size: ${this.size}`);
    console.log(`Material: ${this.material}`);
  }
}

console.log("PRODUCT:");
const product = new Product(1, "Dress", 35);
product.displayDetails();

console.log("\nELECTRICAL DEVICE:");

const elDevice = new ElectricalDevice(
  2,
  "Headphones",
  100,
  "Philips",
  "Fidelio L3"
);
elDevice.displayDetails();

console.log("\nClothes");
const dress = new Clothes(3, "Little Black Dress", 35, "S", "cotton");
dress.displayDetails();

console.log("\nLaptop");
const laptop = new Laptop(
  4,
  "Laptop",
  1700,
  "HP",
  "Notebook - 15-ac650tu",
  "Intel Core i5",
  true
);
console.log(laptop.name);
laptop.info();
