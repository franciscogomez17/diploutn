//Usar destructuring para obtener las variables nombre y edad.
//Crear un nuevo objeto con spread agregando pais: "Argentina".
//Convertir el objeto a JSON.

const usuario = { nombre: "Carlos", edad: 30, ciudad: "Tucumán" };

const {nombre, edad} = usuario;

console.log(nombre, edad);

const usuarioCompleto = {
    ...usuario,
    pais: "Argentina"
}

console.log(usuarioCompleto.pais);

const usuarioJSON = JSON.stringify(usuarioCompleto);

console.log(usuarioJSON);