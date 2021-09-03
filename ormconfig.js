const path = require('path');

const JS = path.join(__dirname, 'dist', 'entities', '*.js');
const TS = path.join(__dirname, 'src', 'entities', '*.ts');

const MIG_JS = path.join(__dirname, 'dist', 'database', 'migrations');
const MIG_TS = path.join(__dirname, 'src', 'database', 'migrations');

module.exports = {
  type: 'sqlite',
  database: './src/database/tags_n_compliments.sqlite',
  migrations: [MIG_JS, MIG_TS],
  entities: [JS, TS],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/entities',
  },
};
