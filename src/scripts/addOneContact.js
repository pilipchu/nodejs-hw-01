import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const addData = [...JSON.parse(data), createFakeContact()];
    fs.writeFile(PATH_DB, JSON.stringify(addData, undefined, 5));
    console.log(addData);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

addOneContact();
