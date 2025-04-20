const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // este método serve para listar todos os registros
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);
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
  async store(request, response) {
    const { name, email, phone, category_id } = request.body;
    const contactExists = await ContactsRepository.findByEmail(email);

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (contactExists) {
      return response.status(400).json({ error: 'This email is already registered' });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    return response.status(201).json(contact);
  }

  // este método serve para atualizar um registro específico
  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;
    const contactExists = await ContactsRepository.findById(id);
    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (!contactExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (contactByEmail && contactByEmail.id !== id) {
      // se o contato existe e o id do contato que está sendo atualizado é diferente do id do contato que já existe
      // ou seja, se o contato que está sendo atualizado já existe
      // e o id é diferente do id do contato que já existe
      // então retorna um erro
      return response.status(400).json({ error: 'This email is already registered' });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return response.json(contact);
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
