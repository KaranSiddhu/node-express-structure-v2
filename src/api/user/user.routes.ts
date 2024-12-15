import express from 'express';
import { createUser, getAllUser } from './user.controller';

const userRouter = express.Router();

// Base URL /api/v1/user

userRouter.get('/', getAllUser);

userRouter.post('/', createUser);

export default userRouter;
