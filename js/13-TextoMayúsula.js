// Realiza un script que pida un texto y lo muestre en mayúsculas.

const pantalla = document.getElementById("pantalla");

const texto = prompt("Introduce un texto:"); // se pide el texto

if (texto && texto.trim() !== "") {
  //  se valida que no este vacio
  const textoMayusculas = texto.toUpperCase(); // convierte a mayúsculas
  console.log("Texto en mayúsculas: " + textoMayusculas);
  pantalla.innerHTML = "Texto en mayúsculas: " + textoMayusculas;
} else {
  alert("Debes introducir un texto válido.");
}
