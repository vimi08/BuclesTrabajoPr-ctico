/*Realiza un script que muestre la posición 
de la primera vocal de un texto introducido por teclado.

Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1*/

const pantalla = document.getElementById("pantalla");
const texto = prompt("Ingresá una cadena de texto:");

if (texto && texto.trim() !== "") {
  
  const textoMinuscula = texto.toLowerCase();// todo a minúsculas para simplificar

  
  const vocales = ["a", "e", "i", "o", "u"];// buscamos la primera vocal con indexOf
  let posicion = -1;
  let vocalEncontrada = "";

  for (let v of vocales) {
    const pos = textoMinuscula.indexOf(v); // devuelve la posición de la vocal
    if (pos !== -1 && (posicion === -1 || pos < posicion)) {
      posicion = pos;
      vocalEncontrada = texto.charAt(pos); // respeta mayúsculas si las hubiera
    }
  }

  if (posicion !== -1) {
    console.log(`La vocal '${vocalEncontrada}' está en la posición ${posicion}`);
    pantalla.innerHTML = `La vocal '${vocalEncontrada}' está en la posición ${posicion}`;
  } else {
    alert("No se encontraron vocales en el texto.");
  }
} else {
  alert(" Tienes que  introducir un texto válido.");
}

