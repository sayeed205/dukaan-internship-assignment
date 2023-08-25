import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils';

export const errorHandler = (
    err: ErrorResponse,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let error = { ...err };
    error.message = err.message;

    if (err.name === 'CastError') {
        const message = `Resource not found`;
        error = new ErrorResponse(message, 404);
    } else if (err.name === 'TypeError') {
        const message = `An unknown error occurred while processing your request. Please try again later.`;
        error = new ErrorResponse(message);
    } else if (err.name === 'JsonWebTokenError') {
        const message = `Invalid token or Token expired. Please log in again.`;
        error = new ErrorResponse(message, 401);
    }

    // todo)) add more generic errors
    return res.status(error.statusCode || 500).json({
        ok: false,
        error: error.message || 'Server Error',
    });
};
