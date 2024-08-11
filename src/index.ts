import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', (_: Request, res: Response) => {
    res.send('Hello World')
})

const port = 8002
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})