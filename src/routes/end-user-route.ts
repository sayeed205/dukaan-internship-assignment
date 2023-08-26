import { Router } from 'express';
import { endUserController } from '../controllers';
import { validate } from '../middleware';
import { asyncHandler } from '../utils';
import { endUserValidation } from '../validations';

const router = Router();

router.post(
    '/endusers',
    validate(endUserValidation.createEndUser),
    asyncHandler(endUserController.createEndUser)
);

router.get('/endusers', asyncHandler(endUserController.getAllEndUsers));

router.get(
    '/endusers/:id',
    validate(endUserValidation.getEndUserById),
    asyncHandler(endUserController.getEndUserById)
);

router.put(
    '/endusers/:id',
    validate(endUserValidation.getEndUserById),
    validate(endUserValidation.updateEndUser),
    asyncHandler(endUserController.updateEndUser)
);

router.delete(
    '/endusers/:id',
    validate(endUserValidation.getEndUserById),
    asyncHandler(endUserController.deleteEndUser)
);

export const endUserRouter = router;
