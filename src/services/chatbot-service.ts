import { ChatBot } from '../models';
import { ChatbotInfo } from '../validations/chatbot-validation';

export const createChatBot = async (id: number, chatbotInfo: ChatbotInfo) => {
    const chatbot = await ChatBot.create({ ...chatbotInfo, userId: id });
    return { ok: true, chatbot };
};

export const getAllChatbots = async (id: number) => {
    const chatbots = await ChatBot.findAll({
        where: { userId: id },
        attributes: ['id', 'name', 'description'],
    });
    return { ok: true, chatbots };
};

export const getChatbotById = async (id: number) => {
    const chatbot = await ChatBot.findByPk(id, {
        attributes: ['id', 'name', 'description'],
    });
    if (!chatbot) {
        return { ok: false, message: 'Chatbot not found' };
    }
    return { ok: true, chatbot };
};

export const updateChatbot = async (
    id: number,
    chatbotInfo: Partial<ChatbotInfo>
) => {
    const chatbot = await ChatBot.findByPk(id, {
        attributes: ['id', 'name', 'description'],
    });
    if (!chatbot) {
        return { ok: false, message: 'Chatbot not found' };
    }
    console.log(chatbotInfo);
    await chatbot.update({ ...chatbotInfo });
    return { ok: true, chatbot };
};

export const deleteChatbot = async (id: number) => {
    const chatbot = await ChatBot.findByPk(id, {
        attributes: ['id', 'name', 'description'],
    });
    if (!chatbot) {
        return { ok: false, message: 'Chatbot not found' };
    }
    await chatbot.destroy();
    return { ok: true, chatbot };
};
