/*Realizar una página con un script que calcule el valor de la letra de un número de DNI 
(Documento nacional de identidad).El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: 
 (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’*/


// Array con las letras surgidas del resto de la división por 23
const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

let continuar;

do {
  let entrada = prompt("Introduce tu número de DNI (0- 99999999):");

  if (entrada !== null) {
    let numero = parseInt(entrada);

    
    if (isNaN(numero)) { // usamos para validar 
      alert("Eso no es un número válido. Intenta de nuevo.");
    } else if (numero < 0 || numero > 99999999) {
      alert("El número debe estar entre 0 y 99999999.");
    } else { // cálculo de resto , obtener la letra
     
      let resto = numero % 23;
      let letra = letras[resto];
      alert("Tu DNI completo es: " + numero + letra);
    }
  }

  // confirm devuelve true si el usuario pulsa aceptar, false si pulsa cancelar
  continuar = confirm("¿Quieres calcular otra letra de DNI?");
} while (continuar);
