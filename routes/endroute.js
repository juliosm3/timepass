const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
  res.send(`
    <h1>Ruta Final</h1>
    <p>Has accedido correctamente a esta página.</p>
    <a href="/">Volver al inicio</a>
  `);
});

module.exports = router;

