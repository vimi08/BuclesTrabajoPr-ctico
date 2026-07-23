/*Crea script para generar pirámide siguiente con los números del 1
 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456*/

const pantalla = document.getElementById("pantalla");
let numero = parseInt(prompt("Introduce un número (máximo 50):"));
if (!isNaN(numero) && numero > 0 && numero <= 50) {
  
  for (let i = 1; i <= numero; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    console.log(linea); 
    pantalla.innerHTML += linea + "<br>"; 
  }
} else {
  alert("Debes introducir un número válido entre 1 y 50.");
}
