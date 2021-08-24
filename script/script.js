let modal = document.getElementById("modal-id"),
containerActive = document.getElementById("active"),
modaltitle = document.getElementById("modal-title")
modalImg = document.getElementById("modal-img"),
Description = document.getElementById("item-description");

const modalActive = () => {
   modal.classList.toggle('active'); 
   containerActive.classList.toggle('active'); 
}

//Agregar items
items.addEventListener("click", (e) => {
   addItems(e);
 });
 
 const addItems = (e) => {
   //que contenga btn dark y devuelve true
   if (e.target.classList.contains("makeover")) {
     //captura todos los elementos de la target
     setItem(e.target.parentElement);
   }
 };
 
 const setItem = (object) => {
   const ObtenerDatos = async () => {
     try {
       const res = await fetch("./data.json");
       const data = await res.json();
 
       //Recorre el json con map
       data.map((Datos) => {
         if (object.getAttribute("data-id") == Datos.id) {
           const { id, name, image, info } = Datos;
           modaltitle.textContent = name;
           modalImg.setAttribute("src",image);
           Description.textContent = info;
         }
       });
       // appendChild agrega un nodo al final de la lista
       items.appendChild(fragment);
     } catch (error) {
       console.log(error);
     }
   };
 
   return ObtenerDatos();
 };
 
 