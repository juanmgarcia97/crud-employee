import 'reflect-metadata';
import 'dotenv/config';
import { AppDataSource } from './infrastructure/persistence/db.config';
import Server from './server';

const start = async () => {
  await AppDataSource.initialize();
  new Server().start();
};

start();
