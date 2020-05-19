//-- Punto de entrada: una vez cargada la página se llama a esta
console.log("Aquí comienza tu código JS...")
console.log("¡Que comiencen los juegos del JS!")

//-- Manejador del evento click sobre el párrafo test
//-- Cada vez aue se hace click en el se invoca a esta funcion
function manejador_parrafo()
{
  console.log("Click sobre el párrafo...")
}

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
console.log("Párrafo test leido. Dice:")
console.log(test.innerHTML)

//-- Configurar el manejador para el evento de
//-- pulsación de botón: que se ejecute la
//-- funcion manejador_parrafo()
//-- Va sin paréntesis porque la estamos
//-- tratando como un objeto
test.onclick = manejador_parrafo;
