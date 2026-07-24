//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo –
//  entre cada carácter sin usar el método replace. Por ejemplo,
// si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const pantalla = document.getElementById("pantalla");
const texto = prompt("Ingresá una cadena de texto:");

if (texto && texto.trim() !== "") {
  // se valida que no esté vacío
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    // recorre los caracteres de la cadena
    resultado += texto.charAt(i);
    if (i < texto.length - 1) {
      // si no es el último carácter
      resultado += "-"; //  se agrega el guion
    }
  }
  console.log("Texto con guiones : " + resultado);
  pantalla.innerHTML = "Texto con guiones : " + resultado;
} else {
  alert("Debes ingresar un texto válido.");
}

