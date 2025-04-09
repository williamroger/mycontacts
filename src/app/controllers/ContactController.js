const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // este método serve para listar todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    return response.json(contacts);
  }

  // este método serve para mostrar um registro específico
  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(contact);
  }

  // este método serve para criar um novo registro
  store() {

  }

  // este método serve para atualizar um registro específico
  update() {

  }

  // este método serve para deletar um registro específico
  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    // 204 Ok but, No Content
    return response.sendStatus(204);
  }
}

// This is a placeholder for the ContactController class
module.exports = new ContactController();
