const error = document.getElementById("error");
export const hideError = () => {
  error.classList.add("hide");
};

export const showError = (errorText) => {
  error.innerText = errorText;
  error.classList.remove("hide");
};
