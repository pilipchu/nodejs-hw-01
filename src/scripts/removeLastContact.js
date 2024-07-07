import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const lastContact = JSON.parse(data).pop();
    const removeLastContact = JSON.parse(data).filter(
      (data) => data.id !== lastContact.id,
    );
    fs.writeFile(PATH_DB, JSON.stringify(removeLastContact, undefined, 5));
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

removeLastContact();
