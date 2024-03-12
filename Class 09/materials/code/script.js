// const obj = {
//   name: "Aida",
// };
// // Object.create

// // const copy = obj;
// // const copy = { ...obj };
// const copy = Object.create(obj);
// copy.name = "Almir";

// console.log(copy.name); // Almir
// console.log(obj.name); // Aida

// // Object.assign
// const studentBasicInfo = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 23,
// };

// const studentAdditionalInfo = {
//   address: "Other Adress",
//   street: "Other Street",
//   streetNumber: 12,
//   mobile: "111 111 111",
// };

// const student = Object.assign({}, studentBasicInfo, studentAdditionalInfo);

// console.log('student', student);
// console.log('studentBasicInfo', studentBasicInfo);
// console.log('studentAdditionalInfo', studentAdditionalInfo);

// // Object.keys
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// 1
// async function asyncFunc() {
//   console.log("A");
//   await new Promise((resolve) =>
//     setTimeout(() => {
//       console.log("F");
//       resolve();
//     }, 1000)
//   );
//   console.log("B");
// }
// console.log("C");
// asyncFunc();
// console.log("D");

// // 2
// console.log('Start');

// setTimeout(() => console.log('Timeout 1'), 1000);
// Promise.resolve().then(() => console.log('Promise 1'));

// Promise.resolve().then(() => console.log('Promise 2'));
// setTimeout(() => console.log('Timeout 2'), 0);

// console.log('End');

// function mojaFunkcija() {
//   return new Promise((resolve, reject) => {
//     reject("Neka error poruka");
//   });
// }

// mojaFunkcija().catch((err) => {
//   console.log(err);
// });

// function mojaFunkcija2() {
//   throw new Error("Ovo je novi error");
//   // console.log(student.firstName);
// }

// // mojaFunkcija2();

// try {
//   mojaFunkcija2();
// } catch (error) {
//   console.log("Ovo ne radi !!!");
// }

// console.log('ovo opet se izvrsava');

const btn = document.getElementById("factButton");
const text = document.getElementById("fact-text");
const img = document.getElementById("fact-img");


const myFetch = (url) => fetch(url).then((result) => result.json())

const fetchFact = () => myFetch("https://meowfacts.herokuapp.com/");

const fetchImage = () => myFetch("https://random.dog/woof.json");

const getFact = () => {
  return new Promise((resolve, reject) => {
    fetchFact()
      .then((response) => {
        const fact = response.data[0];
        resolve(fact);// 'Neki text'
      })
      .catch((error) => {
        reject(error);
      });
  });
};

btn.addEventListener("click", () => {
  getFact()
    .then((fact) => {// 'Neki text'
      fetchImage()
        .then((imageObject) => {
          const { url } = imageObject;
          text.innerText = fact;
          img.src = url;
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
});
