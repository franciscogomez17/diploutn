//Pedir una edad y determinar:
//Si es menor de edad
//Si es adulto
//Si es mayor de 65

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Ingresá tu edad: ", (edad) => {
    edad = Number(edad);
    
    if(edad < 18){
        console.log(`Eres menor de edad.`);
    }
    else if(edad >= 18 && edad <= 65){
        console.log(`Eres adulto.`);
    }
    else if(edad > 65){
        console.log(`Eres mayor a 65 años.`);
    }

    readline.close();
  });
  
