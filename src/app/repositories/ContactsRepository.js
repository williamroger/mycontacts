const { v4: uuidV4 } =  require('uuid');

let contacts = [
  {
    id: uuidV4(),
    name: 'William Roger',
    email: 'william@email.com',
    phone: '123456789',
    category_id: uuidV4(),
  },
  {
    id: uuidV4(),
    name: 'Ryan Pietro',
    email: 'ryan@email.com',
    phone: '123458756',
    category_id: uuidV4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    const contact = contacts.find((contact) => contact.id === id);

    return new Promise((resolve) => resolve(contact));
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      const contact = contacts.find((contact) => contact.email === email);

      resolve(contact)
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    })
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuidV4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact)
    });
  }
}

module.exports = new ContactsRepository();
