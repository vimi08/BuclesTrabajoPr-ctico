/*Haz un script que escriba una pirámide inversa de los números del 1 
al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

const pantalla = document.getElementById("pantalla");

let numero = parseInt(prompt("Introduce un número (máximo 50):"));

if (!isNaN(numero) && numero > 0 && numero <= 50) {
  //  desde el número indicado hasta 1
  for (let i = numero; i >= 1; i--) {
    let linea = "";
    // repite el número i tantas veces como su valor
    for (let j = 0; j < i; j++) {
        
      linea += i;
    }
    console.log(linea);
    pantalla.innerHTML += linea + "<br>";
  }
} else {
  alert("Tienes que introducir un número válido entre 1 y 50.");
}
