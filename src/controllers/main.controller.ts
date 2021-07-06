import express from 'express';

class MainController {
    healthcheck(req: express.Request, res: express.Response) {
        res.status(200).end();
    }

    auth(req: express.Request, res: express.Response) {
        res.status(403).send('thou shall not pass');
    }
}

export default new MainController();
