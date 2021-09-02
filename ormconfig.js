const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
});

module.exports = {
  name: 'default',
  type: process.env.DB_TYPE,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
  url: process.env.DB_URL,
  migrations: ['src/database/migrations/*.ts', 'dist/database/migrations/*.js'],
  entities: [
    // path.resolve(__dirname, process.env.ENTITIES_FOLDER, 'entities', '*.*'),
    'dist/entities/*.js',
    'src/entities/*.ts',
  ],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/entities',
  },
};

// import dotenv from 'dotenv';

// dotenv.config({
//   path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
// });

// export default {
//   type: 'sqlite',
// host: process.env.DB_HOST,
// username: process.env.DB_USERNAME,
// port: process.env.DB_PORT,
// password: process.env.DB_PASSWORD,
//   // url: process.env.DB_PATH,
//   database: process.env.DB_PATH,
//   migrations: [process.env.MIGRATIONS_FOLDER],
//   entities: [process.env.ENTITIES_FOLDER],
//   cli: {
//     migrationsDir: './src/database/migrations',
//     entitiesDir: './src/entities',
//   },
// };
