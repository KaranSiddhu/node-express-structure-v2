import { NextFunction, Request, Response } from 'express';

export const authMiddleware = () => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			// TODO: add context functions
			next();
		} catch (err) {
			next(err);
		}
	};
};
