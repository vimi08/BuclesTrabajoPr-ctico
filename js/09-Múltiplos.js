/*Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

const pantalla = document.getElementById("pantalla");

for (let i = 1; i <= 500; i++) {
  // bucle que recorrerá los números del 1 al 500
  let linea = i.toString(); // convierte el número en texto
  // Verificamos múltiplos
  if (i % 4 === 0) {
    // si el n°es divisible por 4
    linea += " (Múltiplo de 4)";
  }
  if (i % 9 === 0) {
    //  si es divisible por 9
    linea += " (Múltiplo de 9)";
  }

  pantalla.innerHTML += linea + "<br>";
  console.log(linea);

  if (i % 5 === 0) {
    // cada 5 líneas aparece una línea horizontal
    pantalla.innerHTML += "———————————————<br>";
    console.log("———————————————");
  }
}
