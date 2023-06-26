import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (_: Request, res: Response) => {
    res.send('Hello there!');
});

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
