
//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
//  Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp


let cadenas = "";
let continuar = true;

while (continuar) {
  let texto = prompt("Insertá una cadena de texto:");

  if (texto !== null && texto.trim() !== "") {
    // Si ya hay algo en cadenas, agregamos un guión antes
    if (cadenas === "") {
      cadenas = texto;
    } else {
      cadenas += "-" + texto;
    }
  }

  
  continuar = confirm("¿Seguirás introduciendo cadenas?");// confirm devuelve true si el se pulsa aceptar, false si se pulsa cancelar
}

alert("Cadenas concatenadas: " + cadenas);
// al salir del bucle mostrará todas las cadenas concatenadas
