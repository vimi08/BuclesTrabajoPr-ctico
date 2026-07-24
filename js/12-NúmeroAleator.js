//Realiza un script que genere un número aleatorio entre 1 y 99

const pantalla = document.getElementById("pantalla");

// Generar número aleatorio entre 1 y 99
const numeroAleatorio = Math.floor(Math.random() * 99) + 1; // floor redondea hacia abajo al entero que esta cerca, random escala el num

console.log("Número aleatorio generado: " + numeroAleatorio);
pantalla.innerHTML = "Número aleatorio generado: " + numeroAleatorio;
