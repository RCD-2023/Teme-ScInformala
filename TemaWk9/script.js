/**
 * Metoda fetch folosind promise (.then.then and catch).
 */

//selectare elemente html de interes

const UI = {
  getPhoto: document.getElementById("getPhotoBtn"),
  animalSelect: document.getElementById("animalSelect"),
  animalImage: document.getElementById("animalImage"),
};

function getAnimalPhoto() {
  const selectedAnimal = UI.animalSelect.value;
  let apiUrl = "";

  if (selectedAnimal === "cat") {
    apiUrl = "https://api.thecatapi.com/v1/images/search";
  } else if (selectedAnimal === "dog") {
    apiUrl = "https://dog.ceo/api/breeds/image/random";
  } else if (selectedAnimal === "fox") {
    apiUrl = "https://randomfox.ca/floof/";
  }

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let imageUrl = "";
      if (selectedAnimal === "cat") {
        imageUrl = data[0].url;
      } else if (selectedAnimal === "dog") {
        imageUrl = data.message;
      } else if (selectedAnimal === "fox") {
        imageUrl = data.image;
      }
      UI.animalImage.src = imageUrl;
    })
    .catch((error) => console.error("Error fetching the image:", error));
}

UI.getPhoto.addEventListener("click", getAnimalPhoto);
