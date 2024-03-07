// Sync code
function getTeacherName() {
  return "Aida P.";
}

function getAcademyName() {
  return "Quinshift academy";
}

// const academy = getAcademyName();
// const teacher = getTeacherName();

// console.log(`Academy: ${academy}`);
// console.log(`Teacher: ${teacher}`);

// Async function

// function isUserDataValid(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "aida" && password === "1234") {
//         resolve("User data valid!");
//       } else {
//         reject("User data not valid!");
//       }
//     }, 2000);
//   });
// }

// isUserDataValid("aida", "1234")
//   .then((response) => {
//     console.log("response => ", response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// isUserDataValid("aida", "0000")
//   .then((response) => {
//     console.log("response => ", response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// console.log(`Academy: ${getAcademyName()}`);

// Promise chaining

// Example 1 - Serving dinner

// const groceriesCount = 4;
// const canClean = false;

// function getGroceries() {
//   return new Promise((resolve, reject) => {
//     console.log("Getting groceries...");
//     setTimeout(() => {
//       if (groceriesCount > 0) {
//         resolve(["meat", "paprika", "carrot", "peper"]);
//       } else {
//         reject("No enough groceries!");
//       }
//     }, 2000);
//   });
// }

// function cleanGroceries() {
//   return new Promise((resolve, reject) => {
//     console.log("Cleaning groceries...");

//     setTimeout(() => {
//       if (canClean) {
//         resolve("Cleaned!!!");
//       } else {
//         reject("Groceries cannot be cleaned!");
//       }
//     }, 1000);
//   });
// }

// function makeDinner() {
//   return new Promise((resolve, reject) => {
//     getGroceries()
//       .then((response) => {
//         console.log("response 1", response);
//         cleanGroceries()
//           .then((res) => {
//             console.log("response 2", res);
//             resolve('Dinner is ready! Enjoy it!!!');
//           })
//           .catch((err) => {
//             console.error("error 2", err);
//             reject(err);
//           });
//       })
//       .catch((error) => {
//         console.error("error 1", error);
//         reject(error);
//       });
//   });
// }

// makeDinner().then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.error(error);
// });

// Example 2 - Add new IG photo

// const memoryFull = false;

// function takePhoto() {
//   return new Promise((resolve, reject) => {
//     console.log('Taking photo....');
//     setTimeout(() => {
//       if (memoryFull) {
//         reject("Phone memorty is full!");
//       } else {
//         resolve("Photo saved.");
//       }
//     }, 3000);
//   });
// }

// function editPhoto() {
//   return new Promise((resolve, reject) => {
//     console.log('Editing photo....');

//     const answer = confirm("Do you want to edit photo? ");

//     if (answer) {
//       resolve("Photo is edited.");
//     } else {
//       reject("Photo not edited.");
//     }
//   });
// }

// function addPhotoToIG() {
//   takePhoto().then(() => {
//       editPhoto().finally(() => {
//         console.log('%cPhoto successfully added to IG!', 'color:pink; font-size:16px;');
//       });
//     })
//     .catch((error) => {
//       console.error('Photo not added to instagram', error);
//     });
// }

// addPhotoToIG();

// Example 3 - Food ordering

// const isSelected = true;

// function selectItemsFromMenu() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSelected) {
//         resolve("Items selected!");
//       } else {
//         reject("Items not selected");
//       }
//     }, 2000);
//   });
// }

// function confirmOrder() {
//   return new Promise((resolve, reject) => {
//     const answer = confirm("Do you want to confirm order ?");

//     if (answer) {
//       resolve("Order confirmed!");
//     } else {
//       reject("Order not confirmed!");
//     }
//   });
// }

// function orderFood() {
//   selectItemsFromMenu()
//     .then(() => {
//       confirmOrder()
//         .then(() => {
//           console.log(
//             "%cOrder is ready. Enjoy your meal!",
//             "color:green;font-size:16px;"
//           );
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((err) => {
//       console.log("selectItemsFromMenu failed", err);
//     });
// }

// async function orderFood2() {
//   try {
//     await selectItemsFromMenu();
//     await confirmOrder();

//     console.log(
//       "%cOrder is ready. Enjoy your meal!",
//       "color:green;font-size:16px;"
//     );
//   } catch (error) {
//     console.error("Error has ocurred", error);
//   }
// }

// // orderFood();
// orderFood2();
const country = "MKD";

function getCountryByCode(code) {
  return fetch(`https://restcountries.com/v2/alpha/${code}`).then((res) =>
    res.json()
  );
}

function getBorderingCountries() {
  return new Promise((resolve, reject) => {
    getCountryByCode(country)
      .then((response) => {
        console.log(response);
        resolve(response.borders);
      })
      .catch((error) => {
        console.error("Fetching country failed", error);
        reject("An error has ocurred");
      });
  });
}

function renderCountries() {
  getBorderingCountries()
    .then((countries) => {
      console.log("Bordering countries", countries);
      countries.forEach((country) => {
        getCountryByCode(country)
          .then((response) => {
            console.log(country, response.name);
          })
          .catch(() => {
            console.error("Api failed...");
          });
      });
    })
    .catch(() => {
      console.error("An error has ocurred...");
    });
}

renderCountries();
