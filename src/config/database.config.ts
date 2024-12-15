import { DataSource } from 'typeorm';
import env from './environment.config';
import { AppEnvEnum } from '../types/enums';

const isLocal = env.app.environment === AppEnvEnum.local;

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: env.db.host,
	username: env.db.user,
	password: env.db.password,
	database: env.db.dbName,
	synchronize: true,
	logging: ['error', 'warn'],
	entities: isLocal ? ['src/**/*.model.ts'] : ['src/**/*.model.js'],
	ssl: true,
	migrations: ['src/migrations/*.ts']
});
