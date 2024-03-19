// class Person {
//   constructor(id, name, gender, age) {
//     this.id = Number(id) || 0;
//     this.name = name || "---";
//     this.lastName = lastName || "---";
//     this.firstName = firstName || "---";
//     this.gender = gender.toLowerCase() || "---";
//     this.age = Number(age) || 0;
//   }

//   set name(personName) {
//     if (!personName || personName.length < 2 || !isNaN(personName)) {
//       console.error(
//         "Person name is not valid. It needs to have at least 3 characters. And cannot be number."
//       );
//     } else {
//       this._name = personName;
//     }
//   }

//   get name() {
//     return `The name is ${this._name}`;
//   }

//   displayDetails() {
//     console.log(`Id: ${this.id}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Gender: ${this.gender}`);
//     console.log(`Age: ${this.age}`);
//   }

//   static isFemale(obj) {
//     return obj.gender.toLowerCase() === "female";
//   }
// }

// class Student extends Person {
//   constructor(id, name, gender, age, academyName, academyYear) {
//     super(id, name, gender, age);

//     this.academyName = academyName || "---";
//     this.academyYear = Number(academyYear) || 1;
//   }

//   displayInfo() {
//     this.displayDetails();
//     console.log(`Academy: ${this.academyName}`);
//     console.log(`Year: ${this.academyYear}`);
//   }
// }

// class Employee extends Person(Student) {
//   constructor(id, name, gender, age, company, jobTitle) {
//     super(id, name, gender, age);

//     this.company = company || "---";
//     this.jobTitle = jobTitle || "---";
//   }

//   // override function
//   displayDetails() {
//     super.displayDetails();
//     console.log(`Company: ${this.company}`);
//     console.log(`Job title: ${this.jobTitle}`);
//   }
// }

// const person1 = new Person(1, "Aida P", "female", 22);
// const person2 = new Person(2, "Djordje L", "male", 20);

// // person1.name = 'F';

// person1.displayDetails();
// console.log("\n");
// person2.displayDetails();

// const st1 = new Student(3, "Milica D", "female", 20, "Qinshift academy", 1);
// console.log("displayDetails:");
// st1.displayDetails();
// console.log("\ndisplayInfo:");
// st1.displayInfo();
// console.log("\n:");

// const empl1 = new Employee(
//   4,
//   "Tamara Z",
//   "female",
//   20,
//   "Microsoft",
//   "Frontend developer"
// );
// empl1.displayDetails();

// // STATIC METHOD
// Math.pow(3, 2);
// // console.log(Person.isFemale(person1));
// // console.log(Person.isFemale(person2));

// console.log(empl1 instanceof Person); //true
// console.log(empl1 instanceof Employee);
// console.log(empl1 instanceof Student); //false

// function whoAmI(obj) {
//   if (obj instanceof Student) {
//     console.log("IT IS A STUDENT");
//   } else if (obj instanceof Employee) {
//     console.log("IT IS AN EMPLOYEE");
//   } else if (obj instanceof Person) {
//     console.log("IT IS A PERSON");
//   } else {
//     console.log("Error");
//   }
// }

// whoAmI(person1);
// whoAmI(st1);
// whoAmI(empl1);
// whoAmI({ test: 1234 });

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
    console.log(`Price: ${this.price} EUR`);
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

  displayDetails() {
    super.displayDetails();
    console.log(`Processor: ${this.processor}`);
    console.log(this.isTouchScreen ? "Touch screen" : "Regular screen");
  }
}

class Clothes extends Product {
  constructor(id, name, price, size, material) {
    super(id, name, price);
    this.size = size || "S";
    this.material = material || "---";
  }

  set size(newSize) {
    const uppercasedSize = newSize.toUpperCase(); //s => S
    const validSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

    if (validSizes.includes(uppercasedSize)) {
      this._size = uppercasedSize;
    } else {
      console.error("Size is not valid!");
      this._size = "S";
    }
  }

  get size() {
    return this._size.toUpperCase();
  }

  displayInfo() {
    this.displayDetails();
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
laptop.displayDetails();

console.log("\nClothes");
const dress = new Clothes(3, "Little Black Dress", 35, "j", "cotton");
dress.displayInfo();


class Person {
  constructor(id, name, gender, age) {
    this.id = Number(id) || 0;
    this.name = name || "---";
    this.gender = gender.toLowerCase() || "---";
    this.age = Number(age) || 0;
  }

  getFullName(person) {
    console.log(this.name);
    console.log(person.name);
  }

}

const p1 = new Person(1, 'AIda', 'female', 20);
const p2 = new Person(1, 'Djordje', 'male', 20);

p1.getFullName(p2);


