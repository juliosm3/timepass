const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  
    req.horaActual = formattedTime;
    res.locals.horaActual = now.toLocaleTimeString();
    next();
  };
  
  module.exports = horaMiddleware;
  
  