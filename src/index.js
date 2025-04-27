const express = require('express');
require('express-async-errors'); // Middleware para tratamento de erros assíncronos

const routes = require('./routes');

const app = express();

app.use(express.json()); // Middleware para fazer o parse do JSON no body da requisição
app.use(routes);
app.use((error, request, response, next) => {
  console.log('###### Error Handler ######');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000...');
});
