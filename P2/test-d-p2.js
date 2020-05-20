//-- Cronometro
console.log("Ejecuitando JS...");

//-- Elementos de la gui
const gui = {
  display : document.getElementById("display"),
  play_button : document.getElementById("play_button"),
  pause_button : document.getElementById("pause_button"),
}

//-- Objeto cronometro
const crono = {

  //-- Elemento donde mostrar el cronometro
  display : gui.display,

  //-- Tiempo
  cent : 0,  //-- Centesimas
  seg: 0,    //-- Segundos
  min: 0,    //-- Minutos

  //-- Temporizador
  timer : null,

  //-- Funcion que se ejecuta cada centesima
  tic : function() {

    //-- Incrementar en una centesima
    this.cent += 1;

    //-- 100 centésimas hacen 1 segundo
    if (this.cent == 100) {
      this.seg += 1;
      this.cent = 0;
    }

    //-- 60 segundos hacen un minuto
    if (this.seg == 60) {
      this.min = 1;
      this.seg = 0;
    }

    //-- Mostrar el valor actual
    this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent
  },

  play_button : function() {
    if (!this.timer) {
      //-- Lanzamos el temporizador
      this.timer = setInterval(()=>{this.tic()}, 10);
    }
  },

  pause_button : function() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

}

//-- Arranque del cronometro
gui.play_button.onclick = () => {
  console.log("Start!!");
  crono.play_button();
}

//-- Detener el cronómetro
gui.pause_button.onclick = () => {
  console.log("Stop!");
  crono.pause_button();
}
