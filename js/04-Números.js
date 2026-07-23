//Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let continuar = true;// va a controlar si el bucle seguirá o no

while (continuar) { // inicia el bucle con  esa variable
  let entrada = prompt("Introduce un número:");

  if (entrada !== null) {//verificará que el usuario no haya pulsado Cancelar en el prompt si lo hizo, (entrada) sería = null y no entraría
    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
      alert("Eso no es un número válido. Intenta de nuevo.");
    } else {
      suma += numero;
    }
  }

  // confirm devuelve true si el usuario pulsa "Aceptar", false si pulsa "Cancelar"
  continuar = confirm("¿Quieres seguir introduciendo números?");
}

alert("La suma total de los números es: " + suma);
