const express = require("express");
const cors = require("cors");
const librosRoutes = require("./routes/librosRoutes");

const app = express();

// Middleware
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Para manejar JSON en las peticiones

// Rutas
app.use("/api/libros", librosRoutes);

// Ruta base opcional (puede servir para verificar que el servidor funciona)
app.get("/", (req, res) => {
  res.send("📚 API del sistema de biblioteca funcionando correctamente");
});

module.exports = app;
