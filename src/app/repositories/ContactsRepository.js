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

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    })
  }
}

module.exports = new ContactsRepository();
