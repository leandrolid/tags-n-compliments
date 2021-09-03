// const path = require('path');

// const JS = path.join(__dirname, 'dist', 'entities', '*.js');
// const TS = path.join(__dirname, 'src', 'entities', '*.ts');
module.exports = {
  type: 'sqlite',
  database: './src/database/tags_n_comliments.sqlite',
  migrations: [process.env.MIGRATIONS_FOLDER],
  entities: [process.env.ENTITIES_FOLDER],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/entities',
  },
};
