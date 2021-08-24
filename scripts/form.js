//indetificadores de elementos del Formulario
const Name = document.getElementById("nameusers"),
  Password = document.getElementById("Password"),
  Button = document.getElementById("Send"),
  Warning = document.getElementById("warning"),
  Active = document.getElementById("modal-id"),
  ButtonRegister = document.getElementById("Register"),
  aRegister = document.getElementById("LinkRegister");

let People = [];

// Principal
const verification = () => {
  if (Name.value == "" && Password.value == "") {
    Warning.textContent = "¡¡Llena todos los campos!!";
  } else {
    Warning.textContent = "";
    users();
  }
};

const users = () => {
  let data = JSON.parse(localStorage.getItem("userRegister"));

  let nameOfProducts = data.map((Object, index, array) => {
    // Cómo solo queremos los nombres, retornamos "name".
    if (Object["Nombre"] === Name.value && Object["Clave"] === Password.value) {
      Warning.textContent = "";
    window.location.href ="./main.html";
    } else {
      Warning.textContent = "no estas en la base de datos";
    }
  });
};

const active = () => {
  Active.classList.toggle("active");
};

//Formulario de Registro
const userRegister = () => {
  const NameRegister = document.getElementById("NameRegister").value,
    PasswordRegister = document.getElementById("PasswordRegister").value;

  if (NameRegister !== "" && PasswordRegister !== "") {
    let registro = {
      Nombre: NameRegister,
      Clave: PasswordRegister,
    };

    People.unshift(registro);
    localStorage.setItem("userRegister", JSON.stringify(People));
  }else{
    alert("¡¡Llena todos los campos!!");
  }
};

ButtonRegister.addEventListener("click", userRegister);
aRegister.addEventListener("click", active);
Button.addEventListener("click", verification);
