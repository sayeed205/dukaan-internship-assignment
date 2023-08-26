import { Request, Response } from 'express';
import { conversationService } from '../services';

export const createConversation = async (req: Request, res: Response) => {
    return res
        .status(201)
        .json(await conversationService.createConversation(req.body));
};

export const getConversationsByChatbotId = async (
    req: Request,
    res: Response
) => {
    return res
        .status(200)
        .json(
            await conversationService.getConversationsByChatbotId(
                Number(req.params.id)
            )
        );
};

export const getConversationById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    return res
        .status(200)
        .json(await conversationService.getConversationById(id));
};

export const updateConversation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const isComplete = req.body.isComplete;
    return res
        .status(200)
        .json(await conversationService.updateConversation(id, isComplete));
};

export const deleteConversation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    return res
        .status(200)
        .json(await conversationService.deleteConversation(id));
};
