const items = document.getElementById("items"),
  templateCard = document.getElementById("template-card").content,
  fragment = document.createDocumentFragment(),
  makeoverlay = document.querySelector(".info-container");

document.addEventListener("DOMContentLoaded", () => {
  ObtenerDatos("./data.json");
});

const ObtenerDatos = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    //Recorre el json con map
    data.map((Datos) => {
      const { id, name, image, info } = Datos;
      templateCard.querySelector("h3").textContent = name;
      templateCard.querySelector("p").textContent = info;
      templateCard.querySelector("img").setAttribute("src", image);
      templateCard.querySelector(".img").dataset.id = id;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    });
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
  } catch (error) {
    console.log(error);
  }
};

