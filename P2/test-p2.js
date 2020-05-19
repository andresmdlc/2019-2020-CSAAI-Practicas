//-- Punto de entrada: una vez cargada la página se llama a esta
console.log("Aquí comienza tu código JS...")
console.log("¡Que comiencen los juegos del JS!")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Mostrar en la consola el contenido del párrafo
//-- (es la propiedad innerHTML)
console.log("Párrafo test leido. Dice:")
console.log(test.innerHTML)
