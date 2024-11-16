import dotenv from 'dotenv';
import express, { Express, Response } from 'express';

import { API_PATHS } from './consts';
import { AppController } from './controllers/App.controller';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const { controller } = AppController();

app.use(API_PATHS.baseUrl, controller);

app.get('/', (_, res: Response) => { res.send('Hello world!'); });

app.listen(port, () => { console.log(`[server]: Server is running at http://localhost:${port}`); });