import { z } from 'zod';

const createConversationSchema = z.object({
    content: z
        .string({
            required_error: "'content' is required",
        })
        .min(3),
    endUserId: z
        .number({
            invalid_type_error: "'endUserId' must be a number",
            required_error: "'endUserId' is required",
        })
        .int()
        .positive(), // todo)) probably going to be handled by the auth middleware
    chatbotId: z
        .number({
            invalid_type_error: "'chatbotId' must be a number",
            required_error: "'chatbotId' is required",
        })
        .int()
        .positive({
            message: "'chatbotId' must be a positive number",
        }),
    title: z
        .string({
            required_error: "'title' is required",
        })
        .min(1)
        .max(100),
    isComplete: z.boolean().default(false),
});

export const createConversation = z.object({
    body: createConversationSchema.strict(),
});

const getConversationsByChatbotIdSchema = z.object({
    id: z
        .string({
            required_error: "'id' is required",
        })
        .transform(val => parseInt(val, 10)),
});

export const getConversationById = z.object({
    params: getConversationsByChatbotIdSchema.strict(),
});

export const updateConversation = z.object({
    body: z
        .object({
            isComplete: z.boolean().default(false),
        })
        .strict(),
    params: getConversationsByChatbotIdSchema.strict(),
});

export type CreateConversation = z.infer<typeof createConversationSchema>;
