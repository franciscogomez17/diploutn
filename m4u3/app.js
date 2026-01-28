const express = require("express");
const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Página principal");
});

app.get("/saludo", (req, res) => {
  res.send("Hola desde Express");
});

app.get("/contacto", (req, res) => {
  res.send("Página de contacto");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
