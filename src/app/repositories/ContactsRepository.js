const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: ' Gabriel',
    email: 'geliasmachado43@gmail.com',
    phone: '124214134',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
