import { Router } from 'express';
import { userController } from '../controllers';
import { validate } from '../middleware';
import { asyncHandler } from '../utils';
import { userValidation } from '../validations';

const router = Router();

router.post(
    '/users',
    validate(userValidation.createUser),
    asyncHandler(userController.createUser)
);

router.get('/users', asyncHandler(userController.getAllUsers));

export const userRouter = router;
