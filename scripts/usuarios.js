
//indetificadores de elementos del Formulario
const Button = document.getElementById("Send"),
  Warning = document.getElementById("warning"),
  ButtonRegister = document.getElementById("Register");

const NameUsers = document.getElementById("nameusers"),
  PasswordUsers = document.getElementById("Password"),
  NameRegister = document.getElementById("NameRegister"),
  PasswordRegister = document.getElementById("PasswordRegister"),
  Active = document.getElementById("modal-id"),
  aRegister = document.getElementById("LinkRegister");

//Registro
const userRegister = async() => {
let name = NameRegister.value,
Password = PasswordRegister.value;
    if (name !== "" && Password !== "") {
        let resp = await fetch('http://localhost:4000/usuarios/',{
            method: 'POST',
            body: JSON.stringify({
                nombre: name,
                Clave: Password
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }) 
    }else{
        alert("¡¡Llena todos los campos!!");
    }
}

//Verificacion de usuarios
const verification = () => {
  if (NameUsers.value == "" && PasswordUsers.value == "") {
    Warning.textContent = "¡¡Llena todos los campos!!";
  } else {
    Warning.textContent = "";
    ObtenerDatos('http://localhost:4000/usuarios/');
  }
};

const ObtenerDatos = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      //Recorre el json con map
      data.map((Datos) => {
        const { id, nombre, Clave} = Datos;
        if(nombre == NameUsers.value && Clave == PasswordUsers.value){
            Warning.textContent = "";
            window.location.href ="./index.html";
        }
      });
    } catch (error) {
        if(nombre == NameUsers.value && Clave !== PasswordUsers.value){
            Warning.textContent = "Clave o Usuario incorrecta";
        }
    }

}



const active = () => {
  Active.classList.toggle("active");
};

aRegister.addEventListener("click", active);
Button.addEventListener("click", verification);
ButtonRegister.addEventListener("click", userRegister);