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

router.get(
    '/users/:id',
    validate(userValidation.getUserById),
    asyncHandler(userController.getUserById)
);

router.put(
    '/users/:id',
    validate(userValidation.updateUser),
    asyncHandler(userController.updateUser)
);

router.delete(
    '/users/:id',
    validate(userValidation.getUserById),
    asyncHandler(userController.deleteUser)
);

export const userRouter = router;
