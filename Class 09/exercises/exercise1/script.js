const course = {
  title: "Advanced JavaScript",
  maxStudents: 10,
  numOfClasses: 15,
  starting: '20.02.2024.',
  ending: '28.03.2024.',
  price: {
    value: 1000,
    currency: "EUR",
  },
  teachers: ["Aida", "Miroslav", "Almir"],
};

const {
  title,
  price: { value = 'unknown', currency = 'unknown'},
} = course;

console.log(`Course: ${title}`);
console.log(`Price: ${value} ${currency}`);
