import express, { Express, Response } from 'express';

import { API_PATHS } from './consts';
import { AppController } from './controllers';
import { ErrorHandler } from './middleware';

const App: Express = express();

const { controller } = AppController();

// Base route
App.get('/', (_, res: Response) => { res.send('Hello world! :) This is LumartCh API.'); });

// Base path + controller
App.use(API_PATHS.baseUrl, controller);

// Error handler Middleware
App.use(ErrorHandler);

export default App;