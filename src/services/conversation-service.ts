import { Conversation } from '../models';
import { ErrorResponse } from '../utils';
import { CreateConversation } from '../validations/conversation-validation';

export const createConversation = async (
    conversationInfo: CreateConversation
) => {
    const conversation = await Conversation.create(conversationInfo);

    return conversation;
};

export const getConversationsByChatbotId = async (chatbotId: number) => {
    const conversations = await Conversation.findAll({
        where: {
            chatbotId,
        },
        attributes: [
            'id',
            'title',
            'content',
            'isComplete',
            'endUserId',
            'chatbotId',
            'createdAt',
        ],
    });

    return { ok: true, conversations };
};

export const getConversationById = async (id: number) => {
    const conversation = await Conversation.findByPk(id, {
        attributes: [
            'id',
            'title',
            'content',
            'isComplete',
            'endUserId',
            'chatbotId',
            'createdAt',
        ],
    });

    return { ok: true, conversation };
};

export const updateConversation = async (id: number, isComplete: boolean) => {
    const conversation = await Conversation.findByPk(id, {
        attributes: [
            'id',
            'title',
            'content',
            'isComplete',
            'endUserId',
            'chatbotId',
            'createdAt',
        ],
    });

    if (!conversation) {
        throw new ErrorResponse('Conversation not found', 404);
    }

    conversation.isComplete = isComplete;
    await conversation.save();

    return { ok: true, conversation };
};

export const deleteConversation = async (id: number) => {
    const conversation = await Conversation.findByPk(id, {
        attributes: [
            'id',
            'title',
            'content',
            'isComplete',
            'endUserId',
            'chatbotId',
            'createdAt',
        ],
    });

    if (!conversation) {
        throw new ErrorResponse('Conversation not found', 404);
    }

    await conversation.destroy();

    return { ok: true, conversation };
};
