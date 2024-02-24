$(document).ready(function () {
  const getDogImageBtn = document.getElementById("dogImageBtn");

  function displayDogImage(imageUrl) {
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageUrl);
    imageElement.classList.add('image');
    document.body.appendChild(imageElement);
  }

  function onGetImageClicked() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("data", data);
        displayDogImage(data.message);
      })
      .catch(function () {
        console.error("Api has failed");
      });
  }

  getDogImageBtn.addEventListener("click", onGetImageClicked);
});
