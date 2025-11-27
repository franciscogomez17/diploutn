//Invertir un string "programar" usando JS.
//Contar cuántas vocales tiene el string "JavaScript".

/*function invertirPalabra(palabra){
    return palabra.split("").reverse().join("");
}

console.log(invertirPalabra("programar"));*/

function contarVocales(palabra){
    let contador = 0;
    const vocales = "aeiouAEIOU";

    for(let i = 0; i < palabra.length; i++){
        if(vocales.includes(palabra[i])){
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("JavaScript"));
