const getYoungestAnimal = (animals) => {
  const copy = [...animals];
  copy.sort((a, b) => a.age - b.age);

  return copy[0];
};

const getFemaleAnimals = (animals) =>
  animals.filter((el) => el.gender === "female");

const getMaleAnimals = (animals) => animals
.filter((el) => el.gender === "male")
.map((el) => el.name);

export { getYoungestAnimal, getFemaleAnimals, getMaleAnimals };
