// import axios from 'axios';
import { getCatFacts } from "./catFactsService.js";
import { checkEmail, checkPassword } from "./validatorService.js";

const catFactsBtn = document.getElementById("catFactsBtn");
const checkEmailBtn = document.getElementById('checkEmail');
const checkPasswordBtn = document.getElementById('checkPassword');


catFactsBtn.onclick = getCatFacts;
checkEmailBtn.onclick = checkEmail;
checkPasswordBtn.onclick = checkPassword;


