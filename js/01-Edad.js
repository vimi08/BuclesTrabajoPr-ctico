 //Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 //  si la edad ingresada no es un número válido indicarlo en un mensaje.


do {
  edad = prompt("Introduce tu edad:");
  edad = parseInt(edad);// ParseInt convierte el texto ingresado en un número entero , sino devuelve NaN

  if (isNaN(edad)) { 
    console.log("Ingresá un número válido");
  } else if (edad >= 18) {
    console.log("Ya puedes conducir!");
  } else {
    console.log("No puedes conducir, sos menor de edad.");
  }

} while (isNaN(edad)); // Repite si no es un número válido.
