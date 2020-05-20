//-- Mostrando mensaje de bienvendida
console.log("Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = {
  display1: document.getElementById("display1"),
  boton_inc: document.getElementById("boton_inc"),
  boton_dec: document.getElementById("boton_dec")
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = {
  valor: 0,
  inc : function(value) {
    this.valor += value;
    gui.display1.innerHTML = this.valor;
  }
}

//-- Acción: Incrementar el contador
gui.boton_inc.onclick = () => {
  counter.inc(2)
}

//-- Acción: Decrementar el contador
gui.boton_dec.onclick = () => {
  counter.inc(-2)
}
