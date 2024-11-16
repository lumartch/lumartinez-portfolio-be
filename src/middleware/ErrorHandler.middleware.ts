import { Request, Response } from 'express';

export const ErrorHandler = (err: Error, _: Request, res: Response) => {
    // console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
};