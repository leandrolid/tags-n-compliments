import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { GetUserListController } from './controllers/GetUserListController';
import { verifyAdmin } from './middlewares/verifyAdmin';
import { verifyJWT } from './middlewares/verifyJWT';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const getUserListController = new GetUserListController();

const router = Router();

router.post('/users', createUserController.handle);

router.post( '/sessions', authenticateUserController.handle );

router.use( verifyJWT );

router.post( '/tags', verifyAdmin, createTagController.handle );

router.get( '/users', verifyAdmin, getUserListController.handle )

export { router };
