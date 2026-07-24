//Realiza un script que pida una cadena de texto y la devuelva al revés. 
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


const pantalla = document.getElementById("pantalla");
const texto = prompt("Ingresá una cadena de texto :");

if (texto && texto.trim() !== "") {
  // el texto en array, se invierte y lo une nuevamente
  const textoInvert = texto.split("").reverse().join("");

  console.log("Texto al revés : " + textoInvert);
  pantalla.innerHTML = "Texto al revés : " + textoInvert;
} else {
  alert("Tienes que introducir un texto válido.");
}
