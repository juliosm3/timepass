const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware.js');


router.get('/', horaMiddleware, (req, res) => {

    console.log(req.query)
  const mensaje = req.query.mensaje || '';
  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: <strong>${req.horaActual}</strong></p>
    ${mensaje ? `<p style="color: red;">${mensaje}</p>` : ''}
    <form action="/endroute" method="get">
      <button type="submit">Entrar</button>
    </form>
  `);
});

module.exports = router;
