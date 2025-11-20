//Actividad 1
function CalcularPromedio() {
    sumanotas = nota1 + nota2;
    let promedio = sumanotas / 2;

    return promedio;
}

let nota1 = 9;
let nota2 = 6;

let resultado = CalcularPromedio();


console.log(`El promedio de la materia historia es: ${resultado}`);

//Actividad 2
const textarea = document.getElementById("mensaje");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function () {
    contador.textContent = textarea.value.length;
});
