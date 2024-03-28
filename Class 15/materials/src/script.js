// import axios from 'axios';
import { getCatFacts } from "./catFactsService.js";
import { checkEmail, checkPassword } from "./validatorService.js";
import { pluralizeWord } from "./wordService.js";

const catFactsBtn = document.getElementById("catFactsBtn");
const checkEmailBtn = document.getElementById("checkEmail");
const checkPasswordBtn = document.getElementById("checkPassword");
const pluralizeWordBtn = document.getElementById("pluralizeWordBtn");

catFactsBtn.onclick = getCatFacts;
checkEmailBtn.onclick = checkEmail;
checkPasswordBtn.onclick = checkPassword;
pluralizeWordBtn.onclick = pluralizeWord;
