import { createConnection, getConnection } from 'typeorm';

export const connection = async () => {
  await createConnection();
  getConnection('default');
};
