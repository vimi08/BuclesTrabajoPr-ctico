/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

const pantalla = document.getElementById("pantalla");


for (let i = 1; i <= 30; i++) { // inicia el bucle for que arranca con i=1 y se repite hasta llegar a 30
  let linea = ""; // variable linea
  for (let j = 0; j < i; j++) { // repite el número i tantas veces como el valor que tiene
    linea += i;
  }
  console.log(linea); 
  pantalla.innerHTML += linea + "<br>"; // agrega la línea al div con salto de línea
}
