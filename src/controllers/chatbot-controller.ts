import { Request, Response } from 'express';
import { chatbotService } from '../services';
import { ChatbotInfo } from '../validations/chatbot-validation';

export const createChatbot = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const botInfo = req.body as ChatbotInfo;
    const json = await chatbotService.createChatBot(id, botInfo);
    return res.status(201).json(json);
};

export const getAllChatbots = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const json = await chatbotService.getAllChatbots(id);
    return res.status(200).json(json);
};

export const getChatbotById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const json = await chatbotService.getChatbotById(id);
    return res.status(200).json(json);
};

export const updateChatbot = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const botInfo = req.body as ChatbotInfo;
    const json = await chatbotService.updateChatbot(id, botInfo);
    return res.status(200).json(json);
};

export const deleteChatbot = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const json = await chatbotService.deleteChatbot(id);
    return res.status(200).json(json);
};
