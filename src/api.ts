import 'reflect-metadata';
import express, { json } from 'express';
import './database';
import { router } from './routes';

const api = express();

api.use(json());
api.use(router);

export { api };