// console.log("Test");
// window.console.log('window test');

// // alert("obavijest!!!");
// // window.alert('jajaja');

// // THIS
// console.log('root', this);

// function firstFunction() {
//   console.log('firstFunctions -> this', this);
// }

// firstFunction();
// // window.firstFunction();

// const student = {
//   name: 'Niko Nikic',
//   displayThis: function () {
//     console.log('this inside student => ', this);
//   }
// }

// student.displayThis();

// function Student(name, age) {
//   this.name = name || '---';
//   this.age = age || 0;
// }

// const st1 = new Student('John', 20);
// console.log(st1.name);//John

// OBJECT DESTRUCTRING
// const myDog = {
//   name: "Bugsy",
//   color: "Black",
//   age: 4,
//   vacinations: {
//     vacination1: "12.12.2022.",
//     vacination2: "09.03.2023.",
//   },
//   bark: function () {
//     console.log("BARK BARK BARK!");
//   },
// };

// const dog2 = {
//   name: "Rex",
//   color: "Gray",
//   age: 2,
//   owner: "Ana",
// };

// const { name, color } = myDog;

// // console.log(`Dog ${myDog.name} has ${myDog.color} color.`);
// console.log(`Dog ${name} has ${color} color.`);

// function displayOwner({ owner = "NO OWNER" }) {
//   // const { owner = 'NO OWNER' } = dog;
//   console.log(`Owner is ${owner}`);
// }

// displayOwner(dog2);
// displayOwner(myDog);

// console.log(myDog.owner); // undefined

// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publicationYear: 1925,
//   genre: "Fiction",
//   ratings: {
//     goodreads: 4.0,
//     amazon: 4.5,
//     barnesAndNoble: 4.2,
//   },
// };

// const average = ((book.ratings.goodreads + book.ratings.amazon + book.ratings.barnesAndNoble)/3).toFixed(2);
// console.log(`${book.title} (${book.author}) has ${average} average rating`);
// const title = book.title;
// const { title } = book;

// console.log(title);
// console.log(book);

// const {
//   title = '---',
//   author = '---',
//   ratings: { goodreads, amazon, barnesAndNoble },
// } = book;

// const average = ((goodreads + amazon + barnesAndNoble) / 3).toFixed(2);
// console.log(`${title} (${author}) has ${average} average rating`);

// ARRAY DESTRUCTRING

// const subjects = ["Math", "Biology", "Chemistry", "Phisics"];
// // const firstSubject = subjects[0];//Math
// const [firstSubject, secondSubject, , fourthSubject] = subjects;

// console.log(`First subject is ${firstSubject}`);
// console.log(`Second subject is ${secondSubject}`);
// console.log(`Fourth subject is ${fourthSubject}`);

// const colorTypes = ["RGB", "HEX", "HSL"];
// const colorValues = ["191, 34, 183", "#bf22b7", "303°, 70%, 44%"];
// // RGB - 191, 34, 183
// // HEX - #bf22b7

// const [rgb, hex, hsl] = colorTypes;
// const [rgbValue, hexValue, hslValue] = colorValues;

// console.log(`${rgb} - ${rgbValue}`);
// console.log(`${hex} - ${hexValue}`);
// console.log(`${hsl} - ${hslValue}`);

// EXAMPLE

function Car(brand, model, year, price) {
  this.brand = brand || "---";
  this.model = model || "---";
  this.year = Number(year) || 0;
  this.price = Number(price) || 0;
  this.owners = [];

  this.displayOwners = function() {
    if(this.owners.length) {
      console.log('Owners: ');
      this.owners.forEach(({fullName}) => {
        console.log(fullName);
      });
    } else {
      console.log("This car is brand new - no previous owners.");
    }
  }

  this.displayDetails = function () {
    console.log(`${this.brand} ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Price: ${this.price} EUR`);
    this.displayOwners();
  };

  this.addOwner = function ({ id, fullName }) {
    this.owners.push({id, fullName});
  };
}

const car1 = new Car("VW", "Golf VII", 2019, 15000);
const car2 = new Car("Audi", "A3", "2022", 24000);

const person1 = {
  id: 1,
  fullName: "Aida Pirusic",
  age: 12,
  favFood: ["chocolate", "water"],
};

const person2 = {
  id: 2,
  fullName: "Miroslav Popovic",
  age: 12,
  favFood: ["meat", "orange"],
};

const person3 = {
  id: 3,
  fullName: "Almir Vuk",
  age: 12,
  favFood: ["carrot", "water"],
};

car1.addOwner(person1);
car1.addOwner(person2);
car1.addOwner(person3);

car1.displayDetails();
console.log("\n");
car2.displayDetails();

// 2 456.45
