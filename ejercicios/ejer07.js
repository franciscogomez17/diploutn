//Crear un array de números y mostrar solo los pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(function(num){
    return num %2 === 0;
})

console.log(pares);