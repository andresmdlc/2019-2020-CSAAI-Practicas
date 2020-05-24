console.log("Ejecutando JS....")

//-- Acceso a los botones
const boton_img1 = document.getElementById("boton_img1")
const boton_img2 = document.getElementById("boton_img2")
const boton_filtro_grises = document.getElementById("boton_filtro_grises")
const boton_filtro_colores = document.getElementById("boton_filtro_colores")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
var img_original = document.getElementById('img_original1')

//-- El usuario decide la imagen que se carga
boton_img1.onclick = () => {
  img_original = document.getElementById('img_original1');
  ctx.drawImage(img_original, 0, 0, 800, 525);
}

boton_img2.onclick = () => {
  img_original = document.getElementById('img_original2');
  ctx.drawImage(img_original, 0, 0, 800, 525);
}

const ctx = canvas.getContext('2d');

//-- Acceso a los deslizadores
const deslizador_rojo = document.getElementById('deslizador_rojo');
const deslizador_verde = document.getElementById('deslizador_verde');
const deslizador_azul = document.getElementById('deslizador_azul');

//-- Valor de los deslizadores
const range_value_rojo = document.getElementById('range_value_rojo');
const range_value_verde = document.getElementById('range_value_verde');
const range_value_azul = document.getElementById('range_value_azul');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img_original.onload = function () {

  console.log("Imagen cargada");

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = 800;
  canvas.height = 525;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img_original, 0,0);
};

function funcion_colores() {
  //-- Mostrar el nuevo valor del deslizador_rojo
  range_value_rojo.innerHTML = deslizador_rojo.value;
  range_value_verde.innerHTML = deslizador_verde.value;
  range_value_azul.innerHTML = deslizador_azul.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img_original, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, 800, 525);

  //-- Obtener el array con todos los píxeles
  var data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral_rojo = deslizador_rojo.value
  umbral_verde = deslizador_verde.value
  umbral_azul = deslizador_azul.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_rojo)
      data[i] = umbral_rojo;
    if (data[i+1] > umbral_verde)
      data[i+1] = umbral_verde;
    if (data[i+2] > umbral_azul)
      data[i+2] = umbral_azul;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Filtro Colores usando los deslizadores
boton_filtro_colores.onclick = () => {
  funcion_colores();
}

//-- Funcion de retrollamada de los deslizadores
deslizador_rojo.oninput = () => {
  funcion_colores();
}

deslizador_verde.oninput = () => {
  funcion_colores();
}

deslizador_azul.oninput = () => {
  funcion_colores();
}

console.log("Fin...");
