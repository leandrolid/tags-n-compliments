import 'reflect-metadata';
import express, { json, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import './database';
import { router } from './routes';

const api = express();

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env',
});

api.use(json());
api.use(router);

api.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        type: err.name,
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
);

export { api };
