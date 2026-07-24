/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique 
el nombre del mayor. *
Nota: ver funcion Math()
 https://www.w3schools.com/js/js_math.asp
*/

const pantalla = document.getElementById("pantalla");

// Pedimos los nombres y edades
const nombre1 = prompt("Ingresá el primer nombre :");
const edad1 = parseInt(prompt("Ingresá la edad de " + nombre1));

const nombre2 = prompt("Ingresá el segundo nombre :");
const edad2 = parseInt(prompt("Ingresá la edad de " + nombre2));

const nombre3 = prompt("Ingresá el tercer nombre:");
const edad3 = parseInt(prompt("Ingresá la edad de " + nombre3));

// para validar  que sean números
if (!isNaN(edad1) && !isNaN(edad2) && !isNaN(edad3)) { // comprueba que sean num válidos
  const edadMayor = Math.max(edad1, edad2, edad3);// para encontrar el mayor edad

  let nombreMayor = "";

  if (edadMayor === edad1) {
    nombreMayor = nombre1;
  } else if (edadMayor === edad2) {
    nombreMayor = nombre2;
  } else {
    nombreMayor = nombre3;
  }

  console.log("El mayor es: " + nombreMayor + " con " + edadMayor + " años.");
  pantalla.innerHTML =
    "El mayor es: " + nombreMayor + " con " + edadMayor + " años.";
} else {
  alert("Tienes que ingresar edades válidas (números).");
}
