const dotenv = require('dotenv');
const path = require('path');

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
    path.join('dist', 'entities', '*.js'),
    path.join('src', 'entities', '*.ts'),
  ],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/entities',
  },
};
