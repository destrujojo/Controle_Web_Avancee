console.log("Let's go !");

AppelleApi(8);

async function AppelleApi(nbrlimite) {
  const data = await fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .catch((error) => alert("Erreur : " + error));
  console.log(data);

  for (let i = 0; i < nbrlimite; i++) {
    let newDiv = document.createElement("div");
    let maDiv = document.querySelector(".img_caracter_list");

    newDiv.classList.add("caracter_detail", data[i].id);

    newDiv.innerHTML = `<div class="img_caracter"><img src="${data[i].image}" alt="" class="${data[i].house}" /></div>
              <p>${data[i].name}</p>`;

    maDiv.appendChild(newDiv);
  }
}
