//Realiza un script que cuente el número de vocales que tiene un texto.


const pantalla = document.getElementById("pantalla");
const texto = prompt("Ingresá una cadena de texto :");

if (texto && texto.trim() !== "") {
  const textoMinuscula = texto.toLowerCase(); // se pasa todo a minúsculas
  let contador = 0;

  for (let i = 0; i < textoMinuscula.length; i++) {
    const caracter = textoMinuscula.charAt(i);
    if (
      caracter === "a" ||
      caracter === "e" ||
      caracter === "i" ||
      caracter === "o" ||
      caracter === "u"
    ) {
      contador++; // sumará si es vocal
    }
  }

  console.log("Número de vocales : " + contador);
  pantalla.innerHTML = "Número de vocales: " + contador;
} else {
  alert("Tienes que introducir un texto válido.");
}
