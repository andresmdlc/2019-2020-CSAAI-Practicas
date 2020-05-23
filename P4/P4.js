console.log("Ejecutando JS...");
console.log("Obteniendo los elementos de vídeo...");

//----- Obtener elemento de video y configurarlo
const video_emision = document.getElementById("video_emision")
video_emision.width=200;  //-- Tamaño de la pantalla de video
video_emision.height=100;

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

//----- Obtener elemento de video y configurarlo
const video2 = document.getElementById("video2")
video2.width=200;  //-- Tamaño de la pantalla de video
video2.height=100;

//----- Obtener elemento de video y configurarlo
const video3 = document.getElementById("video3")
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video_emision.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
