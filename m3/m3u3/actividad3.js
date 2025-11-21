//Actividad 1
function CalcularPromedio() {
    let sumanotas = nota1 + nota2;
    let promedio = sumanotas / 2;

    return promedio;
}

let nota1 = 9;
let nota2 = 6;

let resultado = CalcularPromedio();


console.log(`El promedio de la materia historia es: ${resultado}`);

//Actividad 2
const texto = document.getElementById(`texto`);

const contar = document.getElementById(`contar`);

//console.log(texto, contar);

texto.addEventListener(`keyup`, function(){
    contar.innerText = texto.value.length
});