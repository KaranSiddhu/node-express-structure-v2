import { Request, Response } from 'express';
import { errorResponse, successResponse } from '../../utils/apiResponses';
import userService from './user.service';
import { userCreateSchema, UserCreateType } from './user.validations';

export const getAllUser = async (req: Request, res: Response) => {
	try {
		const result = await userService.getAllUser();

		successResponse({ res, data: result });
	} catch (error) {
		errorResponse({ req, res, error });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const validatedReqBody: UserCreateType = await userCreateSchema.validate(req.body, { abortEarly: false });

		const result = await userService.createUser(validatedReqBody);

		successResponse({ res, data: result });
	} catch (error) {
		errorResponse({ req, res, error });
	}
};
