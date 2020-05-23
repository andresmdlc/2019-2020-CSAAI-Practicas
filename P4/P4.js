console.log("Ejecutando JS...");
console.log("Dibujando rectángulo...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Definir un rectangulo de dimensiones 100x50,
//-- cuya esquina superior izquierda está en (5,5)
ctx.rect(0,0, 300, 100);

//-- Cambiar el tamaño de la linea del trazo
ctx.lineWidth = 4;

//-- Dibujar el trazo
ctx.stroke()



console.log("Mostrando mensaje...");

//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'red'
ctx.fillText("Ola ajjaj", 10, 30);
