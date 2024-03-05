//

const myButton = document.getElementById("myButton");
const ajaxButton = document.getElementById("ajaxButton");

myButton.addEventListener("click", function () {
  console.log("clicked!!!");
});

ajaxButton.addEventListener("click", function () {
  fetch("https://swapi.dev/api/planets/?page=1").then(() => {
    console.log("API response received");
  });
});

const displayTeacherName = () => {
  console.log("Teacher: Aida P.");
};

const displayAcademyName = () => {
  console.log("Quinshift academy 2024");
};

setTimeout(displayTeacherName, 3000); // on hold
displayAcademyName(); // ne blokira ovu funkciju


let counter = 1;
let intervalId;

const runTimer = () => {
  console.log(counter);
  counter++;

  if(counter === 6){
    clearInterval(intervalId);
  }
};

intervalId = setInterval(runTimer, 2000);//346534tk=46464
