const Libro = require('../models/libros'); // Importa el modelo correcto

// ✅ Obtener todos los libros
const getLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros', error });
  }
};

// ✅ Obtener un libro por ID
const getLibroById = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el libro', error });
  }
};

// ✅ Agregar un nuevo libro
const createLibro = async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.status(201).json({ message: 'Libro agregado correctamente', libro: nuevoLibro });
  } catch (error) {
    res.status(400).json({ message: 'Error al agregar el libro', error });
  }
};

// ✅ Actualizar un libro por ID
const updateLibro = async (req, res) => {
  try {
    const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!libroActualizado) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json({ message: 'Libro actualizado correctamente', libro: libroActualizado });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el libro', error });
  }
};

// ✅ Eliminar un libro por ID
const deleteLibro = async (req, res) => {
  try {
    const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
    if (!libroEliminado) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json({ message: 'Libro eliminado correctamente', libro: libroEliminado });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el libro', error });
  }
};

module.exports = {
  getLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro
};
