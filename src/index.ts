import dotenv from 'dotenv';
import express, { Express, Response } from 'express';

import { API_PATHS } from './consts';
import { AppController } from './controllers';
import { ErrorHandler } from './middleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const { controller } = AppController();

// Base route
app.get('/', (_, res: Response) => { res.send('Hello world!'); });

// Base path + controller
app.use(API_PATHS.baseUrl, controller);

// Error handler Middleware
app.use(ErrorHandler);

app.listen(port, () => { console.log(`[server]: Server is running at http://localhost:${port}`); });