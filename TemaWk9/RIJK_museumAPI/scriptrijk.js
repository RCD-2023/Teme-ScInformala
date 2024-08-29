/**
 * Metoda fetch folosind structuri async/await.
 */

const getPhotoBtn = document.getElementById("getPhotoBtn");
const masterPiece = document.getElementById("masterPiece");

const apiKey = "RvKZAKvJ";
const apiUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&involvedMaker=Rembrandt+van+Rijn`;

async function getPhoto() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Asumând că primul obiect din rezultate conține o imagine
    const imageUrl = data.artObjects[0].webImage.url;

    // Actualizează src-ul imaginii din HTML
    masterPiece.src = imageUrl;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
getPhotoBtn.addEventListener("click", getPhoto);
