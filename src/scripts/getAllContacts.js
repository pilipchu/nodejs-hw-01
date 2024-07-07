import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const getAll = JSON.parse(data);
    return getAll;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
