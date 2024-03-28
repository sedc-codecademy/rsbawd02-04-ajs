// import axios from 'axios';
import { showError, hideError } from "./errorService.js";

const showCatFacts = (facts) => {
  const catFactsList = document.getElementById("catFactsList");
  catFactsList.innerText = "";
  hideError();

  facts.forEach(({ text }) => {
    const li = document.createElement("li");
    li.innerText = text;
    li.classList.add("list-group-item");
    catFactsList.appendChild(li);
  });
};

export const getCatFacts = () => {
  hideError();
  axios
    .get("https://cat-fact.herokuapp.com/facts")
    .then((response) => {
      console.log("response", response);
      showCatFacts(response.data);
    })
    .catch((error) => {
      showError(error.message);
    });
};


