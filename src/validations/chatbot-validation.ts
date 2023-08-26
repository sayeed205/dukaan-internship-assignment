import { z } from 'zod';

const chatBotInfo = z.object({
    name: z.string({
        required_error: 'Name is required',
    }),
    description: z.string({
        required_error: 'Description is required',
    }),
});

export const createChatBot = z.object({
    body: chatBotInfo.strict(),
});

const chatBotId = z.object({
    id: z
        .string({
            required_error: 'Chatbot id is required',
        })
        .transform(val => parseInt(val, 10)),
});

export const getChatbotById = z.object({
    params: chatBotId,
});

export const updateChatBot = z.object({
    body: chatBotInfo.partial().strict(),
    params: chatBotId.strict(),
});

export type ChatbotInfo = z.infer<typeof chatBotInfo>;
