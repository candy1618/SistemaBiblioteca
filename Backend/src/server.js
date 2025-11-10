const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Conexión a MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("✅ Conectado a MongoDB Atlas");

    const db = mongoose.connection.db;
    console.log("📘 Base de datos usada por Mongoose:", db.databaseName);

    // Listar colecciones existentes
    try {
      const colecciones = await db.listCollections().toArray();
      console.log(
        "📂 Colecciones en la base de datos:",
        colecciones.map((c) => c.name)
      );
    } catch (error) {
      console.error("❌ Error al listar colecciones:", error.message);
    }

    // Verificar colección 'libros' (en minúsculas)
    try {
      const docsLibros = await db.collection("libros").find({}).limit(5).toArray();
      console.log("📚 Documentos en 'libros':", docsLibros);
    } catch (error) {
      console.error("❌ Error al leer colección 'libros':", error.message);
    }

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error de conexión a MongoDB:", error.message);
  });
