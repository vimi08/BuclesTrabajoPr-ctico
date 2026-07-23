 //Escribir un programa que solicite la edad 
 // y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 // si la edad ingresada no es un número válido indicarlo en un mensaje.


let edad;

do {
  edad = prompt("Ingrese su edad:");
  edad = parseInt(edad);

  if (isNaN(edad)) {
    console.log("Introduce un número válido");
  } else if (edad >= 18) {
    console.log("Ya puedes conducir 🚗");
  } else {
    console.log("No puedes conducir, eres menor de edad.");
  }

} while (isNaN(edad)); // Repite mientras no sea un número válido
