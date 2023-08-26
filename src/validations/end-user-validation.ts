import { z } from 'zod';

const endUserId = z.object({
    id: z
        .string({
            required_error: 'EndUser id is required',
        })
        .transform(val => parseInt(val, 10)),
});

const endUserInfo = z.object({
    name: z.string({
        required_error: 'Name is required',
    }),
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email(),
});

export const getEndUserById = z.object({
    params: endUserId,
});

const endUserPassword = z.object({
    password: z
        .string({
            required_error: 'Password is required',
        })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
        ),
});

const createEndUserSchema = endUserInfo.merge(endUserPassword);
export const createEndUser = z.object({
    body: createEndUserSchema.strict(),
});

export const updateEndUser = z.object({
    params: endUserId,
    body: endUserInfo.partial().refine(val => Object.keys(val).length > 0, {
        message: "At least one field is required 'name' or 'email' to update",
        path: ['name', 'email'],
    }),
});

export type CreateEndUser = z.infer<typeof createEndUserSchema>;
export type UpdateEndUser = z.infer<typeof endUserInfo>;
