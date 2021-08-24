import { api } from './api';

const API_PORT = process.env.PORT || 3000;

api.listen( API_PORT, () => {
  console.log('server running');
})