// import { validate } from 'class-validator';
// import { plainToInstance } from 'class-transformer';
// import express, { NextFunction, Request, Response } from 'express';
// import { isArrayEmpty, isObjectEmpty } from '../utils/constants';

// const validateReqBody = async (type: any, obj: any): Promise<Array<string>> => {
// 	const dto = plainToInstance(type, obj);
// 	const validationErrors = await validate(dto);

// 	if (validationErrors.length > 0) {
// 		const messages = validationErrors.map(error => {
// 			if (error?.children && !isArrayEmpty(error?.children)) {
// 				const childrenErrors = error?.children;

// 				const errorMessage = `In ${error.property}: `;

// 				const childErrorArray: Array<string> = [];
// 				childrenErrors.forEach(eachChild => {
// 					if (eachChild.constraints && !isObjectEmpty(eachChild.constraints)) {
// 						childErrorArray.push(Object.values(eachChild.constraints).join(', '));
// 					}
// 				});

// 				return errorMessage + childErrorArray.join(',');
// 			} else {
// 				return Object.values(error.constraints || '').join(', ');
// 			}
// 		});

// 		return messages;
// 	}

// 	return [];
// };

// export function validateRequestBody(type: any): express.RequestHandler {
// 	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
// 		const isRequestBodyObj = typeof req.body === 'object';

// 		if (!req.body || (isRequestBodyObj && isObjectEmpty(req.body)) || isArrayEmpty(req.body)) {
// 			res.status(400).json({ success: false, message: 'Request body is required' });
// 			return;
// 		}

// 		// if object validate that obj
// 		if (isRequestBodyObj) {
// 			const errorMessages = await validateReqBody(type, req.body);

// 			if (!isArrayEmpty(errorMessages)) {
// 				res.status(400).json({ success: false, messages: errorMessages });
// 				return;
// 			}

// 			next();
// 			return;
// 		}

// 		// if array validate every obj in array
// 		const errorMessageArr: Array<string> = [];

// 		for (const item of req.body) {
// 			const eachItemMessages = await validateReqBody(type, item);

// 			if (!isArrayEmpty(eachItemMessages)) {
// 				errorMessageArr.push(eachItemMessages.toString());
// 			}
// 		}

// 		if (!isArrayEmpty(errorMessageArr)) {
// 			res.status(400).json({ success: false, messages: errorMessageArr });
// 			return;
// 		}

// 		next();
// 	};
// }
