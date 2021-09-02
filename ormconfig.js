module.exports = {
  ssl: {
    rejectUnauthorized: false,
  },
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/entities',
  },
};
