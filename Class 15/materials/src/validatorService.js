export const checkEmail = () => {
  const emailResponse = document.getElementById("emailResponse");
  const email = document.getElementById("emailInput").value;

  if (validator.isEmail(email)) {
    emailResponse.innerText = "Email is valid";
    emailResponse.classList.remove("alert-danger");
    emailResponse.classList.add("alert-success");
  } else {
    emailResponse.innerText = "Email is not valid";
    emailResponse.classList.remove("alert-success");
    emailResponse.classList.add("alert-danger");
  }
};

export const checkPassword = () => {
  const PasswordResponse = document.getElementById("passwordResponse");
  const Password = document.getElementById("passwordInput").value;

  if (validator.isStrongPassword(Password)) {
    PasswordResponse.innerText = "Password is strong";
    PasswordResponse.classList.remove("alert-danger");
    PasswordResponse.classList.add("alert-success");
  } else {
    PasswordResponse.innerText = "Password is not strong";
    PasswordResponse.classList.remove("alert-success");
    PasswordResponse.classList.add("alert-danger");
  }
};
