import { getFemaleAnimals, getYoungestAnimal, getMaleAnimals } from "./animalService.js";

class Animal {
  constructor(name, gender, age) {
    this.id = Math.floor(Math.random() * 500);
    this.name = name || "---";
    this.gender = gender || "---";
    this.age = Number(age) || 0;
  }
}

const animals = [
  new Animal("Kitty", "female", 2),
  new Animal("Rex", "male", 3),
  new Animal("Bobby", "male", 4),
  new Animal("Micka", "female", 1),
];

console.log("Youngest animal", getYoungestAnimal(animals).name);
console.log("Female animals", getFemaleAnimals(animals));
console.log("Male animals", getMaleAnimals(animals));

