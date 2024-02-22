// const title = document.getElementsByTagName("h1")[0];
// const title = document.querySelector('h1');
// const title = document.querySelector(".text-center");
// // const title = document.querySelector("#title");
// const title = document.getElementById("title");

// title.innerText = "Class 02 - DOM and Events";
// title.style.color = "red";
// title.style["background-color"] = 'blue';
// title.style.backgroundColor = 'blue';
// title.classList.add("red-text");
// title.classList.remove('red-text');
// title.classList.toggle('red-text');

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// const listItems2 = document.querySelectorAll("li");
// console.log(listItems2);

// for (let i = 0; i < listItems.length; i++) {
//   console.log(listItems[i]);
// }

// for (let i = 0; i < listItems2.length; i++) {
//   console.log(listItems2[i]);
// }

// throws error
// listItems.forEach(element => {
//   console.log(element);
// });

// listItems2.forEach(element => {
//   console.log(element);
// });

// const listItems = document.querySelectorAll("li");
// const index = Number(
//   prompt("Unesite redni broj frameworka koji vam je najdrazi")
// );

// if (index > listItems.length || index <= 0) {
//   console.warn("Index not valid");
// } else {
//   listItems[index - 1].classList.add("active");
// }

// const saveBtn = document.getElementById("saveBtn");
// const newItemInput = document.getElementById("newItemInput");
// const list = document.querySelector("ul");

// function onSaveClicked() {
//   const value = newItemInput.value; // ""

//   if (!value) {
//     console.warn("Required field");
//   } else {
//     list.innerHTML += `<li class="list-group-item">${value}</li>`;
//     newItemInput.value = "";
//   }
// }

// saveBtn.onclick = onSaveClicked;
// saveBtn.addEventListener("click", onSaveClicked);

// function getRandomNumber() {
//   // 0 - 255
//   return Math.floor(Math.random() * 256);
// }

// function getColor() {
//   // rgb(123, 22, 33)
//   return `rgb(${getRandomNumber()}, ${getRandomNumber()},  ${getRandomNumber()})`;
// }

// const generateBtn = document.getElementById("generateBtn");
// const colorInput = document.getElementById("colorInput");
// const fontSizeInput = document.getElementById("fontSizeInput");
// const itemsInput = document.getElementById("itemsInput");

// function onGenerate() {
//   const list = document.createElement("ul");
//   const itemsArray = itemsInput.value.split(","); // ['aa', 'bbb', 'ccc'];
//   const color = colorInput.value;
//   const fs = fontSizeInput.value;
//   let isFormValid = true;

//   if (!colorInput.value) {
//     console.warn("Color is required");
//     isFormValid = false;
//   }
//   if (!fontSizeInput.value || isNaN(fontSizeInput.value)) {
//     console.warn("font size is required and must be a number");
//     isFormValid = false;
//   }
//   if (!itemsInput.value) {
//     console.warn("items are required");
//     isFormValid = false;
//   }

//   if (isFormValid) {
//     itemsArray.forEach(function (element) {
//       const li = document.createElement("li");
//       li.style.color = color;
//       li.style.fontSize = `${fs}px`;
//       li.innerText = element;
//       list.appendChild(li);
//     });

//     document.body.appendChild(list);

//     colorInput.value = "";
//     fontSizeInput.value = "";
//     itemsInput.value = "";
//   }
// }

// function onGenerate2() {
//   let list = '<ul>';
//   const itemsArray = itemsInput.value.split(',');// ['aa', 'bbb', 'ccc'];
//   console.log(itemsArray);

//   itemsArray.forEach(function(element){
//     list += `<li>${element}</li>`;
//   });

//   list += '</ul>';

//   console.log(list);

//   document.body.innerHTML += list;
// }

// generateBtn.addEventListener("click", onGenerate);
