// const names = ['Milica', 'Goran', 'Djordje'];

// console.log(names);

// const newName = prompt('Enter new name');
// names.push(newName);
// console.log(names);

// JSON
// const response = `{
//     "trainer": "Trainer name",
//     "assistant": "Assistant name",
//     "students": [
//       "Bob",
//       "Samantha",
//       "Chris",
//       "Jill",
//       "Greg"
//     ],
//     "academy": "Code"
//   }`;

// const jsObject = JSON.parse(response);
// console.log(jsObject);

// let someObject = {
//   trainer: "Trainer name",
//   assistant: "Assistant name",
//   students: ["Bob", "Samantha", "Chris", "Jill", "Greg"],
//   academy: "Code",
// };

// const toJson = JSON.stringify(someObject);
// console.log(toJson);

// I way
// let xhr = new XMLHttpRequest();
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     console.log("xhr success");
//     console.log("response", xhr.response);
//     const students = JSON.parse(xhr.response);
//     console.log(students);
//   } else {
//     console.error("xhr error");
//   }
// };

// // GET, POST, PUT, DELETE
// xhr.open(
//   "GET",
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
// );
// xhr.send();

// II way
// $.ajax({
//     url: 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json',
//     success: function(response) {
//         console.log('jQuery - success');
//         console.log('response', response);
//         const students = JSON.parse(response);
//         console.log('students', students);
//     },
//     error: function (errorResponse) {
//         console.error('jQuery - error', errorResponse);
//     }
// });

// const academyHeading = document.getElementById("academy");
// const studentsList = document.getElementById("students");

// III way

// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
// )
//   .then(function (response) {
//     console.log("fetch - success");
//     return response.json();
//   })
//   .then(function (jsResponse) {
//     console.log(jsResponse);
//     academyHeading.innerText = jsResponse.academy;

//     jsResponse.students.forEach((student) => {
//       const li = document.createElement("li");
//       li.innerText = student;
//       studentsList.appendChild(li);
//     });
//   })
//   .catch(function () {
//     console.error("fetch - error");
//   });

// const astrosList = document.getElementById("astros");

// fetch("http://api.open-notify.org/astros.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     // spaceData.people.forEach((astro) => {
//     //     const li = document.createElement('li');
//     //     li.innerText = astro.name;
//     //     astrosList.appendChild(li);
//     // });
//   })
//   .catch(function () {
//     console.error("Route has failed");
//   });

// query params
// https://catfact.ninja/fact

// const baseUrl = 'https://catfact.ninja';


const student = {
  firstName: 'test',
  lastName: 'test',
}

console.log(student.firstName);
console.log(student['firstName']);




const sendRequestButton = document.getElementById("sendRequest");
const personNameHeading = document.getElementById('personNameHeading');

function setHeading (value) {
  personNameHeading.innerText = value;
}

function generateTable(data) {
  // document.body.innerHTML += `
  //     <table>
  //       <tr>
  //           <th>Height</th>
  //           <th>Weight</th>
  //           <th>Eye color</th>
  //           <th>Hair color</th>
  //       </tr>

  //       <tr>
  //         <td>${data.height} cm</td>
  //         <td>${data.mass} kg</td>
  //         <td>${data.eye_color}</td>
  //         <td>${data.hair_color}</td>
  //       </tr>
  //   </table>
  //     `;

  const table = document.createElement('table');
 

  const headingsTr = document.createElement('tr');
  const headings = ['Height', 'Weight', 'Eye color', 'Hair color', 'Skin color'];

  headings.forEach(heading => {
    const cell = document.createElement('th');
    cell.innerText = heading;
    headingsTr.appendChild(cell);
  });
  table.appendChild(headingsTr);

  
  const propertyNames = ['height', 'mass', 'eye_color', 'hair_color', 'skin_color'];
  const contentTr = document.createElement('tr');

  propertyNames.forEach(property => {
    console.log(property, data[property]);

    const cell = document.createElement('td');
    cell.innerText = data[property];
    contentTr.appendChild(cell);
  });

  table.appendChild(contentTr);

  document.body.appendChild(table);
}


function onSendRequesClicked() {
  fetch("https://swapi.dev/api/people/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      setHeading(data.name);
      generateTable(data);
    })
    .catch(function () {
      console.error("Star Wars API has failed");
    });
}

sendRequestButton.addEventListener("click", onSendRequesClicked);
