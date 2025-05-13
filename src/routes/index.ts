import express, { Router } from 'express';
import { loginValidator, registerValidator } from '../validators/auth.validator';
import { authController } from '../controllers/auth.controller';
import { bookController } from '../controllers/book.controller';
import { authorizeBearer } from '../middlewares/authorization.middleware';

const router: Router = express.Router();

router.post('/auth/register', registerValidator(), authController().register);
router.post('/auth/login', loginValidator(), authController().login);

router.get('/books', authorizeBearer, bookController().allBooks);
router.get('/books/:id', authorizeBearer, bookController().bookById);

export default router;