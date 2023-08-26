import { z } from 'zod';

// export const createUserBody = z.object({
//     name: z.string(),
//     email: z.string().email(),
//     password: z
//         .string()
//         .regex(
//             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//             'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
//         ),
// });
const userId = z.object({
    id: z
        .string({
            required_error: 'User id is required',
        })
        .transform(val => parseInt(val, 10)),
});

const userInfo = z.object({
    name: z.string({
        required_error: 'Name is required',
    }),
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email(),
});

export const getUserById = z.object({
    params: userId,
});

export const userPassword = z.object({
    password: z
        .string({
            required_error: 'Password is required',
        })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
        ),
});

const createUserSchema = userInfo.merge(userPassword);
export const createUser = z.object({
    body: createUserSchema.strict(),
});

export const updateUser = z.object({
    params: userId,
    body: userInfo.partial().refine(val => Object.keys(val).length > 0, {
        message: "At least one field is required 'name' or 'email' to update",
        path: ['name', 'email'],
    }),
});

export type CreateUser = z.infer<typeof createUserSchema>;
export type UpdateUser = z.infer<typeof userInfo>;
