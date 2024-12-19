// ** Llamar a los paquetes necesarios **
const express = require('express') // Importar el paquete express
const cors = require('cors'); // Importar el paquete cors

const app = express() // Crear una instancia de express, desde ahi se van a llamar los metodos

require('dotenv').config() // Usar paquete dotenv para cargar las variables de entorno

const PORT = process.env.PORT // Asignar el valor de la variable de entorno PORT a la constante PORT

// ** Middleware **
app.use(express.json()) // Las solicitudes que lleguen al servidor se van a convertir a JSON
app.use(cors()) // Habilitar el uso de cors



const server = () => {
  /*
  // Primera prueba para verificar que el servidor este corriendo
  console.log('Server running on port', PORT) ;
  // Mostrar en consola el mensaje 'Server running on port' seguido del valor de la constante PORT
  */
  app.listen(PORT, () => { // Crear un servidor que escuche en el puerto PORT
    console.log('Se escucha en el puerto: ', PORT)
  })
}

server()