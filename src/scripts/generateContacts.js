import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const generateContacts = [];
  for (let i = number; i >= 1; i -= 1) {
    generateContacts.push(createFakeContact());
  }
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const addData = [...JSON.parse(data), ...generateContacts];
    fs.writeFile(PATH_DB, JSON.stringify(addData, undefined, 5));
    console.log(addData);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

generateContacts(5);
