import { z } from 'zod';

import { User } from '../models';
import { ErrorResponse } from '../utils';
import { userValidation } from '../validations';

type UserInfo = z.infer<typeof userValidation.createUserBody>;

export const createUser = async (userInfo: UserInfo) => {
    const { name, email, password } = userInfo;

    if (await User.isEmailTaken(email)) {
        throw new ErrorResponse('Email is already in use', 409);
    }

    const user = await User.create({ name, email, password });
    return { ok: true, token: user.generateToken() };
};

export const getAllUsers = async () => {
    const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
    return { ok: true, users };
};
