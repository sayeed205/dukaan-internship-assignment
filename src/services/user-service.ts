import { User } from '../models';
import { ErrorResponse } from '../utils';
import { CreateUser, UpdateUser } from '../validations/user-validation';

// type UserInfo = z.infer<typeof userValidation.userInfo.merge(userValidation.userPassword)>;

export const createUser = async (userInfo: CreateUser) => {
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

export const getUserById = async (id: number) => {
    const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email'],
    });
    if (!user) {
        throw new ErrorResponse('User not found', 404);
    }
    return { ok: true, user };
};

export const updateUser = async (id: number, userInfo: Partial<UpdateUser>) => {
    const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email'],
    });
    if (!user) {
        throw new ErrorResponse('User not found', 404);
    }

    const { email } = userInfo;

    if (email && email !== user.email && (await User.isEmailTaken(email))) {
        throw new ErrorResponse('Email is already in use', 409);
    }

    await user.update({ ...userInfo });
    return { ok: true, user };
};

export const deleteUser = async (id: number) => {
    const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email'],
    });
    if (!user) {
        throw new ErrorResponse('User not found', 404);
    }
    await user.destroy();
    return { ok: true, user };
};
