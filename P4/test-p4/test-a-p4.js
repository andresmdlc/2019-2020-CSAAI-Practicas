console.log("Ejecutando JS...");
console.log("Dibujando rectángulo...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Definir un rectangulo de dimensiones 100x50,
//-- cuya esquina superior izquierda está en (5,5)
ctx.rect(5,5, 100, 50);

//-- Dibujar
ctx.fillStyle = 'red';

//-- Cambiar el tamaño de la linea del trazo
ctx.lineWidth = 4;

//-- Rellenar
ctx.fill();

//-- Dibujar el trazo
ctx.stroke()



console.log("Dibujando texto...");

//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'yellow'
ctx.fillText("Texto sólido", 10, 30);



console.log("Poniendo imágenes...");
