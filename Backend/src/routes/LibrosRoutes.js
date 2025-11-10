const express = require('express');
const {
  getLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro
} = require('../controllers/librosController'); // Asegúrate de que el nombre del archivo sea correcto

const router = express.Router();

// ✅ Rutas CRUD para libros
router.get('/', getLibros);          // Obtener todos los libros
router.get('/:id', getLibroById);    // Obtener un libro por ID
router.post('/', createLibro);       // Crear un nuevo libro
router.put('/:id', updateLibro);     // Actualizar un libro por ID
router.delete('/:id', deleteLibro);  // Eliminar un libro por ID

module.exports = router;
