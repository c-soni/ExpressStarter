import express, { Express, NextFunction, Request, Response } from 'express';
import responseTime from 'response-time';
import logger from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import requestId from './request-id/request-id';

logger.token('req-id', (req: Request, _: Response) => (<any>req).id);
const app: Express = express();
const port = 3000;

app.use(requestId());
app.use(responseTime());
app.use(logger(':method :url :status :response-time ms - :res[content-length] :req-id'));
app.use(
    rateLimit({
        windowMs: 1000 * 15,
        max: 3,
        standardHeaders: true,
        legacyHeaders: false,
    })
);
app.use(helmet());

// CORS headers
app.use((_: Request, res: Response, next: NextFunction) => {
    res.appendHeader('Access-Control-Allow-Origin', '*');
    res.appendHeader('Access-Control-Allow-Headers', '*');
    res.appendHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,HEAD,OPTIONS');
    next();
});

app.get('/state', (_: Request, res: Response) => {
    res.status(200).send({ state: 'all ok' });
});

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});
