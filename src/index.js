const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // Middleware para fazer o parse do JSON no body da requisição
app.use(routes);

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000...');
});
