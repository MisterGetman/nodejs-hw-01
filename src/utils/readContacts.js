import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const fileContent = await fs.readFile(PATH_DB, 'utf-8');
  const data = JSON.parse(fileContent);

  return data;
};
