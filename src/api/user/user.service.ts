import { AppDataSource } from '../../config/database.config';
import log from '../../utils/logger';
import { createBulkUserResponse, createUserResponse } from './user.dtos';
import User from './user.model';
import { UserCreateType } from './user.validations';

export const userRepository = AppDataSource.getRepository(User);

namespace userService {
	export const getAllUser = async () => {
		log.info('Getting all users');
		const users = await userRepository.find();

		if (!users) {
			throw new Error('No users found');
		}

		return createBulkUserResponse(users);
	};

	export const createUser = async (requestBody: UserCreateType) => {
		log.info('Creating a new user');

		const response = await userRepository.save(requestBody);

		return createUserResponse(response);
	};
}

export default userService;
