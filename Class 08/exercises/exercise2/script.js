const studentSubjects = ['Math', 'Science', 'History'];
const studentGrades = [90, 85, 95];

// Use array destructuring to extract subjects and grades
const [subject1, subject2, subject3] = studentSubjects;
const [grade1, grade2, grade3] = studentGrades;

// Log the extracted values
console.log(`Subject 1: ${subject1}, Grade: ${grade1}`);
console.log(`Subject 2: ${subject2}, Grade: ${grade2}`);
console.log(`Subject 3: ${subject3}, Grade: ${grade3}`);