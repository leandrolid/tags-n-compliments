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
