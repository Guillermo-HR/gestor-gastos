const moongose = require('mongoose'); // Import mongoose

const db = async () => { // funcion asincrona
  try {
    moongose.set('strictQuery', false) // Desactivar el modo estricto
    await moongose.connect(process.env.MONGO_URL) // Conectar a la base de datos
    console.log('Conectado a la base de datos') // Mensaje para validar coneccion
  } catch (error) {
    console.log('Error al conectar a la base de datos', error) // Mensaje de error
  }
}

module.exports = {db}; // Hace posible que se pueda importar la funcion db en otros archivos