import { createConnection } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
});
// export const connection = (async () => {
//   await createConnection();
//   getConnection('default');
// })();

export default createConnection({
  name: 'default',
  // type: process.env.DB_TYPE ,
  type: process.env.NODE_ENV === 'dev' ? 'sqlite' : 'postgres',
  database: process.env.DB_DATABASE,
  url: process.env.DB_URL,
  migrations: ['migrations/*.ts', 'migrations/*.js'],
  entities: [
    path.join(__dirname, '..', 'entities', '*.js'),
    path.join(__dirname, '..', 'entities', '*.ts'),
  ],
});
