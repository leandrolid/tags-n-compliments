import { api } from './api';

const API_PORT = process.env.PORT || 3000;

api.listen(API_PORT, () => {
  console.log('server running');
  console.log('migrations', process.env.MIGRATIONS_FOLDER);
  console.log('entities', process.env.ENTITIES_FOLDER);
  console.log('path/url', process.env.DB_PATH);
});
