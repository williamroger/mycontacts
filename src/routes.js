const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index); // Lista todos os contatos
router.get('/contacts/:id', ContactController.show); // Mostra um contato específico
router.delete('/contacts/:id', ContactController.delete); // Deleta um contato específico
router.post('/contacts', ContactController.store); // Cria um novo contato
router.put('/contacts/:id', ContactController.update); // Atualiza um contato específico

module.exports = router;
