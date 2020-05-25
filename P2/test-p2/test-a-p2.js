console.log("Ejecutando js...")

//-- Leer/obtener el elemento párrafo
const parrafo1 = document.getElementById('parrafo1')
const parrafo2 = document.getElementById('parrafo2')

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
console.log("Párrafo 1 leido dice:")
console.log(parrafo1.innerHTML)
console.log("Párrafo 2 leido dice:")
console.log(parrafo2.innerHTML)

//-- Configurar el manejador para el evento de
//-- pulsación de botón. Cada vez que se hace
//-- click sobre el párrafo aumenta el contador
parrafo2.onclick = () => {
  console.log("Click sobre el párrafo 2...")

  //-- Cambiar su texto
  parrafo1.innerHTML = "Como has clickado en el párrafo 2, hemos modificado el párrafo 1 MUAJAJAJA"
}
