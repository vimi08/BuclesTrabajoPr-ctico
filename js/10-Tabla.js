//Realiza un script que pida número de filas y columnas y escriba una tabla.
//  Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
// Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const pantalla = document.getElementById("pantalla");

let filas = parseInt(prompt("Introduce el número de filas (máximo 50):"));
let columnas = parseInt(prompt("Introduce el número de columnas (máximo 50):"));

if (
  !isNaN(filas) &&
  !isNaN(columnas) &&
  filas > 0 &&
  columnas > 0 &&
  filas <= 50 &&
  columnas <= 50
) {
  let total = filas * columnas; // cantidad total de celdas
  let numero = total; // desde el total hacia abajo

  let tabla = "<table border='1' cellspacing='0' cellpadding='5'>";

  for (let i = 0; i < filas; i++) {
    // recorre filas
    tabla += "<tr>";
    for (let j = 0; j < columnas; j++) {
      // recorre columnas
      tabla += "<td>" + numero + "</td>"; // escribe el número en la celda
      numero--; // decrementa el núm
    }
    tabla += "</tr>";
  }

  tabla += "</table>";
  pantalla.innerHTML = tabla;
} else {
  alert("Debes introducir valores válidos entre 1 y 50.");
}
