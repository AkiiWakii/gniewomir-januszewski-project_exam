/* Key = NhuDBJ0veSfZUKftbru2WhvPGEhpL5SIVNeTrSnD */
/* Display Nasa daily picture */
const url =
  "https://api.nasa.gov/planetary/apod?api_key=NhuDBJ0veSfZUKftbru2WhvPGEhpL5SIVNeTrSnD";

fetch(url)
  .then((response) => response.json())
  .then((data) => getData(data))
  .catch((error) => console.log(error));
  

  function getData(data){
    const link = data.url;
    const title = data.title;

    const pictureDiv = document.querySelector(".picture-div")
    pictureDiv.innerHTML = `
    <img src="${link}" alt="${title}">
    <p class="picture-title">${title}</p>`
  }
  


