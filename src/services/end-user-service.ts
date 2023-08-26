import { EndUser } from '../models';
import { ErrorResponse } from '../utils';
import { CreateEndUser } from '../validations/end-user-validation';

export const createEndUser = async (endUserInfo: CreateEndUser) => {
    const { name, email, password } = endUserInfo;

    if (await EndUser.isEmailTaken(email)) {
        throw new ErrorResponse('Email is already in use', 409);
    }

    const endUser = await EndUser.create({ name, email, password });
    return { ok: true, token: endUser.generateToken() };
};

export const getAllEndUsers = async () => {
    const endUsers = await EndUser.findAll({
        attributes: ['id', 'name', 'email'],
    });
    return { ok: true, endUsers };
};

export const getEndUserById = async (id: number) => {
    const endUser = await EndUser.findByPk(id, {
        attributes: ['id', 'name', 'email'],
    });
    if (!endUser) {
        throw new ErrorResponse('EndUser not found', 404);
    }
    return { ok: true, endUser };
};

export const updateEndUser = async (
    id: number,
    endUserInfo: Partial<CreateEndUser>
) => {
    const endUser = await EndUser.findByPk(id, {
        attributes: ['id', 'name', 'email'],
    });
    if (!endUser) {
        throw new ErrorResponse('EndUser not found', 404);
    }

    const { email } = endUserInfo;

    if (
        email &&
        email !== endUser.email &&
        (await EndUser.isEmailTaken(email))
    ) {
        throw new ErrorResponse('Email is already in use', 409);
    }

    await endUser.update({ ...endUserInfo });
    return { ok: true, endUser };
};

export const deleteEndUser = async (id: number) => {
    const endUser = await EndUser.findByPk(id, {
        attributes: ['id', 'name', 'email'],
    });
    if (!endUser) {
        throw new ErrorResponse('EndUser not found', 404);
    }
    await endUser.destroy();
    return { ok: true, endUser };
};
