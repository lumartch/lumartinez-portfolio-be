import dotenv from 'dotenv';

import App from './App';

dotenv.config();

const port = process.env.PORT || 3000;

App.listen(port, () => { console.log(`[server]: Server is running at http://localhost:${port}`); });