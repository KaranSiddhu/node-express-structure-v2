import * as yup from 'yup';

export const userCreateSchema = yup.object().shape({
	name: yup
		.string()
		.strict(true)
		.required('name is required')
		.min(3, 'name must be at least 3 characters')
		.max(50, 'name must be at most 50 characters'),
	email: yup.string().required('Email is required').email('Invalid email format')
});

export type UserCreateType = yup.InferType<typeof userCreateSchema>;
