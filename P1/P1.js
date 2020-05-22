console.log("Ejecutando JS...");

//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo
suma = document.getElementById("suma")

//-- Evaluar la expresion
suma.onclick = () => {
  body.classList.toggle("color");
}
