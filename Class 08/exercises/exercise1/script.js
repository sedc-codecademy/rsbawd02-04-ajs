const student = {
  id: 1001,
  name: "Alice",
  age: 20,
  address: {
    street: "456 Elm St",
    city: "Somewhere",
    country: "USA",
  },
  grades: {
    math: 90,
    science: 85,
    history: 95,
  },
};

const {
  name,
  age = "Age not provided",
  address: { city = "City not provided" },
} = student;

console.log(`Student Name: ${name}`);
console.log(`Student Age: ${age}`);
console.log(`Student City: ${studentCity}`);

const {
  grades: { math = 0, science = 0, history = 0 },
} = student;
const averageGrade = (math + science + history) / 3;
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);
