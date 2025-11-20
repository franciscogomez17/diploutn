/* Ejercicio 1 */
const producto = "Laptop";
let precio = 5000;
let disponible = true;

console.log (`El ${producto} cuesta ${precio} y su disponibilidad es:${disponible}`);

/* Ejercicio 4*/
let numeros = [10, 55, 22, 17, 99];
let mayor = numeros[0]; //en este caso se supone que el primero es el mayor

for(let i = 0; i <= numeros.length; i++){
    if (numeros[i] > mayor){
        mayor = numeros[i];
    }
    }

    console.log(`El número mayor es: ${mayor}`);