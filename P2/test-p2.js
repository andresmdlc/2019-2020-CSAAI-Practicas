console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
console.log("Párrafo test leido. Dice:")
console.log(test.innerHTML)

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = function () {
  console.log("Click sobre el párrafo...")
}
