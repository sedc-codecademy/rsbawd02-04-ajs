const fetchStudents = () =>
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  ).then((res) => res.json());

fetchStudents().then((students) => {
  console.log(students);

  const ex1 = students.filter((st) => st.averageGrade > 3);
  console.log("All students with an average grade higher than 3", ex1);

  const ex2 = students.filter(
    (st) => st.averageGrade === 5 && st.gender === "Female"
  );
  console.log("All female student names with an average grade of 5", ex2);

  const ex3 = students
    .filter((st) => st.age > 18 && st.gender === "Male" && st.city === "Skopje")
    .map((st) => `${st.firstName} ${st.lastName}`);
  console.log(
    "All male student full names who live in Skopje and are over 18 years old",
    ex3
  );

  const ex4 = students
    .filter((st) => st.age > 24 && st.gender === "Female")
    .map((el) => el.averageGrade);
  console.log(
    "The average grades of all female students over the age  of 24",
    ex4
  );

  const ex5 = students.filter(
    (st) =>
      (st.firstName.startsWith("B") || st.lastName.startsWith("B")) &&
      st.gender === "Male" &&
      st.averageGrade > 2
  );
  console.log(
    "All male students with a name starting with B and average grade over 2",
    ex5
  );
});
