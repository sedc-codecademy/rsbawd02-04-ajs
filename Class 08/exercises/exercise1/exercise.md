# Exercise 1 (Object destructuring)

Given an object representing a student with nested details

```javascript
const student = {
  id: 1001,
  name: 'Alice',
  age: 20,
  address: {
    street: '456 Elm St',
    city: 'Somewhere',
    country: 'USA'
  },
  grades: {
    math: 90,
    science: 85,
    history: 95
  }
};
```

1. Use object destructuring to extract the following properties:
   - name, age, and city from the student object
   - Provide default values for age and city if they are missing
   - Log the extracted values

2. Extract and calculate the average grade. Then log the average grade