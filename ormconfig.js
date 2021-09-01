const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
});

module.exports = {
  name: 'default',
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // url: process.env.DB_PATH,
  migrations: [process.env.MIGRATIONS_FOLDER],
  entities: [
    process.env.NODE_ENV === 'dev'
      ? './src/entities/*.ts'
      : './dist/entities/*.js',
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
//   // url: process.env.DB_PATH,
//   database: process.env.DB_PATH,
//   migrations: [process.env.MIGRATIONS_FOLDER],
//   entities: [process.env.ENTITIES_FOLDER],
//   cli: {
//     migrationsDir: './src/database/migrations',
//     entitiesDir: './src/entities',
//   },
// };
