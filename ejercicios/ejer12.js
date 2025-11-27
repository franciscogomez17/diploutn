//Crear un array con solo los nombres (map).
//Filtrar productos con precio > 5000 (filter).
//Buscar el producto “Mouse” (find).

const productos = [
    { nombre: "Mouse", precio: 4000 },
    { nombre: "Teclado", precio: 8000 },
    { nombre: "Monitor", precio: 30000 },
  ];

  const nombres = productos.map(function(persona){
      return persona.nombre;
  });

  console.log(nombres);

  const precios = productos.filter(function(objetos){
      return objetos.precio > 5000;
  });

  console.log(precios);

  const buscar = productos.find(function(producto){
      return producto.nombre;
  });

  console.log(buscar);