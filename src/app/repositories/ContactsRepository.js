const { v4: uuidV4 } =  require('uuid');
const db = require('../../database');

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

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(`
      INSERT INTO contacts (name, email, phone, category_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => {
        contact.id === id ? updatedContact : contact;
      });

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
