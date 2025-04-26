const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts', ContactController.index); // Lista todos os contatos
router.get('/contacts/:id', ContactController.show); // Mostra um contato específico
router.delete('/contacts/:id', ContactController.delete); // Deleta um contato específico
router.post('/contacts', ContactController.store); // Cria um novo contato
router.put('/contacts/:id', ContactController.update); // Atualiza um contato específico

router.get('/categories', CategoryController.index); // Lista todas as categorias
router.get('/categories/:id', CategoryController.show); // Mostra uma categoria específica
router.post('/categories', CategoryController.store); // Cria uma nova categoria
router.put('/categories/:id', CategoryController.update); // Atualiza uma categoria específica
router.delete('/categories/:id', CategoryController.delete); // Deleta uma categoria específica
module.exports = router;
