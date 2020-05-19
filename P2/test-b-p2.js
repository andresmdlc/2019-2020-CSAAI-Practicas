//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const boton = document.getElementById("boton");

//-- Contador de clicks
let cont = 0;

//-- Configurar retrollamada del boton
boton.onclick = () => {
  console.log("Click!");

  //-- Incrementar contador
  cont += 1;

  //-- Actualizar el display
  display1.innerHTML = cont;

  //-- Añadir el número al párrafo
  display2.innerHTML += " " + cont;
}
