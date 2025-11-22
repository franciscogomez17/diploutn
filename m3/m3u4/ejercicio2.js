//a) Usando la desestructuración de objetos, crea una variable para cada una de las
//siguientes propiedades: nombre, precio y stock
const producto = {
    id: 123,
    nombre: "Auriculares inalámbricos",
    precio: 120000,
    stock: 25,
    categoria: "Electrónica"
    };

const {nombre, precio, stock} = producto;

//Muestra en la consola el nombre del producto, su precio y la cantidad de stock
//disponible, utilizando las variables que acabas de crear

console.log(nombre, precio, stock);

