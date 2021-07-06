import express from 'express';

import mainController from './controllers/main.controller';

const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hello world!');
});

router.get('/healthcheck', (req, res) => {
    res.status(200);
});

router.get('/auth', mainController.auth);

export default router;
