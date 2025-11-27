//1. Crear un array de números [3, 7, 1, 9, 12].
//Hacer funciones para:
//Calcular el promedio
//Encontrar el número mayor
//Encontrar el número menor

//const numeros = [3, 7, 1, 9, 12];

/*function promedio(){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
    suma += numeros[i];
    }
    return suma / numeros.length;
}

let promediofinal = promedio();

console.log(promediofinal);*/

/*function numeroMayor(){
    let mayor = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayor){
        mayor = numeros[i];
        }
    }
    return mayor;
}

const encontrarMayor = numeroMayor();

console.log(encontrarMayor);*/

/*function numeroMenor(){
    let menor = numeros[0];
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }
    return menor;
}

const encontrarMenor = numeroMenor();

console.log(encontrarMenor);*/

//2. Crear array de strings ["Ana", "Luis", "Carla"] y:
//Recorrerlo con un for e imprimir cada nombre
//Recorrerlo con forEach e imprimir cada nombre en mayúsculas

const nombres = ["Ana", "Luis", "Carla"];

/*for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}*/

nombres.forEach(function(nombre){
    console.log(nombre.toUpperCase());
})
