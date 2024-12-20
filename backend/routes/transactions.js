const router = require('express').Router() // Import express router. Es un objeto que permite manejar los request

router.get('/', (req, res) => {
  res.send('Hola desde transactions')
})

module.exports = router // Exportar router 