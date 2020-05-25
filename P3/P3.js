console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");
tanteo_izquierdo = 0;
tanteo_derecho = 0;

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
const sonido_tanto = new Audio("pong-tanto.mp3");
const sonido_what = new Audio("pong-what.mp3");

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

//-- Pintar todos los objetos en el canvas
function draw() {

  if (estado == ESTADO.JUGANDO) {
    bola.draw();
  }

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //-- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([4, 8]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "orange";
  ctx.fillText(tanteo_izquierdo, 500, 100);

  ctx.font = "100px Arial";
  ctx.fillStyle = "limegreen";
  ctx.fillText(tanteo_derecho, 725, 100);

  //-- Dibujar el texto de sacar
  if (estado == ESTADO.SAQUE) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "aqua";
    ctx.fillText("Saca!", 100, 400);
  }

  //-- Dibujar el texto de comenzar
  if (estado == ESTADO.INIT) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "aqua";
    ctx.fillText("Pulsa el botón START", 40, 650);
  }
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, punto para el jugador izquierdo
  if (bola.x >= canvas.width) {
    estado = ESTADO.SAQUE;

    //-- Hay colisión. Punto para el jugador izquierdo
    tanteo_izquierdo++;

    //-- Reproducir sonido
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();

    //-- Reproducir sonido
    sonido_what.currentTime = 0;
    sonido_what.play();

    //-- Llevar bola a su posicion inicial
    bola.init();

    //-- Parar la bola
    bola.vx = 0;
    bola.vy = 0;
  }

  //-- Comprobar si la bola ha alcanzado el límite izquierdo
  //-- Si es así, punto para el jugador derecho
  if (bola.x <= 0) {
    estado = ESTADO.SAQUE;

    //-- Hay colisión. Punto para el jugador derecho
    tanteo_derecho++;

    //-- Reproducir sonido
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();

    //-- Reproducir sonido
    sonido_what.currentTime = 0;
    sonido_what.play();

    //-- Llevar bola a su posicion inicial
    bola.init();

    //-- Parar la bola
    bola.vx = 0;
    bola.vy = 0;
  }

  //-- Comprobar si la bola ha alcanzado el límite superior
  //-- Si es así, se cambia de signo la velocidad vertical, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.y >= canvas.height) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;

    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  //-- Comprobar si la bola ha alcanzado el límite inferior
  //-- Si es así, se cambia de signo la velocidad vertical, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.y <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;

    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }



  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;
    bola.vy = bola.vy + raqI.v;

    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1;
    bola.vy = bola.vy + raqD.v;

    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta izquierda
raqI.x_ini = 50;
raqI.y_ini = 300;
raqI.init();

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 1220;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);



//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- En el estado inicial no se
  //-- hace caso de las teclas
  if (estado == ESTADO.INIT)
    return;

  switch (e.key) {
    case "q":
      raqI.v = raqI.v_ini * -1;
      break;
    case "s":
      raqI.v = raqI.v_ini;
      break;
    case "p":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
      raqD.v = raqD.v_ini;
      break;
    case " ":

      //-- El saque solo funciona en el estado de SAQUE
      if (estado == ESTADO.SAQUE) {
        //-- Llevar bola a su posicion inicial
        bola.init();

        //-- Darle velocidad
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;

        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;

        return false;
      }
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "q" || e.key == "s"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}

//-- Botón de arranque
const start = document.getElementById("start");

start.onclick = () => {
  estado = ESTADO.SAQUE;
  console.log("SAQUE!");
  canvas.focus();
}

//-- Boton de pause
const pause = document.getElementById("pause");

pause.onclick = () => {
  //-- Volver al estado inicial
  estado = ESTADO.INIT;
  bola.init();
  start.disabled = false;
}
