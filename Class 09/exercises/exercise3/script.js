// SOLUTION WITH .THEN

// const catImage = document.getElementById("fact-img");
// const catFact = document.getElementById("fact-text");
// const factButton = document.getElementById("factButton");

// // helper method for fetch, so we don't have to write
// // res.json() every time we make fetch call
// const fetchHelper = (url) => fetch(url).then((res) => res.json());

// const fetchFact = () => fetchHelper("https://meowfacts.herokuapp.com/");

// const fetchImage = () => fetchHelper("https://random.dog/woof.json");

// const getFact = () =>
//   new Promise((resolve, reject) => {
//     fetchFact()
//       .then((response) => {
//         const fact = response.data[0];
//         resolve(fact);
//       })
//       .catch((error) => reject(error));
//   });

// const displayFact = (text) => {
//   catFact.innerText = text;
// };

// const displayImage = ({ url }) => {
//   catImage.setAttribute("src", url);
// };

// const renderFact = () => {
//   getFact()
//     .then((fact) => {
//       fetchImage()
//         .then((imageResponse) => {
//           displayFact(fact);
//           displayImage(imageResponse);
//         })
//         .catch((error) => {
//           console.error(`Could not fetch fact image. ${error.message}`);
//         });
//     })
//     .catch((error) => {
//       console.error(`Could not fetch fact. ${error.message}`);
//     });
// };

// factButton.addEventListener("click", renderFact);

// SOLUTION WITH AWAIT:

const catImage = document.getElementById("fact-img");
const catFact = document.getElementById("fact-text");
const factButton = document.getElementById("factButton");

// helper method for fetch, so we don't have to write
// res.json() every time we make fetch call
const fetchHelper = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const fetchFact = () => fetchHelper("https://meowfacts.herokuapp.com/");

const fetchImage = () => fetchHelper("https://random.dog/woof.json");

const getFact = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetchFact();
      const fact = response.data[0];
      resolve(fact);
    } catch (error) {
      reject(error);
    }
  });

const displayFact = (text) => {
  catFact.innerText = text;
};

const displayImage = ({ url }) => {
  catImage.setAttribute("src", url);
};

const renderFact = async () => {
  try {
    const fact = await getFact();
    const imageResponse = await fetchImage();

    displayFact(fact);
    displayImage(imageResponse);
  } catch (error) {
    console.error(error.message);
  }
};

factButton.addEventListener("click", renderFact);
