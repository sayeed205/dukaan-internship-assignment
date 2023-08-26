import { Router } from 'express';

import { conversationController } from '../controllers';
import { validate } from '../middleware';
import { asyncHandler } from '../utils';
import { chatbotValidation, conversationValidation } from '../validations';

const router = Router();

router.post(
    '/chatbots/:id/conversations',
    validate(chatbotValidation.getChatbotById),
    validate(conversationValidation.createConversation),
    asyncHandler(conversationController.createConversation)
);

router.get(
    '/chatbots/:id/conversations',
    validate(chatbotValidation.getChatbotById),
    asyncHandler(conversationController.getConversationsByChatbotId)
);

router.get(
    '/conversations/:id',
    validate(conversationValidation.getConversationById),
    asyncHandler(conversationController.getConversationById)
);

router.put(
    '/conversations/:id',
    validate(conversationValidation.updateConversation),
    asyncHandler(conversationController.updateConversation)
);

router.delete(
    '/conversations/:id',
    validate(conversationValidation.getConversationById),
    asyncHandler(conversationController.deleteConversation)
);

export const conversationRouter = router;
