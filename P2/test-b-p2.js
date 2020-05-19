//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = {
  display1: document.getElementById("display1"),
  boton: document.getElementById("boton"),
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = {
  valor: 0,
  inc : function(value) {
    this.valor += value;
    gui.display1.innerHTML = this.valor;
  }
}

//-- Acciones: Ligar el boton al contador
gui.boton.onclick = () => {
  counter.inc(2)
}
