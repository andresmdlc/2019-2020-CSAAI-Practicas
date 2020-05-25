//-- Mostrando mensaje de bienvendida
console.log("Ejecutando JS...");

display1 = document.getElementById("display1")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Crear un array con todos los elementos
//-- de la clase digito
digito = document.getElementsByClassName("digito")

//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    display1.innerHTML += ev.target.value;
  }
}

//-- Crear un array con todos los elementos
//-- de la clase operacion
operacion = document.getElementsByClassName("operacion")

for (i=0; i<operacion.length; i++) {
  operacion[i].onclick = (ev) => {
    display1.innerHTML += ev.target.value;
  }
}

//-- Evaluar la expresion
igual.onclick = () => {
  display2.innerHTML = eval(display1.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display1.innerHTML = "0";
  display2.innerHTML = "0";
}
