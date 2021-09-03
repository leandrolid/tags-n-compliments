import { createConnection } from 'typeorm';
import path from 'path';
// import dotenv from 'dotenv';

// dotenv.config({
//   path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
// });
// export const connection = (async () => {
//   await createConnection();
//   getConnection('default');
// })();
const JS = path.join(__dirname, '..', 'entities', '*.js');
const TS = path.join(__dirname, '..', 'entities', '*.ts');
console.log(JS);
console.log(TS);

const connection = async () => {
  await createConnection({
    name: 'default',
    // type: process.env.DB_TYPE ,
    type: process.env.NODE_ENV === 'dev' ? 'sqlite' : 'postgres',
    database: process.env.DB_DATABASE,
    url: process.env.DB_URL,
    migrations: ['migrations/*.ts', 'migrations/*.js'],
    entities: [JS, TS],
  });
};

try {
  connection();
} catch (error) {
  throw new Error(error.message);
}

export { connection };
