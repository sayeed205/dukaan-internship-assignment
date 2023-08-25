import { z } from 'zod';

export const createUserBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
        ),
});

export const createUser = z.object({
    body: createUserBody,
});
