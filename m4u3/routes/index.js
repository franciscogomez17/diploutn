const express = require("express");

const app = express();
const PORT = 3002;

// Ruta 1

app.get("/", (req, res) => {
  res.send("Esta es mi tarea con utilizando Express");

});

// Ruta 2

app.get("/saludo", (req, res) => {
  res.send("Hola, esta es la ruta de saludo");

});

// Ruta 3

app.get("/contacto", (req, res) => {
  res.send("Podes contactarnos mediante el siguiente email: contacto@gmail.com");

});

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});