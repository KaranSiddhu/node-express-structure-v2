import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRouter } from './api';
import { logApi } from './middlewares/logApi';
import { authMiddleware } from './middlewares/auth/auth';

const app = express();

// Middlewares
app.use(
	cors({
		origin: ['http://localhost:4000']
	})
);
app.use(express.json());

// Routes
app.use('/api/v1/user', logApi(), authMiddleware(), userRouter);

app.get('/', (_req: Request, res: Response) => {
	res.status(200).send("Welcome Dev's");
});

app.all('*', (_req: Request, res: Response) => {
	res.status(404).send('Route does not exists');
});

export default app;
