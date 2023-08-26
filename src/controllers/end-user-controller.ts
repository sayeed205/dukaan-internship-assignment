import { Request, Response } from 'express';
import { endUserService } from '../services';

export const createEndUser = async (req: Request, res: Response) => {
    res.status(201).json(await endUserService.createEndUser(req.body));
};

export const getAllEndUsers = async (req: Request, res: Response) => {
    res.status(200).json(await endUserService.getAllEndUsers());
};

export const getEndUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.status(200).json(await endUserService.getEndUserById(id));
};

export const updateEndUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.status(200).json(await endUserService.updateEndUser(id, req.body));
};

export const deleteEndUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.status(200).json(await endUserService.deleteEndUser(id));
};
