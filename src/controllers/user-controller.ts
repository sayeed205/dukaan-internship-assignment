import { Request, Response } from 'express';
import { userService } from '../services';

export const createUser = async (req: Request, res: Response) => {
    return res.status(201).json(await userService.createUser(req.body));
};

export const getAllUsers = async (req: Request, res: Response) => {
    return res.status(200).json(await userService.getAllUsers());
};
