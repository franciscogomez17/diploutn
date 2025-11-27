const titulo = document.getElementById("titulo");
const boton = document.getElementById("btn");

boton.addEventListener("click", function(){
    titulo.textContent = "Texto cambiado";
})