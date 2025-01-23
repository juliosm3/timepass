const validarHora = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
  
    if (hours < 12) {
      const mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar.`;
      return res.send(`
        <h1>Error</h1>
        <p>${mensaje}</p>
        <a href="/">Volver al inicio</a>
      `);
    }
  
    next();
  };
  
  module.exports = validarHora;
  
  