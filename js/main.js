// Declara una variable global
var uNo; var dOs; var tRes; var cuaTro;

// Función que calcula el promedio
function calcularProm(event) {
  
  // Obtén el valor del input por su ID
  var uno = document.getElementById("primera").value;
  var dos = document.getElementById("segunda").value;
  var tres = document.getElementById("tercera").value;
  var cuatro = document.getElementById("cuarta").value;

  // Asigna el valor a la variable global
  uNo = uno * 3; 
  dOs = dos * 4;
  tRes = tres * 6;
  cuaTro = cuatro * 7;

  // Promediar el resultado
  var promedio = uNo + dOs + tRes + cuaTro;
  var total = promedio / 20;

  // Hacer algo con la variable, por ejemplo, mostrarla en la consola
  console.log("Tu promedio es: " + total);

  event.preventDefault();
  // Obtener el valor de la variable (puedes sustituir esto con tu lógica)
  var miDato = total;

  // Obtener el elemento input por su ID
  var inputElement = document.getElementById("miInput");

  // Establecer el valor del input con el dato de la variable
  inputElement.value = miDato;
}



