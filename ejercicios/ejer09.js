//Hacer una función esPar(num) que retorne true o false.

function esPar(num){
    if(num %2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let num = 10;

const truefalse = esPar(num);

console.log(truefalse);
