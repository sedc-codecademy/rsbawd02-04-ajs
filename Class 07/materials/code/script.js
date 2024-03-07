// console.log("We are live!");
function first(workTime) {
  return new Promise((resolve, reject) => {
    if (workTime <= 0) {
      reject("It's too short of a work time. Please try again!");
    }
    setTimeout(() => {
      resolve("First thing, preparing for the second");
    }, workTime);
  })
}

function second() {
  console.log("second thing!");
}

// //   console.log(first(0));
// first(0)
// .then(data => {
//     console.log(data);
//     // throw new Error("Nasha greshka!");
//     second();
//     })
// .catch(error => console.log(`ERROR: ${error}`))

// function  getDocuments(){
//     return new Promise((resolve, reject)=>{
//         $.ajax({
//             url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
//             success: (response)=> {
//                 resolve(JSON.parse(response));
//             },
//             error: (error)=> {
//                 reject(error);
//             }
//         })
//     })
// }
// function showDocuments(documents){
//     if(!documents && typeof(documents) != "object"){
//         throw new Error("Problem with documents!");
//     }
//     if(documents.length === 0){
//         throw new Error("There is no documents!")
//     }
//     documents.forEach(doc => {
//         console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
//     });
// }
// getDocuments()
// .then(data => {
//     console.log("We got the documents!");
//     showDocuments(data);
// })
// .catch(error => console.log(error.message));

function getDocuments() {
  return new Promise((resolve, reject) => {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error)
        });
  })
}

function getImportantDocuments(documents) {
  let importantDocuments = documents.filter(doc => doc.important);
  return new Promise((resolve, reject) => {
    if (importantDocuments.length === 0) {
      reject("There are no important documents!");
    }
    setTimeout(() => {
      resolve(importantDocuments);
    }, 3000);
  })
}

function checkDocuments(documents) {
  if (!documents || typeof (documents) != "object") {
    throw new Error("Problem with documents!");
  }
  if (documents.length === 0) {
    throw new Error("There is no documents!")
  }
}

function showDocuments(documents) {
  documents.forEach(doc => {
    console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
  });
}

// getDocuments()
// .then(data => { // data = documents from server
//     console.log("We got the documents!");
//     checkDocuments(data);
//     return getImportantDocuments(data); // return results from getImportantDocuments(data)
// })
// .then(data =>{
//    return showDocuments(data);
// })
// .then(data => {
//     // some code
// })
// .catch(error => console.log(error.message));

// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
// .then(response => response.json())
// .then(data => showDocuments(data))
// .catch(error => console.log(error.message))
// .finally(()=> console.log("Everything is done at: " + new Date()));

// async function getDataFromFetch(){
//     let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
//     let data = await response.json();
//     console.log(data);
// }


// try {
//     getDataFromFetch();
// } catch (error) {
//     console.log(error);
// }

// async function runFunctions(){
//     console.log(await first(2000)); // 2, 4(console.log)
//     second(); // 5
//     console.log(`Everything is done at: ${new Date()}`); // 6
// }
// runFunctions(); // 1
// console.log("This does not wait for the async function to finish!"); // 3

async function showImportantDocuments() {
  let startTime = new Date().getTime(); // 2
  let documents = await getDocuments(); // 3
  checkDocuments(documents); // 5
  let importantDocs = await getImportantDocuments(documents); // 6
  showDocuments(importantDocs); // 7
  console.log(`Done in: ${(new Date().getTime() - startTime) / 1000}s`); // 8
}

showImportantDocuments(); // 1
console.log("This does not wait for the async function to finish!"); // 4
