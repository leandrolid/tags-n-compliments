import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

const router = Router();

router.post('/users', createUserController.handle);

router.post('/tags', createTagController.handle);

export { router };