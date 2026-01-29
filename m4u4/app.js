const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3005;

// Para leer datos enviados por el usuario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de sesión
app.use(
  session({
    secret: "mi_clave_secreta",
    resave: false,
    saveUninitialized: true,
  })
);

// Formulario
app.get("/", (req, res) => {
  res.send(`
    <h2>Ingresar nombre</h2>
    <form method="POST" action="/guardar">
      <input type="text" name="nombre" />
      <button type="submit">Enviar</button>
    </form>
  `);
});

// Guardar dato en sesión
app.post("/guardar", (req, res) => {
  req.session.nombre = req.body.nombre;
  res.send("Nombre guardado en sesión");
});

// Leer dato desde sesión
app.get("/perfil", (req, res) => {
  if (req.session.nombre) {
    res.send("Hola " + req.session.nombre + ", este dato viene de la sesión");
  } else {
    res.send("No hay datos guardados en la sesión");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
