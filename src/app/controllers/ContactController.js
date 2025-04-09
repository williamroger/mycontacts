const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // este método serve para listar todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    return response.json(contacts);
  }

  // este método serve para mostrar um registro específico
  show() {

  }

  // este método serve para criar um novo registro
  store() {

  }

  // este método serve para atualizar um registro específico
  update() {

  }

  // este método serve para deletar um registro específico
  delete() {

  }
}

// This is a placeholder for the ContactController class
module.exports = new ContactController();
