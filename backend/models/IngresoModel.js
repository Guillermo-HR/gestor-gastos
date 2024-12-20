const mongoose = require('mongoose');

const ingresosSchema = new mongoose.Schema({ // Crear el schema para la coleccion de ingresos
  titulo: {
    type: String,
    required: true,
    trim: true,
    maxLenght: 50
  },
  cantidad: {
    type: Number,
    required: true,
    trim: true,
    maxLenght: 20
  },
  categoria: {
    type: String,
    default: "Ingreso"
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  descripcion: {
    type: String,
    trim: true,
    maxLenght: 200
  },
}, { timestamps: true });

module.exports = mongoose.model('Ingreso', ingresosSchema); // Crear el modelo