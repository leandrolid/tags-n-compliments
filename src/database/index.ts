import { createConnection } from 'typeorm';

export const connection = async () => {
  await createConnection();
  // return getConnection('default');
};
