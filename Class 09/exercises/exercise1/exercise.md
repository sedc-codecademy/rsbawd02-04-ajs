# Exercise 1 (Object destructuring)

You can notice an object representing a course with nested details

```javascript
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
```

Use object destructuring to extract the following properties:
   - title , price value and price currency 
   - Provide default values for price value and currency as `uknown` if they are missing
   - Log the extracted values
