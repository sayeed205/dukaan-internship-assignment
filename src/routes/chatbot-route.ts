import { Router } from 'express';

import { chatbotController } from '../controllers';
import { validate } from '../middleware';
import { asyncHandler } from '../utils';
import { chatbotValidation, userValidation } from '../validations';

const router = Router();

router.post(
    '/users/:id/chatbots',
    validate(userValidation.getUserById),
    validate(chatbotValidation.createChatBot),
    asyncHandler(chatbotController.createChatbot)
);

router.get(
    '/users/:id/chatbots',
    validate(userValidation.getUserById),
    asyncHandler(chatbotController.getAllChatbots)
);

router.get(
    '/chatbots/:id',
    validate(chatbotValidation.getChatbotById),
    asyncHandler(chatbotController.getChatbotById)
);

router.put(
    '/chatbots/:id',
    validate(chatbotValidation.getChatbotById),
    validate(chatbotValidation.updateChatBot),
    asyncHandler(chatbotController.updateChatbot)
);

router.delete(
    '/chatbots/:id',
    validate(chatbotValidation.getChatbotById),
    asyncHandler(chatbotController.deleteChatbot)
);

export const chatbotRouter = router;
