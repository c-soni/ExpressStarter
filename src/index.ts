import express, { Express, Request, Response } from 'express';
import responseTime from 'response-time';
import logger from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app: Express = express();
const port = 3000;

app.use(responseTime());
app.use(logger('dev'));
app.use(rateLimit({
    windowMs: 1000 * 15,
    max: 3,
    standardHeaders: true,
    legacyHeaders: false
}));
app.use(helmet());

app.get('/', (_: Request, res: Response) => {
    res.send('Hello there!');
});

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});
