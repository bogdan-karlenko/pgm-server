import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();
const app = express();

app.use('/', routes);

const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Running on port ${port}`));
