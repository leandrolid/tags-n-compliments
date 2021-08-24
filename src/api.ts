import express, { json } from 'express';

const api = express();
api.use(json());

api.get('/', (req, res) => res.send('testando'))

export { api };