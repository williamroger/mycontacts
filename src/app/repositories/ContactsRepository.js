const { v4: uuidV4 } =  require('uuid');

const contacts = [
  {
    id: uuidV4(),
    name: 'William Roger',
    email: 'william@email.com',
    phone: '123456789',
    category_id: uuidV4(),
  }
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
