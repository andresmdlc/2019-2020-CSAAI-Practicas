console.log("Ejecutando JS...");



//-- OBTENIENDO LOS VÍDEOS Y BOTONES

//-- Acceso a los botones de selección de modo
const boton_play1 = document.getElementById("boton_play1")
const boton_play2 = document.getElementById("boton_play2")
const boton_play3 = document.getElementById("boton_play3")
const boton_play4 = document.getElementById("boton_play4")
const boton_stop = document.getElementById("boton_stop")
//const boton_modo_estandar = document.getElementById("boton_modo_estandar")
//const boton_modo_automatico = document.getElementById("boton_modo_automatico")
//const boton_modo_bucle = document.getElementById("boton_modo_bucle")

//----- Obtener elemento de video y configurarlo
const video_emision = document.getElementById("video_emision")
video_emision.width=852;  //-- Tamaño de la pantalla de video
video_emision.height=480;
//-- Imagen estática a mostrar cuando no se ha elegido fuente
video_emision.poster="img_sin_emision.jpg";

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=213;  //-- Tamaño de la pantalla de video
video1.height=120;
video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
//-- Reproducir el vídeo directamente nada más cargar la página
video1.play();

//----- Obtener elemento de video y configurarlo
const video2 = document.getElementById("video2")
video2.width=213;  //-- Tamaño de la pantalla de video
video2.height=120;
video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
//-- Reproducir el vídeo directamente nada más cargar la página
video2.play();

//----- Obtener elemento de video y configurarlo
const video3 = document.getElementById("video3")
video3.width=213;  //-- Tamaño de la pantalla de video
video3.height=120;
video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
//-- Reproducir el vídeo directamente nada más cargar la página
video3.play();

var img_pruebas = document.getElementById('img_pruebas')

//-- Estados la realización de TV
//const ESTADO = {
  //INIT: 0,
  //ESTANDAR: 1,
  //AUTOMATICO: 2,
  //BUCLE: 3,
//}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
//let estado = ESTADO.INIT;

//-- Modo estándar
//boton_modo_estandar.onclick = () => {
  //estado = ESTADO.ESTANDAR;
  //funcion_estandar();
//}

//-- Modo bucle
//boton_modo_bucle.onclick = () => {
  //estado = ESTADO.BUCLE;
  //funcion_bucle();
//}



//-- FUNCIONES DE RETROLLAMADA DE LOS BOTONES DE SELECCIÓN DE FUENTE

//-- Función de retrollamada del botón de Seleccionar fuente 1
boton_play1.onclick = () => {

  //if (estado == ESTADO.AUTOMATICO) {
    //-- Al apretar el pulsador de modo manual, se vuelve al modo normal
    //estado = ESTADO.ESTANDAR;
    //funcion_estandar();
  //}

  console.log("Click!");
  video_emision.src = video1.src
  video_emision.currentTime = video1.currentTime;
  video_emision.play();

  //-- Añadir recuadro a la fuente 1
  video1.classList.add("bordecito");
  video2.classList.remove("bordecito");
  video3.classList.remove("bordecito");
  img_pruebas.classList.remove("bordecito");
};

//-- Función de retrollamada del botón de Seleccionar fuente 2
boton_play2.onclick = () => {

  //if (estado == ESTADO.AUTOMATICO) {
    //-- Al apretar el pulsador de modo manual, se vuelve al modo normal
    //estado = ESTADO.ESTANDAR;
    //funcion_estandar();
  //}

  console.log("Click!");
  video_emision.src = video2.src
  video_emision.currentTime = video2.currentTime;
  video_emision.play();

  //-- Añadir recuadro a la fuente 2
  video1.classList.remove("bordecito");
  video2.classList.add("bordecito");
  video3.classList.remove("bordecito");
  img_pruebas.classList.remove("bordecito");
};

//-- Función de retrollamada del botón de Seleccionar fuente 3
boton_play3.onclick = () => {

  //if (estado == ESTADO.AUTOMATICO) {
    //-- Al apretar el pulsador de modo manual, se vuelve al modo normal
    //estado = ESTADO.ESTANDAR;
    //funcion_estandar();
  //}

  console.log("Click!");
  video_emision.src = video3.src
  video_emision.currentTime = video3.currentTime;
  video_emision.play();

  //-- Añadir recuadro a la fuente 3
  video1.classList.remove("bordecito");
  video2.classList.remove("bordecito");
  video3.classList.add("bordecito");
  img_pruebas.classList.remove("bordecito");
};

//-- Función de retrollamada del botón de Seleccionar fuente 3
boton_play4.onclick = () => {

  //if (estado == ESTADO.AUTOMATICO) {
    //-- Al apretar el pulsador de modo manual, se vuelve al modo normal
    //estado = ESTADO.ESTANDAR;
    //funcion_estandar();
  //}

  video_emision.pause();

  //-- Quitar la fuente de video
  video_emision.src = null;
  video_emision.poster="img_emision_en_pruebas.jpeg";

  //-- Añadir recuadro a la fuente 3
  video1.classList.remove("bordecito");
  video2.classList.remove("bordecito");
  video3.classList.remove("bordecito");
  img_pruebas.classList.add("bordecito");
};

//-- Funcion de retrollamada del boton de parar
boton_stop.onclick = () => {
  video_emision.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video_emision.src = null;
  video_emision.poster="img_sin_emision.jpg";
}
