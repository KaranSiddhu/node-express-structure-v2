import User from './user.model';
import { IUserResponse } from './user.type';

export const createBulkUserResponse = (users: User[] | undefined): IUserResponse[] => {
	if (!users) return [];

	return users.map(user => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdDate: user.createdDate,
			updatedAt: user.createdDate
		};
	});
};

export const createUserResponse = (user: User | undefined): IUserResponse | object => {
	if (!user) return {};

	return {
		id: user.id,
		name: user.name,
		email: user.email,
		createdDate: user.createdDate,
		updatedAt: user.createdDate
	};
};
