// Botón que calcula el promedio
function calcularProm(event) {

  // Obtiene el valor del input por su ID
  var uno = document.getElementById("primera").value;
  var dos = document.getElementById("segunda").value;
  var tres = document.getElementById("tercera").value;
  var cuatro = document.getElementById("cuarta").value;

  // Asigna el valor a la nueva variable para el promedio
  var uNo = uno * 3; 
  var dOs = dos * 4;
  var tRes = tres * 6;
  var cuaTro = cuatro * 7;

  // Promediar el resultado
  var promedio = uNo + dOs + tRes + cuaTro;
  var total = promedio / 20;

  var entero = total;
  var numeroRedondeado = Math.round(entero);

  // Mostrar el promedio en la consola
  console.log("Tu promedio es: " + total);
  console.log(numeroRedondeado);

  event.preventDefault();

  // Obtener el valor de la variable
  var miDato = numeroRedondeado;

  // Obtener el elemento input por su ID
  var pElement = document.getElementById("aparecer");

  // Establecer el valor del input con el dato de la variable
  pElement.value = miDato;

  // Obtener el elemento del párrafo por su ID
  var parrafo = document.getElementById("aparecer");

  // Concatenar el valor de la variable al contenido del párrafo
  parrafo.innerHTML = "Tu promedio es: " + numeroRedondeado;

  // Mostrar el label cambiando su estilo de display
  parrafo.style.display = "inline";

  // Muestra el botón para hacer otro cálculo
  var otro = document.getElementById('otro');
  otro.style.display = 'block';
  // Oculta el botón de calcular promedio
  var calcular = document.getElementById('calcular');
  calcular.style.display = 'none';
}

// Validar números
function limitarNumber(input){
  // Obtener el valor actual del input
  var valor = parseInt(input.value, 0);

  // Validar y ajustar el valor si es necesario
  if (isNaN(valor) || valor < 0 || valor >= 21) {
    // Si el valor no es un número válido, es negativo o ya es mayor o igual a 20, se borra el contenido del input
    input.value = "";
  } else if (valor < 10 && input.value.length >= 2) {
    // Si el valor es menor que 10 y ya hay al menos 2 dígitos, ajusta el valor a 10
    input.value = valor;
  } else {
    input.value = valor < 10 ? "0" + valor : valor.toString();
  }
}

