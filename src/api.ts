import 'reflect-metadata';
import express, { json } from 'express';
import './database';

const api = express();
api.use(json());

api.get('/', (req, res) => res.send('testando'))

export { api };