import express, { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { loginValidator, registerValidator } from '../validators/auth.validator';

const router: Router = express.Router();
const authController = AuthController();

router.post('/auth/register', registerValidator(), authController.register);
router.post('/auth/login', loginValidator(), authController.login);

export default router;