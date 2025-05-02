const express = require('express');
require('express-async-errors'); // Middleware para tratamento de erros assíncronos

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json()); // Middleware para fazer o parse do JSON no body da requisição
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => {
  console.log('🚀 Server is running on port 3000...');
});
