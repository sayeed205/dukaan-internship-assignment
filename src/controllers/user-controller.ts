import { Request, Response } from 'express';
import { userService } from '../services';

export const createUser = async (req: Request, res: Response) => {
    return res.status(201).json(await userService.createUser(req.body));
};

export const getAllUsers = async (req: Request, res: Response) => {
    return res.status(200).json(await userService.getAllUsers());
};

export const getUserById = async (req: Request, res: Response) => {
    return res
        .status(200)
        .json(await userService.getUserById(parseInt(req.params.id)));
};

export const updateUser = async (req: Request, res: Response) => {
    return res
        .status(200)
        .json(await userService.updateUser(parseInt(req.params.id), req.body));
};

export const deleteUser = async (req: Request, res: Response) => {
    return res
        .status(200)
        .json(await userService.deleteUser(parseInt(req.params.id)));
};
