console.log("Let's go !");

AppelleApi(8);

let tableauMaison = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

let divHouse = document.querySelector(".housse_bloc");

divHouse.addEventListener("click", () => (e) => housseselect(e.target));

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

function housseselect(valeur) {
  console.log(valeur);
}

function creationLogoMaison() {
  for (let i = 0; i < 4; i++) {
    let newDiv = document.createElement("div");
    let maDiv = document.querySelector(".housse_bloc");

    newDiv.addEventListener("click", (e) => housseselect(e.target));

    switch (tableauMaison[i]) {
      case Gryffindor:
        newDiv.innerHTML = `<img src="./images/logo/Gryffindor.png" alt="" />`;
        break;
      case Hufflepuff:
        newDiv.innerHTML = `<img src="./images/logo/Hufflepuff.png" alt="" />`;
        break;
      case Ravenclaw:
        newDiv.innerHTML = `<img src="./images/logo/Ravenclaw.png" alt="" />`;
        break;
      case Slytherin:
        newDiv.innerHTML = `<img src="./images/logo/Slytherin.png" alt="" />`;
        break;
    }
  }
}
