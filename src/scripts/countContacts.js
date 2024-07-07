import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const countContacts = JSON.parse(data).length;
    return countContacts;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
