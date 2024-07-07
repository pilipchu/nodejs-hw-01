import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = fs.writeFile(PATH_DB, JSON.stringify([]));
    return data;
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
