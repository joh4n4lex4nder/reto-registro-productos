
//indetificadores de elementos del Formulario
const Button = document.getElementById("Send"),
  Warning = document.getElementById("warning"),
  ButtonRegister = document.getElementById("Register");

const NameUsers = document.getElementById("nameusers"),
  PasswordUsers = document.getElementById("Password"),
  Active = document.getElementById("modal-id"),
  aRegister = document.getElementById("LinkRegister");

//Registro
const ObtenerDatos = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
      
          //Recorre el json con map
          data.map((Datos) => {
            const { id, nombre, Clave} = Datos;
            console.log(nombre, Clave, id);
          });
        } catch (error) {
          console.log(error);
        }
    
}

ObtenerDatos('http://localhost:4000/usuarios/');