console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Obtener los botones
const boton_grises = document.getElementById("boton_grises")
const boton_colores = document.getElementById("boton_colores")

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
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

boton_colores.onclick = () => {
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);
  
  ctx.putImageData(umbrales(), 0, 0);
}

//-- Funcion de retrollamada del deslizador_rojo
deslizador_rojo.oninput = () => {
  umbrales();
}

//-- Funcion de retrollamada del deslizador_verde
deslizador_verde.oninput = () => {
  umbrales();
}

//-- Funcion de retrollamada del deslizador_verde
deslizador_azul.oninput = () => {
  umbrales();
}

function umbrales() {
  //-- Mostrar el nuevo valor de los deslizadores
  range_value_rojo.innerHTML = deslizador_rojo.value;
  range_value_verde.innerHTML = deslizador_verde.value;
  range_value_azul.innerHTML = deslizador_azul.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data_array = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral_rojo = deslizador_rojo.value
  umbral_verde = deslizador_verde.value
  umbral_azul = deslizador_azul.value

  //-- Filtrar la imagen según el nuevo umbral
  //-- Se van recorriendo los píxeles de la imagen
  for (let i = 0; i < data_array.length; i+=4) {

    //-- Si supera el umbral (valor máximo)
    //-- se le asigna dicho nivel de intensidad
    //-- Se miran los píxeles 0, 4, 8... porque ahí está el rojo
    if (data_array[i] > umbral_rojo)
      data_array[i] = umbral_rojo;

    //-- Se miran los píxeles 1, 5, 9... porque ahí está el verde
    if (data_array[i+1] > umbral_verde)
      data_array[i+1] = umbral_verde;

    //-- Se miran los píxeles 2, 6, 10... porque ahí está el azul
    if (data_array[i+2] > umbral_azul)
      data_array[i+2] = umbral_azul;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
  return imgData;
}

console.log("Fin...");
