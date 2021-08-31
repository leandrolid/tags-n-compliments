import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { verifyAdmin } from './middlewares/verifyAdmin';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

const router = Router();

router.post('/users', createUserController.handle);

router.post('/tags', verifyAdmin, createTagController.handle);

router.post( '/sessions', authenticateUserController.handle );

export { router };
