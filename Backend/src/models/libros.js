// Importa mongoose
const mongoose = require('mongoose');

// Define el esquema del libro
const libroSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
    unique: true
  },
  ISBN: {
    type: String,
    required: true
  },
  Titulo: {
    type: String,
    required: true
  },
  Autor: {
    type: String,
    required: true
  },
  Editorial: {
    type: String,
    required: true
  },
  Cantidad: {
    type: Number,
    required: true,
    min: 0
  }
});

// Exporta el modelo
module.exports = mongoose.model('Libro', libroSchema);
